let mouseDown = false
let mouseX = 0
let mouseY = 0

const pointColorInput = document.getElementById("pointColor")
const pointShadowColorInput = document.getElementById("pointShadowColor")
const bgColorInput = document.getElementById("bgColor")
const pointSizeInput = document.getElementById("pointSize")
const pointShadowBlurInput = document.getElementById("pointShadowBlur")
const clockTickInput = document.getElementById("clockTick")
const pointRadiusInput = document.getElementById("pointRadius")
const pointInvincInput = document.getElementById("pointInvincible")

const menuElem = document.getElementById("menu")
const menuBtn = document.getElementById("menuBtn")
const clearBtn = document.getElementById("clear")

onmousedown = () => {
  mouseDown = true
}
onmouseup = () => {
  mouseDown = false
}
onmousemove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
}

function main() {
  if (mouseDown === true) {
    if (pointInvincInput.checked === false) {
      let point = document.createElement("div")
      point.style = `left:${mouseX + Math.floor(Math.random() * 8) - pointSizeInput.value / 2}px; top:${mouseY + Math.floor(Math.random() * 8) - pointSizeInput.value / 2
        }px; width:${pointSizeInput.value}px; height:${pointSizeInput.value
        }px; background:${pointColorInput.value};border-radius:${pointRadiusInput.value}%;box-shadow:0 0 ${pointShadowBlurInput.value}px ${pointShadowColorInput.value
        };animation: fade-out 1s linear forwards;`
      point.classList.add("point")
      document.body.appendChild(point)
      setTimeout(() => { point.remove() }, Math.floor(Math.random() * 1000))
    } else {
      let point = document.createElement("div")
      point.style = `left:${mouseX + Math.floor(Math.random() * 8) - pointSizeInput.value / 2}px; top:${mouseY + Math.floor(Math.random() * 8) - pointSizeInput.value / 2
        }px; width:${pointSizeInput.value}px; height:${pointSizeInput.value
        }px; background:${pointColorInput.value};border-radius:${pointRadiusInput.value}%;box-shadow:0 0 ${pointShadowBlurInput.value}px ${pointShadowColorInput.value
        };animation:none`
      point.classList.add("point")
      document.body.appendChild(point)
    }
  }
  setTimeout(() => {
    main()
  }, clockTickInput.value)
}
main()

function menu(state) {
  menuElem.style.right = state
  if (state === "-350px") {
    menuBtn.style.right = "20px"
  } else {
    menuBtn.style.right = "-40px"
  }
}

bgColorInput.addEventListener("input", () => {
  document.body.style.backgroundColor = bgColorInput.value
})

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".point").forEach(point => {
    point.remove()
  })
})