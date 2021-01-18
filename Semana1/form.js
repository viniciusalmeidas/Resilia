(() => {
    const abas = document.querySelectorAll('[data-aba]') (parameter) aba: Element

    esconderConteudos =() => {
        const contudos = document.querySelectorAll('[data-conteudos]')
        conteudos.forEach(conteudo =>conteudo.classlist.add('hide'))

    }
    
    inativarAbas =() => {
        abas.forEach(aba =>aba.classlist.remove('ativa'))
        
    }

    ativarConteudo =(valor) => {
        const conteudo = document.querySelector("[data-conteudo="${valor}"]")
        conteudo.classlist.remove('hide')
    }
    
    ativarAba =(aba) => {
      aba.classlist,add('ativa')
    }
    

    abas.forEach(aba => aba.addEventListener('click',() => {    const valor = aba.dataset.aba

        esconderConteudos()
        inativarAbas()
        ativarConteudo(valor)
        ativaraAbaO(aba)

    }))
})()