!(function () {
  var panel = document.getElementById("js-panel"),
    btns = document.querySelectorAll(".flap__btn"),
    btnReplay = document.getElementById("js-replay"),
    init = function () {
      panel.classList.add("is--open");
      for (var i = 0; i < btns.length; i++)
        btns[i].addEventListener("click", function () {
          hidePanel();
        });
      function hidePanel() {
        panel.classList.remove("is--open"),
          btnReplay.classList.add("is--active");
      }
      btnReplay.addEventListener("click", function () {
        resetStage();
      });
    };
  function resetStage() {
    btnReplay.classList.remove("is--active"), init();
  }
  window.onload = function () {
    init();
  };
})();
