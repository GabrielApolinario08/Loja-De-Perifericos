const containerProdutos = document.querySelector('#container-produtos')
const todosProdutos = [
    // redragon
    {
        'tipo': 'mouse',
        'foto': 'img/mouse-cobra.png ',
        'nome': 'Mouse Gamer Redragon Cobra, Chroma RGB, 12400DPI, 7 Botões, Preto - M711 V2',
        'valor': 147.05,
        'marca': 'reddragon'
    },

    {
        'tipo': 'teclado',
        'foto': 'img/teclado-kumara.png',
        'nome': 'Teclado Mecânico Gamer Redragon Kumara, RGB, Switch Outemu Blue, PT - K552RGB-1 (PT-BLUE)',
        'valor': 235.28,
        'marca': 'reddragon'
    },

    {
        'tipo': 'headset',
        'foto': 'img/headset-hero.png',
        'nome': 'Headset Gamer Redragon Hero, Driver de 53mm, P3, Microfone com Redução de Ruído, Controlador Integrado, Preto - H530',
        'valor': 209.90,
        'marca': 'reddragon'
    },

    // razer
    {
        'tipo': 'mouse',
        'foto': 'img/mouse-basilisk.png',
        'nome': 'Razer Mouse Basilisk V2',
        'valor': 756.34,
        'marca': 'razer'
    },

    {
        'tipo': 'teclado',
        'foto': 'img/teclado-blackWidow.png',
        'nome': 'Teclado Sem Fio Mecânico Gamer Razer BlackWidow V3 Pro, Chroma, Razer Switch Green, US - RZ03-03530200-R3U1',
        'valor': 1799.99,
        'marca': 'razer'
    },

    {
        'tipo': 'headset',
        'foto': 'img/headset-blackShark.png',
        'nome': 'Headset Gamer Razer BlackShark V2 X, Som Surround 7.1, P2, Drivers 50mm - RZ04-03240100-R3U1',
        'valor': 399.99,
        'marca': 'razer'
    },

    // hyperx
    {
        'tipo': 'mouse',
        'foto': 'img/mouse-pulsifire.png',
        'nome': 'Mouse Gamer HyperX Pulsefire FPS PRO RGB, 16000DPI - 4P4F7AA',
        'valor': 269.99,
        'marca': 'hyperx'
    },

    {
        'tipo': 'teclado',
        'foto': 'img/teclado-alloy.png',
        'nome': 'Teclado Mecânico Gamer HyperX Alloy Origins, RGB, Switch HyperX Red, ABNT2 - 4P4F6A2#AC4',
        'valor': 449.99,
        'marca': 'hyperx'
    },

    {
        'tipo': 'headset',
        'foto': 'img/headset-cloud.png',
        'nome': 'Headset Gamer HyperX Cloud Alpha S Blackout, Som Surround 7.1, Drivers 50mm, Múltiplas Plataformas, USB e P3 - 4P5L2AA',
        'valor': 429.99,
        'marca': 'hyperx'
    },

    // fallen
    {
        'tipo': 'mouse',
        'foto': 'img/mouse-f70.png',
        'nome': 'Mouse Gamer Fallen F70 Tempest Ultraleve, 70g, RGB, Switch Omron, Sensor 3360, Preto',
        'valor': 289.99,
        'marca': 'fallen'
    },

    {
        'tipo': 'teclado',
        'foto': 'img/teclado-ace.png',
        'nome': 'Teclado Mecânico Gamer Fallen Ace, RGB, Switch Gateron Black, ABNT2, Branco',
        'valor': 349.99,
        'marca': 'fallen'
    },

    {
        'tipo': 'headset',
        'foto': 'img/headset-eco.png',
        'nome': 'Headset Gamer Fallen Eco, RGB, Surround 7.1, Drivers 50mm, USB, Preto - HE-GA-FN-EC-PT',
        'valor': 229.99,
        'marca': 'fallen'
    },




]

