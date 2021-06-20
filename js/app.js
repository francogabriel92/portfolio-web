// LANGUAGE CHANGER

const langChanger = () => {
  const esSelector = document.querySelector(".es-lang-selector");
  const enSelector = document.querySelector(".en-lang-selector");
  const esElements = document.querySelectorAll(".lang-es");
  const enElements = document.querySelectorAll(".lang-en");

  enSelector.addEventListener("click", () => {
    esElements.forEach( el => el.classList.add("hidden"));
    enElements.forEach( el => el.classList.remove("hidden"));
  })
  esSelector.addEventListener("click", () => {
    enElements.forEach( el => el.classList.add("hidden"));
    esElements.forEach( el => el.classList.remove("hidden"));
  })
}


langChanger();