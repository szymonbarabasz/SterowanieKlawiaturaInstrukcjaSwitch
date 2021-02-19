document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".text");
  const circle = document.querySelector(".circle");

  function change(e) {
    console.log(e.keyCode);

    switch (e.keyCode) {
      case 37:
        circle.style.left = circle.offsetLeft - 4 + "px";
        break;
      case 38:
        circle.style.top = circle.offsetTop - 4 + "px";
        break;
      case 39:
          circle.style.left = circle.offsetLeft + 4 + "px";
          break;
      case 40:
          circle.style.top = circle.offsetTop + 4 + "px";
          break;
      case 32:
          circle.style.background-color = 
    }
    text.textContent = `Aktualna pozycja (środek koła) to ${circle.offsetLeft} - szerokość i ${circle.offsetTop} - wysokość`
  }
  text.textContent = `Aktualna pozycja (środek koła) to ${circle.offsetLeft} - szerokość i ${circle.offsetTop} - wysokość`
  window.addEventListener("keydown", change);
});
