function toggleMode() {
  const html = document.documentElement

  //verifica o clique em cima do modo de luz
  html.classList.toggle("light")

  //aqui vamos verificar se for light usa uma imagem e se for dark usa outra imagem
  //document é utilizado para mexer em algo dentro da página, no front mesmo
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
