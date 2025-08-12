let listaDeAmigos = [];


function adicionarAmigo() {
    let nomeDoAmigo = document.getElementById('amigo').value
    if(nomeDoAmigo.length != 0){
        listaDeAmigos.push(nomeDoAmigo)
        limparCampo()
        return listaDeAmigos;
    } else {
        return alert("Por favor, insira um nome.")
    }
}

function limparCampo(){
    let nomeDoAmigo = document.getElementById('amigo')
    return nomeDoAmigo.value = ""
}
