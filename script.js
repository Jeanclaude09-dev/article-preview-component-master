const tooltip = document.getElementById("tooltip");
const shareBtn = document.getElementById("btn");

tooltip.classList.add("opacity-0");

shareBtn.addEventListener("click", () => {
  tooltip.classList.toggle("opacity-0");
  tooltip.classList.toggle("scale-95");
  tooltip.classList.toggle("translate-y-1");
});
