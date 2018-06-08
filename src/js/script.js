import anime from "animejs";
{
  const handleClickButton = e => {
    console.log(e);
    var el = document.querySelector(".box");
    el.classList.remove("hide");

    const finishedPromise = anime({
      targets: el,
      translateX: "100vw",
      duration: 1000,
      loop: false,
      easing: "easeOutQuad"
    });

    const logFinished = () => {
      el.removeAttribute("style");
      el.classList.add("hide");
    };

    finishedPromise.finished.then(logFinished);
  };

  const init = () => {
    document
      .querySelector(".button")
      .addEventListener("click", handleClickButton);
  };

  init();
}
