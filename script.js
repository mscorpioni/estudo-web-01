function toggleMode() {
  const body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (body.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Profile picture light mode")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Profile picture dark mode")
  }

  /*
  A função toogle acima executa automaticamente esta verificação abaixo
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode")
  } else {
    body.classList.add("light-mode")
  }
  */
}
