(() => {
  window.addEventListener("scroll", function () {
    var button = document.getElementById("fixedButton");
    var rect = button.getBoundingClientRect();
    var viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (rect.bottom >= viewportHeight) {
      button.style.bottom = "10px"; // Оставляем небольшой отступ от нижнего края
    } else {
      button.style.bottom = "0";
    }
  });
})();
