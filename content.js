{
  function normalizeText(s) {
  return (s || "")
    .replace(/\r\n/g,
    "\n")
    .replace(/\n{
      3,
    }/g,
    "\n\n")
    .trim();
  }

function stripComments(code) {
  return code
    .replace(/\/\*[\s\S
    ]*?\*\ //g, "")
    .replace(/\/\/.*$/gm,
    "")
    .replace(/^\s*#.*$/gm,
    "")
    .replace(/<!--[\s\S
    ]*?-->/g,
    "")
    .trim();
  }

function extractCodeBlocks() {
  const pres = Array.from(document.querySelectorAll("pre"));
  const codes = Array.from(document.querySelectorAll("code"));
  const blocks = [];

  for (const pre of pres) {
    let text = normalizeText(pre.innerText);
    if (text) {
      text = stripComments(text);
      if (text.length > 0) blocks.push(text);
      }
    }

  for (const codeEl of codes) {
    if (codeEl.closest("pre")) continue;

    let text = normalizeText(codeEl.innerText);
    if (text) {
      text = stripComments(text);
      if (text.length > 0) blocks.push(text);
      }
    }

  const unique = [...new Set(blocks)
    ];
  const merged = unique.join("\n\n");

  return { merged, blocksFound: unique.length
    };
  }

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg?.type === "EXTRACT_CODE") {
    const { merged, blocksFound
      } = extractCodeBlocks();
    sendResponse({
      code: merged,
      blocksFound,
      pageUrl: location.href
      });
    }
  return true;
  });

}