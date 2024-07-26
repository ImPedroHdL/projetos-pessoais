function show() {
    let registrar = document.querySelector('.background-register')
    registrar.classList.toggle('hidden')
}

function logIn(evento) {
    evento?.preventDefault()

    let background = document.querySelector('.background-login')
    let formulario = document.querySelector('form')
    let dadosFormulario = new FormData(formulario)

    let userName = dadosFormulario.get('username-login')
    let password = dadosFormulario.get('user-password')

    let savedUserName = localStorage.getItem("userName")
    let savedPassword = localStorage.getItem("password")


    let erro = background.querySelector('.error-message')
    if (erro) {
        erro.remove()
    }

    if (userName === "" || password === "") {
        let p = document.createElement('p')
        formulario.style.boxShadow = "2px 2px 20px 2px red"
        p.textContent = 'UM OU MAIS CAMPOS EM BRANCO'
        p.className = 'error-message'
        p.style.fontSize = '10px'
        p.style.color = 'red'
        background.appendChild(p)

    } else if (savedUserName === userName && savedPassword === password) {
        alert("LOGIN BEM SUCEDIDO")
        
    } else {
        let p = document.createElement('p')
        formulario.style.boxShadow = "2px 2px 20px 2px red"
        p.textContent = 'USUARIO OU SENHA INVÁLIDOS!'
        p.className = 'error-message'
        p.style.fontSize = '10px'
        p.style.color = 'red'
        background.appendChild(p)
    }
}
function register(evento) {
    evento?.preventDefault()
}