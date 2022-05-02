

var pontuacao = 0


function verificaResposta(e){
    event.preventDefault()

    let verificacao = document.querySelector("input[name='resposta']:checked").value
    
    if(verificacao == '140'){
        pontuacao +=1
    }else{
        pontuacao ==pontuacao
    }

 


    //Selecionando o button com id button-start e para alterar a função
    let button = document.getElementById('button-start')
    button.setAttribute('onclick','questionThree()')
    //Alterando o conteudo das perguntas
    let tittle = document.getElementById('tittle')
    let resposta1 = document.getElementById('resposta1')
    let resposta2 = document.getElementById('resposta2')
    let resposta3 = document.getElementById('resposta3')
    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')
    let p3 = document.getElementById('p3')
    tittle.innerHTML = 'Qual clube tem a maior quantidade de títulos da Champions League?'
    resposta1.setAttribute('value','Ba')
    p1.innerText = 'Barcelona'

    resposta2.setAttribute('value','Mi')
    p2.innerText = 'Milan'

    resposta3.setAttribute('value','Real')
    p3.innerText = 'Real Madrid'
    
}

function questionThree(e){

    event.preventDefault()

    let verificacao = document.querySelector("input[name='resposta']:checked").value
    
    if(verificacao == 'Real'){
        pontuacao +=1
    }else{
        pontuacao ==pontuacao
    }

 


    //Selecionando o button com id button-start e para alterar a função
    let button = document.getElementById('button-start')
    button.setAttribute('onclick','finish()')
    //Alterando o conteudo das perguntas
    let tittle = document.getElementById('tittle')
    let resposta1 = document.getElementById('resposta1')
    let resposta2 = document.getElementById('resposta2')
    let resposta3 = document.getElementById('resposta3')
    let p1 = document.getElementById('p1')
    let p2 = document.getElementById('p2')
    let p3 = document.getElementById('p3')
    tittle.innerHTML = 'Qual jogador tem maior número de assistências na Champions League?'
    resposta1.setAttribute('value','Me')
    p1.innerText = 'Messi'

    resposta2.setAttribute('value','Fa')
    p2.innerText = 'Fábregas'

    resposta3.setAttribute('value','In')
    p3.innerText = 'Iniesta'

}

