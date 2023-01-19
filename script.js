function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')


    const img = document.querySelector('#profile img')

    if(html.classList.contains('light')) {
        img.setAttribute('src','./assets/img/Avatar-light.png')
        img.setAttribute("alt","foto de cristiane nazareth, de boina e casaco bege")
    } else {
        img.setAttribute('src','./assets/img/Avatar.png')
        img.setAttribute("alt","Foto de Cristiane de oculos e blusa rosa")

    }
    



}



