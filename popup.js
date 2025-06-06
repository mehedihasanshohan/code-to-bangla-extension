document.getElementById("saveBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = tab.url;
    const note = document.getElementById("note").value;

    chrome.storage.local.set({ [url]: note }, () => {
      document.getElementById("status").textContent = "✅ Saved!";
    });
  });
});

chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const tab = tabs[0];
  const url = tab.url;

  chrome.storage.local.get(url, (data) => {
    if (data[url]) {
      document.getElementById("note").value = data[url];
    }
  });
});