function finish(){
    let verificacao = document.querySelector("input[name='resposta']:checked").value
    if(verificacao == 'Fa'){
        pontuacao +=1
    }else{
        pontuacao ==pontuacao
    }

    let button = document.getElementById('button')
    button.innerText = 'Finalizar'
    button.setAttribute('onclick','finished()')
}
function finished(e){
    event.preventDefault()
    let resposta1 = document.getElementById('resposta1')
        let resposta2 = document.getElementById('resposta2')
        let resposta3 = document.getElementById('resposta3')
        let p1 = document.getElementById('p1')
        let p2 = document.getElementById('p2')
        let p3 = document.getElementById('p3')
    let botao = document.getElementById('btn')
    resposta1.parentNode.removeChild(resposta1)
    p1.parentNode.removeChild(p1)
    resposta2.parentNode.removeChild(resposta2)
    p2.parentNode.removeChild(p2)
    resposta3.parentNode.removeChild(resposta3)
    p3.parentNode.removeChild(p3)

    botao.parentNode.removeChild(btn)
    if(pontuacao =='0' || pontuacao =='1'){
        let h3 = document.querySelector('h3')
        let tittle = document.getElementById('tittle')
       ///////////////////////////////////////
      
        ////////////////////////////////////////
        /////////////////////////////////
        let img1 = document.createElement('img')
        let div_img1 = document.getElementById('answer1')
        div_img1.setAttribute('class','div_img')
        let div_img2 = document.getElementById('answer2')
        div_img2.setAttribute('class','center_img')
        let div_3 = document.getElementById('answer3')
        div_3.style.minWidth = '500px'
       /////////////////////////////////
       
        ///////////////////////////////////////////
        h3.innerText = 'Hmmm... Parece que você precisa melhorar!'
        img1.setAttribute('src','images/star.png')
        img1.setAttribute('class','img1')
        div_img1.appendChild(img1)

        let img2 = document.createElement('img')
        img2.setAttribute('src','images/triste.png')
            img2.style.maxWidth = '100px'
            img2.style.maxHeight = '100px'
            img2.style.backgroundColor = 'red'
            img2.style.float = 'center'
            img2.style.borderRadius = '50%'

         div_img2.appendChild(img2)
         
         let p = document.createElement('p')
            p.style.fontSize  = '40px'
            p.style.textAlignLast = 'center'
            p.innerText =" Você acertou " + pontuacao + ' de 3 respostas possíveis'
            div_3.appendChild(p)

            let btnContinue = document.createElement('div')
            btnContinue.setAttribute('href','index2.html')
            btnContinue.style.position = 'relative'
            btnContinue.style.marginRight = '-200px'
            btnContinue.style.marginTop = '160px'
            btnContinue.style.textAlign = 'right'
            btnContinue.style.minWidth = '300px'

            div_3.appendChild(btnContinue)
            let a = document.createElement('a')
            a.setAttribute('href','index2.html')
            a.style.color = 'white'
            a.innerHTML = 'Jogar Novamente'
            btnContinue.appendChild(a)

            let section = document.getElementById('section')
            section.style.maxHeight = '760px'
            let parallax = document.getElementById('parallax')
            parallax.style.height = '112%'
    }else if(pontuacao =='2'){
        let h3 = document.querySelector('h3')
        let tittle = document.getElementById('tittle')
       ///////////////////////////////////////
      
        ////////////////////////////////////////
        /////////////////////////////////
        let img1 = document.createElement('img')
        let img2_star = document.createElement('img')
        let div_img1 = document.getElementById('answer1')
        div_img1.setAttribute('class','div_img')
        let div_img2 = document.getElementById('answer2')
        div_img2.setAttribute('class','center_img')
        let div_3 = document.getElementById('answer3')
        div_3.style.minWidth = '500px'
       /////////////////////////////////
       
        ///////////////////////////////////////////
        h3.innerText = 'Na trave!!!'
        img1.setAttribute('src','images/star.png')
        img1.setAttribute('class','img1')
        img2_star.setAttribute('src','images/star.png')
        img2_star.setAttribute('class','img2')
        div_img1.appendChild(img1)
        div_img1.appendChild(img2_star)
///////////////////////////////////////////////
        let img2 = document.createElement('img')
        img2.setAttribute('src','images/quase.png')
            img2.style.maxWidth = '100px'
            img2.style.maxHeight = '100px'
            img2.style.backgroundColor = 'yellow'
            img2.style.float = 'center'
            img2.style.borderRadius = '50%'

         div_img2.appendChild(img2)
         
         let p = document.createElement('p')
            p.style.fontSize  = '40px'
            p.style.textAlign = 'center'
            p.innerText =" Você acertou " + pontuacao + ' de 3 respostas possíveis'
            div_3.appendChild(p)

            let btnContinue = document.createElement('div')
            btnContinue.setAttribute('href','index2.html')
            btnContinue.style.position = 'relative'
            btnContinue.style.marginRight = '-200px'
            btnContinue.style.marginTop = '160px'
            btnContinue.style.textAlign = 'right'
            btnContinue.style.minWidth = '300px'

            div_3.appendChild(btnContinue)
            let a = document.createElement('a')
            a.setAttribute('href','index2.html')
            a.style.color = 'white'
            a.innerHTML = 'Jogar Novamente'
            btnContinue.appendChild(a)

            let section = document.getElementById('section')
            section.style.maxHeight = '760px'
            let parallax = document.getElementById('parallax')
            parallax.style.height = '112%'
    }else if(pontuacao =='3'){
        let h3 = document.querySelector('h3')
        let tittle = document.getElementById('tittle')
       ///////////////////////////////////////
        
        ////////////////////////////////////////
        /////////////////////////////////
        let img1 = document.createElement('img')
        let img2_star = document.createElement('img')
        let div_img1 = document.getElementById('answer1')
        div_img1.setAttribute('class','div_img')
        let div_img2 = document.getElementById('answer2')
        div_img2.setAttribute('class','center_img')
        let img3_star = document.createElement('img')
        let div_3 = document.getElementById('answer3')
        div_3.style.minWidth = '500px'
       /////////////////////////////////
    
        ///////////////////////////////////////////
        h3.innerText = 'excelente jogador!!!'
        img1.setAttribute('src','images/star.png')
        img1.setAttribute('class','img1')
        img2_star.setAttribute('src','images/star.png')
        img2_star.setAttribute('class','img2')
        img3_star.setAttribute('src','images/star.png')
        img3_star.setAttribute('class','img1')
        div_img1.appendChild(img1)
        div_img1.appendChild(img2_star)
        div_img1.appendChild(img3_star)
///////////////////////////////////////////////
        let img2 = document.createElement('img')
        img2.setAttribute('src','images/feliz.png')
            img2.style.maxWidth = '100px'
            img2.style.maxHeight = '100px'
            img2.style.backgroundColor = 'green'
            img2.style.float = 'center'
            img2.style.borderRadius = '50%'

         div_img2.appendChild(img2)
         
         let p = document.createElement('p')
            p.style.fontSize  = '40px'
            p.style.textAlign = 'center'
            p.innerText =" Você acertou " + pontuacao + ' de 3 respostas possíveis'
            div_3.appendChild(p)

            let btnContinue = document.createElement('div')
            btnContinue.setAttribute('href','index2.html')
            btnContinue.style.position = 'relative'
            btnContinue.style.marginRight = '-200px'
            btnContinue.style.marginTop = '160px'
            btnContinue.style.textAlign = 'right'
            btnContinue.style.minWidth = '300px'

            div_3.appendChild(btnContinue)
            let a = document.createElement('a')
            a.setAttribute('href','index2.html')
            a.style.color = 'white'
            a.innerHTML = 'Jogar Novamente'
            btnContinue.appendChild(a)

            let section = document.getElementById('section')
            section.style.maxHeight = '760px'
            let parallax = document.getElementById('parallax')
            parallax.style.height = '112%'
    }
}
