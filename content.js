document.addEventListener("mouseover", function (event) {
  const selection = window.getSelection().toString().trim();
  if (!selection) return;

  const explanation = window.banglaExplanations[selection];
  if (explanation) {
    showTooltip(event.pageX, event.pageY, explanation);
  }
});

function showTooltip(x, y, text) {
  removeTooltip();

  const tooltip = document.createElement("div");
  tooltip.id = "code-tooltip";
  tooltip.innerText = text;
  tooltip.style.position = "absolute";
  tooltip.style.top = y + 10 + "px";
  tooltip.style.left = x + 10 + "px";
  tooltip.className = "bangla-tooltip";
  document.body.appendChild(tooltip);
}

function removeTooltip() {
  const old = document.getElementById("code-tooltip");
  if (old) old.remove();
}

document.addEventListener("mouseout", removeTooltip);
