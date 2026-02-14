{
  const els = {
  key: document.getElementById("key"),
  save: document.getElementById("save"),
  status: document.getElementById("status"),
  error: document.getElementById("error"),
  meta: document.getElementById("meta"),
  out: document.getElementById("out")
  };

function setStatus(msg) {
  els.status.textContent = msg || "";
  }

function setError(msg) {
  els.error.textContent = msg || "";
  }

function setOutput(text) {
  els.out.textContent = text || "";
  }

function setMeta(meta) {
  els.meta.textContent = meta || "";
  }

async function loadKey() {
  const { openai_api_key
    } = await chrome.storage.sync.get("openai_api_key");
  if (openai_api_key) {
    els.key.value = openai_api_key;
    setStatus("API key loaded.");
    } else {
    setStatus("Set your API key.");
    }
  }

els.save.addEventListener("click", async () => {
  const val = (els.key.value || "").trim();
  if (!val) {
    setError("Please paste your OpenAI API key first.");
    return;
    }
  await chrome.storage.sync.set({ openai_api_key: val
    });
  setError("");
  setStatus("Saved.");
  });

chrome.runtime.onMessage.addListener((msg) => {
  if (msg?.type === "STATUS") {
    setError("");
    setStatus(msg.message || "");
    }

  if (msg?.type === "RESULT") {
    if (!msg.ok) {
      setOutput("");
      setMeta("");
      setError(msg.error || "Unknown error.");
      setStatus("Failed.");
      return;
      }

    const { pageUrl, blocksFound, output
      } = msg.data || {};
    setError("");
    setStatus("Done.");
    setMeta(`Page: ${pageUrl
      } | Blocks: ${blocksFound
      }`);
    setOutput(output || "");
    }
  });

loadKey();

}