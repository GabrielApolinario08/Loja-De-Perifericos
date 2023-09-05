const menuLateral = document.querySelector('#menu-lateral')
const btnClose = document.querySelector('#close-menu-lateral')
const btnOpen = document.querySelector('#open-menu-lateral')


document.addEventListener('mousedown', (event) => {
    if (!menuLateral.contains(event.target)) {
        fecharMenu()
    }
})


window.addEventListener('scroll', function() {
    let navBar = this.document.querySelector('.menu-principal')
    navBar.classList.toggle('muda-cor-nav', this.window.scrollY > 170)
})


function abrirMenu() {
    menuLateral.classList.add("active")
}

function fecharMenu() {
    menuLateral.classList.remove("active")
}

btnOpen.addEventListener('click', abrirMenu)
btnClose.addEventListener('click', fecharMenu)

const btnOpenFavorite = document.querySelector('#openFavorite')
const favoritos = document.querySelector('#favoritos')
const btnCloseFavorite = document.querySelector('#closeFavorite')

function abrirFavoritos() {
    favoritos.classList.add('favoritos-active')
    btnCloseFavorite.classList.add('btnClose-active')
    btnCloseFavorite.classList.remove('btnClose-desativado')
}

function fecharFavoritos() {
    favoritos.classList.remove('favoritos-active')
    btnCloseFavorite.classList.remove('btnClose-active')
    btnCloseFavorite.classList.add('btnClose-desativado')
}

btnOpenFavorite.addEventListener('click', abrirFavoritos)
btnCloseFavorite.addEventListener('click', fecharFavoritos)

const btnOpenCarrinho = document.querySelector('#openCart')
const btnCloseCarrinho = document.querySelector('#closeCart')
const carrinho = document.querySelector('#carrinho')

document.addEventListener('mousedown', (event) => {
    if (!carrinho.contains(event.target)) {
        fecharCarrinho()
    }

    if (!favoritos.contains(event.target)) {
        fecharFavoritos()
    }
})

function abrirCarrinho() {
    carrinho.classList.add('carrinho-active')
    btnCloseCarrinho.classList.add('btnClose-active')
    btnCloseCarrinho.classList.remove('btnClose-desativado')
}

function fecharCarrinho() {
    carrinho.classList.remove('carrinho-active')
    btnCloseCarrinho.classList.remove('btnClose-active')
    btnCloseCarrinho.classList.add('btnClose-desativado')
}

btnOpenCarrinho.addEventListener('click', abrirCarrinho)
btnCloseCarrinho.addEventListener('click', fecharCarrinho)