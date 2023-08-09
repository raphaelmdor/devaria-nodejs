try{
    const listaDeProdutosDisponiveis = [
        "Pão",
        "Leite",
        "Açucar",
        "Nescal",
        "Café",
        "Manteiga",
        "Queijo",
        "Presunto",
        "Arroz",
        "Feijão",
        "Ovo",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    });
    
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));
    
    listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento =>{
        return !listaDeProdutosDisponiveis.find(produto => produto === argumento)
    });
    
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nós não temos: ${argumento}`));
    
    listaDeProdutosDisponiveis.sort();
    listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto está disponível:  ${produto}`));
}catch(e){
    console.log(`Não foi possívle realizar o pedido de compra.`)
}
