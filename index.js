const audio = new Audio("./frosty-wind-nature-sounds-8051.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});