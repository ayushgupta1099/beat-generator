window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".audio");
  const tabs = document.querySelectorAll(".tabs>div");
  const bubbles = document.querySelector(".bubbles");
  const colors = [
    "#8854d0",
    "#f6b93b",
    "#78e08f",
    "#F8EFBA",
    "#17c0eb",
    "#ff4d4d",
  ];

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();
      createAnimation(index);
    });
  });

  const createAnimation = (index) => {
    const bubble = document.createElement("div");
    bubbles.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "float 1s ease";
    bubble.addEventListener("animationend", function () {
      bubbles.removeChild(this);
    });
  };
});
