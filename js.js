const perguntas = document.querySelectorAll('.container-pergunta')
const respostas = document.querySelectorAll('.resposta')


perguntas.forEach(pergunta => {
  pergunta.addEventListener('click', () => 
  {
    const resposta = pergunta.nextElementSibling    
    mostrarEsconderResposta(resposta)
  })
})

function mostrarEsconderResposta(respostaClicada) {
  respostas.forEach(resposta => {
    const botaoImg = resposta.previousElementSibling.querySelector('button>img')
    if (resposta !== respostaClicada) {
      resposta.classList.remove('active')
      botaoImg.src = 'closed.svg'
    } 
  })
  respostaClicada.classList.toggle('active')
  const btnImgAtivo = respostaClicada.previousElementSibling.querySelector('button>img')
  respostaClicada.classList.contains('active')? btnImgAtivo.src = 'active.svg' :btnImgAtivo.src = 'closed.svg'
}