for (let i = 0; i < todosProdutos.length; i++) {
    containerProdutos.innerHTML += `
    <div class="card-produto">
        <img src="${todosProdutos[i].foto}" alt="">
        <h3 title="${todosProdutos[i].nome}"><span>${todosProdutos[i].nome}</span></h3>
        <div class="container-btns">
            <span class="valor-produto">R$ ${todosProdutos[i].valor}</span>
            <span class="favorite-carrinho">
                <button id="addCarrinho"><i class="fa-solid fa-cart-plus cor-icon-car" style="font-size: 20px;"></i></button> 
                <button id="addFavorito"><i class="fa-solid fa-heart cor-icon" style="font-size: 20px;"></i></button>
            </span>
        </div>
        <div class="container-btn-comprar">
            <button class="btn-comprar"><i class="fa-solid fa-cart-shopping"
            style="font-size: 20px;"></i> Comprar</button>
        </div>
    </div>
`
}
let btnAddCar = document.querySelectorAll('#addCarrinho')
let btnAddFavorite = document.querySelectorAll('#addFavorito')


// filtros
const slider = document.querySelector('#myRange')
const output = document.querySelector('#value')
output.innerHTML = parseFloat(slider.value).toFixed(2).replace('.', ',')
slider.oninput = function () {
    output.innerHTML = parseFloat(this.value).toFixed(2).replace('.', ',')
}
let checkboxs = document.querySelectorAll('.caixa-marcacao input')
checkboxs.forEach((i) => {
    i.addEventListener('change', filtro)
})
document.querySelector('.container-preco input').addEventListener('click', filtro)


function filtro() {
    let preco = parseFloat(slider.value).toFixed(2)
    let selectedProducts = getSelectedValues('tipo')
    let selectedMarcas = getSelectedValues('marca')
    let filteredProducts = todosProdutos.filter(item =>
        (selectedProducts.length === 0 || selectedProducts.includes(item.tipo)) &&
        (selectedMarcas.length === 0 || selectedMarcas.includes(item.marca)) &&
        (item.valor <= preco)
    )

    let productsNaoMostraveis = todosProdutos.filter(item =>
        !filteredProducts.includes(item)
    )


    let nomeCadaProduto = document.querySelectorAll('.card-produto h3 span')
    let cardCadaProduto = document.querySelectorAll('.card-produto')

    let nomeProductsNaoMostraveis = []
    let nomeProductsMostraveis = []
    let teste = itemProductsNaoMostraveis(productsNaoMostraveis)

    nomeCadaProduto.forEach((i) => {
        if (teste.includes(i.innerText)) {
            let elementoPai = i.parentElement
            elementoPai = elementoPai.parentElement
            nomeProductsNaoMostraveis.push(elementoPai)
        }
    })

    cardCadaProduto.forEach((i) => {
        if (!nomeProductsNaoMostraveis.includes(i)) {

            nomeProductsMostraveis.push(i)
        }
    })


    nomeProductsNaoMostraveis.forEach((i) => {
        i.classList.add('d-none')
    })
    nomeProductsMostraveis.forEach((i) => {
        i.classList.remove('d-none')
    })
    console.log(filteredProducts);
}

function itemProductsNaoMostraveis(array) {
    let cadaProduto = []
    array.forEach((i) => {
        cadaProduto.push(i.nome)
    })
    return cadaProduto

}


function getSelectedValues(type) {
    let selectedValues = []
    checkboxs.forEach(checkbox => {
        if (checkbox.dataset.type === type && checkbox.checked) {
            selectedValues.push(checkbox.dataset.value)
        }
    })
    return selectedValues
}


// favoritos
mensagemDeVazioFav()
function mensagemDeVazioFav() {
    if (document.querySelector('#cola').innerHTML.trim() === '') {
        document.querySelector('#cola').innerHTML = `<span class="msgVazioFav msgVazio">Sua lista de favoritos está vazia.</span>`
    }

}

