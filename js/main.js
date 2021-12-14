window.onload = () => {
  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 300) {
      document.querySelector("#nav").classList.add("is-scrolling");
    } else {
      document.querySelector("#nav").classList.remove("is-scrolling")
    }
  });
};
