const slider = document.querySelector("#slider")
let sliderSection = document.querySelectorAll(".slider-section")
let sliderSectionLast = sliderSection[sliderSection.length -1]

const btnDer = document.querySelector("#boton-der")
const btnIzq = document.querySelector("#boton-izq")

slider.insertAdjacentElement("afterbegin", sliderSectionLast)

function Next(){
  let sliderSectionFirst =  document.querySelectorAll(".slider-section")[0]
  slider.style.marginLeft = "-200%"
  slider.style.transition = "all 0.5s"
  setTimeout(function(){
    slider.style.transition = "none"
    slider.insertAdjacentElement("beforeend", sliderSectionFirst)
    slider.style.marginLeft = "-100%"
  },500)
}
function Prev(){
  let sliderSection =  document.querySelectorAll(".slider-section")
  let sliderSectionLast = sliderSection[sliderSection.length -1]
  slider.style.marginLeft = "0"
  slider.style.transition = "all 0.5s"
  setTimeout(function(){
    slider.style.transition = "none"
    slider.insertAdjacentElement("afterbegin", sliderSectionLast)
    slider.style.marginLeft = "-100%"
  },500)
}
btnDer.addEventListener("click", function(){Next();})
btnIzq.addEventListener("click", function(){Prev();})

setInterval(function(){Next()}, 3000)