for (let i = 0; i < btnAddFavorite.length; i++) {
    let btnFavorite = btnAddFavorite[i]
    btnFavorite.addEventListener('click', addNoFavorito)
}
function addNoFavorito(event) {
    event = event.target
    let produto = event.parentElement
    produto = produto.parentElement
    produto = produto.parentElement
    produto = produto.parentElement
    let favs = document.querySelector('#cola')
    let img = produto.querySelector('img').src
    let title = produto.querySelector('h3 span').innerText
    let preco = produto.querySelector('.container-btns .valor-produto').innerText
    let mudaCorCoracao = produto.querySelector('.favorite-carrinho #addFavorito i')
    let msg = favs.querySelector('.msgVazioFav')
    if (mudaCorCoracao.classList.contains('cor-icon')) {
        mudaCorCoracao.classList.remove('cor-icon')
        mudaCorCoracao.classList.add('favorito-add')
        if (msg !== null) {
            msg.remove()
        }
        favs.innerHTML += `
         <div class="item-favorito">
             <div class="container-img-title-favoritos">
                 <img src="${img}" alt="">
                 <h3 title="${title}">${title}</h3>
             </div>
             <div class="container-preco-excluir-favoritos">
                 <span>${preco}</span>
                 <i id="excluir-favorito" class="fa-solid fa-trash"></i>
             </div>
             <div class="container-comprar-favoritos"><button class="btn-comprar"><i class="fa-solid fa-cart-shopping"
             style="font-size: 20px; margin: 0 auto;"></i> Comprar</button></div>
         </div>
     `

    } else {
        let elementoPai = mudaCorCoracao.parentElement
        elementoPai = elementoPai.parentElement
        elementoPai = elementoPai.parentElement
        elementoPai = elementoPai.parentElement
        let nomeProduto = elementoPai.querySelector('h3 span').innerText


        let nomeProdutoNofavorito = document.querySelectorAll('.item-favorito h3')

        nomeProdutoNofavorito.forEach((i) => {
            if (nomeProduto == i.innerText) {
                i = i.parentElement
                i = i.parentElement
                i.remove()
                mudaCorCoracao.classList.remove('favorito-add')
                mudaCorCoracao.classList.add('cor-icon')
            }
        })
    }


    let btnRemoveFavorite = document.querySelectorAll('#excluir-favorito')
    for (let i = 0; i < btnRemoveFavorite.length; i++) {
        let removeFavorite = btnRemoveFavorite[i]
        removeFavorite.addEventListener('click', removeDoFavorito)
    }
    mensagemDeVazioFav()
}



function removeDoFavorito(event) {
    let itemExcluido = event.target
    itemExcluido = itemExcluido.parentElement
    itemExcluido = itemExcluido.parentElement
    itemExcluido.remove()
    let oi = itemExcluido.querySelector('h3').innerText

    let card = document.querySelectorAll('.card-produto h3')

    for (let i = 0; i < card.length; i++) {
        let fds = card[i]
        if (oi === fds.innerText) {
            fds = fds.parentElement
            let mudaCor = fds.querySelector('#addFavorito i')
            mudaCor.classList.add('cor-icon')
            mudaCor.classList.remove('favorito-add')
        }

    }
    mensagemDeVazioFav()
}

// carrinho
mensagemDeVazioCar()
function mensagemDeVazioCar() {
    if (document.querySelector('#corpo-carrinho').innerHTML.trim() === '') {
        document.querySelector('#corpo-carrinho').innerHTML = `<span class="msgVazioCar msgVazio">O seu carrinho está vazio.</span>`
    }
}

document.querySelector('#valor-total').innerHTML = `00,00`
let valorTotal = 0
let quantidadeDeProdutos = 0

for (let i = 0; i < btnAddCar.length; i++) {
    let itemEscolhido = btnAddCar[i]
    itemEscolhido.addEventListener('click', addNoCarrinho)
}

