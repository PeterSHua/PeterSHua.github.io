document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".img-link").forEach((e) => {
    e.addEventListener("click", () => {
      window.open("https://tinker-base.github.io", "_blank");
    });
  });
});
