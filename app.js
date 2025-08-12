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
    if(lista.length!=0){
        amigos.forEach(amigo => {
            lista.innerHTML += `<li>${amigo}</li>`
        });       
        return lista
    } 
}

function limparCampo() {
    let nomeDoAmigo = document.getElementById('amigo')
    return nomeDoAmigo.value = ""
}
function limparCampoLista() {
    let lista = document.getElementById('listaAmigos')
    return lista.value = ""
}
