
const copyButton = document.getElementById("copyCitation");
const citationText = document.getElementById("citationText");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (copyButton && citationText) {
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(citationText.innerText);
      const oldText = copyButton.textContent;
      copyButton.textContent = "Copied";
      setTimeout(() => (copyButton.textContent = oldText), 1400);
    } catch (error) {
      copyButton.textContent = "Copy failed";
      setTimeout(() => (copyButton.textContent = "Copy"), 1400);
    }
  });
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
