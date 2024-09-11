document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("#sidebar-me > ul:last-of-type li a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");
      window.location.href = href;
    });
  });
});
