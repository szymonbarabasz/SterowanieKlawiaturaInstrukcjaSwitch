document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".text");
  const circle = document.querySelector(".circle");

  function change(e) {
    text.textContent = `Aktualna pozycja (środek koła) to ${circle.offsetLeft} - szerokość i ${circle.offsetTop} - wysokość`;
    switch (e.keyCode) {
      case 37:
        circle.style.left = circle.offsetLeft - 20 + "px";
        break;
      case 38:
        circle.style.top = circle.offsetTop - 20 + "px";
        break;
      case 39:
        circle.style.left = circle.offsetLeft + 20 + "px";
        break;
      case 40:
        circle.style.top = circle.offsetTop + 20 + "px";
        break;
      case 32:
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        circle.style.backgroundColor = `rgb(${red},${green},${blue})`;
        break;
      default:
        text.textContent = "Kliknąłeś cokolwiek";
        break;
    }
  }

  window.addEventListener("keydown", change);
});
