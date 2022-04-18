// eslint-disable-next-line no-unused-vars
chrome.runtime.onMessage.addListener((msg, sender) => {
  // console.log("message received");
  if (msg.action == "toggle") {
    let url = msg.url;
    toggle(url);
  }
});

var iframe = document.createElement("iframe");
iframe.style.background = "white";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9000000000000000000";
iframe.style.border = "0px";
iframe.style.borderLeft = "1px solid #ccc";
iframe.style.transition = "left 0.2s";

function toggle(url) {
  if (iframe.style.width == "0px") {
    iframe.style.width = "400px";
    iframe.src = chrome.runtime.getURL("index.html?url=" + url);
  } else {
    iframe.style.width = "0px";
  }
}

document.body.appendChild(iframe);
