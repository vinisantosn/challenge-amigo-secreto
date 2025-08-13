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
    let limiteSuperiorSorteio = amigos.length - 1
    if (amigos.length != 0) {
        let indexSorteado = parseInt(Math.random() * limiteSuperiorSorteio + 1)
        let lista = document.getElementById('listaAmigos')
        limparCampoLista()
        console.log(indexSorteado)
        console.log(amigos[indexSorteado])
        lista.innerHTML= amigos[indexSorteado]
    }
}

function limparCampo() {
    let nomeDoAmigo = document.getElementById('amigo')
    return nomeDoAmigo.value = ""
}
function limparCampoLista() {
    let lista = document.querySelectorAll('li')
    return lista.innerHTML = ""
}