function addNoCarrinho(event) {
    console.log('salve');
    let mainCarrinho = document.querySelector('#corpo-carrinho')
    event = event.target
    let produto = event.parentElement
    produto = produto.parentElement
    produto = produto.parentElement
    produto = produto.parentElement
    let img = produto.querySelector('img').src
    let title = produto.querySelector('h3 span').innerText
    let preco = produto.querySelector('.container-btns .valor-produto').innerText
    let iconCart = produto.querySelector('.favorite-carrinho #addCarrinho i')
    let msg = mainCarrinho.querySelector('.msgVazioCar')

    if (iconCart.classList.contains('cor-icon-car')) {
        iconCart.classList.remove('cor-icon-car')
        iconCart.classList.add('carrinho-add')

        if (msg !== null) {
            msg.remove()
        }
        mainCarrinho.innerHTML += `
            <div class="item-carrinho">
                <div class="container-img-title-favoritos">
                    <img src="${img}" alt="">
                    <h3 title="${title}">${title}</h3>
                </div>
                <div class="container-preco-excluir-favoritos">
                    <span>${preco}</span>
                    <i id="excluir-item" class="fa-solid fa-trash"></i>
                </div>
                <div class="container-preco-excluir-favoritos">
                    <input value="1" type="number" min="1">
                </div>
            </div>
        `
    } else {

        let elementoPai = iconCart.parentElement
        elementoPai = elementoPai.parentElement
        elementoPai = elementoPai.parentElement
        elementoPai = elementoPai.parentElement

        let nomeProduto = elementoPai.querySelector('h3 span').innerText

        let nomeProdutoNofavorito = document.querySelectorAll('.item-carrinho h3')
        nomeProdutoNofavorito.forEach((i) => {
            if (nomeProduto == i.innerText) {
                i = i.parentElement
                i = i.parentElement
                i.remove()
                iconCart.classList.remove('carrinho-add')
                iconCart.classList.add('cor-icon-car')
            }
        })
    }
    quantidadeDeProdutos = document.querySelectorAll('.container-preco-excluir-favoritos input')
    quantidadeDeProdutos.forEach((i) => {
        let prodEspeci = i
        prodEspeci.addEventListener('click', mudaQuantidadeDeProtutos)
    })

    let btnsExcluiCarrinho = document.querySelectorAll('#excluir-item')
    btnsExcluiCarrinho.forEach((i) => {
        i.addEventListener('click', removeDoCarrinho)
    })
    mudaQuantidadeDeProtutos()
    mensagemDeVazioCar()
}



function removeDoCarrinho(event) {
    event = event.target
    let produto = event.parentElement
    produto = produto.parentElement
    let nomeProd = produto.querySelector('h3').innerText


    let nomeTodosProdutos = document.querySelectorAll('.card-produto h3 span')
    produto.remove()
    nomeTodosProdutos.forEach((i) => {
        if (nomeProd == i.innerText) {
            i = i.parentElement
            i = i.parentElement
            let btnAddCart = i.querySelector('.carrinho-add')
            btnAddCart.classList.remove('carrinho-add')
            btnAddCart.classList.add('cor-icon-car')
        }
    })
    quantidadeDeProdutos = document.querySelectorAll('.container-preco-excluir-favoritos input')
    quantidadeDeProdutos.forEach((i) => {
        let prodAcionado = i
        prodAcionado.addEventListener('click', mudaQuantidadeDeProtutos)
    })
    mudaQuantidadeDeProtutos()
    mensagemDeVazioCar()
}



function mudaQuantidadeDeProtutos() {
    let preco = document.querySelectorAll('.item-carrinho .container-preco-excluir-favoritos span')
    valorTotal = 0
    for (let i = 0; i < preco.length && i < quantidadeDeProdutos.length; i++) {
        if (quantidadeDeProdutos[i].value <= '0') {
            quantidadeDeProdutos[i].value = 1
        }
        let valor = parseFloat(preco[i].innerText.replace("R$", ""))    
        valor = valor * parseFloat(quantidadeDeProdutos[i].value)
        valorTotal += valor
    }
    console.log(valorTotal);
    valorTotal = valorTotal.toFixed(2) + ''

    document.querySelector('#valor-total').innerHTML = `${valorTotal.replace(".", ",")}`
}