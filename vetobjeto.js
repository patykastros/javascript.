function funcao(){
    var vet = []
    for(var i=0; i<5; i++){
        var objeto ={}

    //coloca dados no objeto
    objeto.codigo = Number(prompt("Código"))
    objeto.nome = Number(prompt("Nome"))
    objeto.qtde = Number(prompt("Quantidade"))
    objeto.preco = Number(prompt("Preço"))

    //coloca objeto no vetor
    vet.push(objeto)
    }
    //calcula o estoque
    var estoque = 0
    for(var i=0; i<5; i++){
       estoque = estoque + vet[1].qtde
    }
    alert("Quantidade em estoque: " + estoque)   
    
}
