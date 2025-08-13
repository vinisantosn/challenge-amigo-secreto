let amigos = [];


function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('amigo').value
    if (nomeDoAmigo.length != 0) {
        amigos.push(nomeDoAmigo)
        console.log(amigos)
        limparCampo()
        atualizarListaDeAmigos()
        return amigos;
    } else {
        return alert("Por favor, insira um nome.")
    }
}

function atualizarListaDeAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = ""
    if (lista.length != 0) {
        amigos.forEach(amigo => {
            lista.innerHTML += `<li>${amigo}</li>`
        });
        return lista
    }
}
function sortearAmigo() {
    let limiteSuperiorSorteio = amigos.length 
    if (amigos.length != 0) {
        let indexSorteado = Math.floor(Math.random() * limiteSuperiorSorteio)
        let lista = document.getElementById('listaAmigos')
        limparCampoLista()
        console.log(`LIMITE SUPERIOR SORTEIO: ${limiteSuperiorSorteio}`)
        console.log(`INDEX SORTEADO: ${indexSorteado}`)
        console.log(`AMIGO SORTEADO: ${amigos[indexSorteado]}`)
        lista.innerHTML= amigos[indexSorteado]
    }
    limparLista()
}

function limparCampo() {
    let nomeDoAmigo = document.getElementById('amigo')
    return nomeDoAmigo.value = ""
}
function limparCampoLista() {
    let lista = document.querySelectorAll('li')
    return lista.innerHTML = ""
}
function limparLista() {
    amigos = []
    return amigos
}
