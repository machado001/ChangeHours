


let setBGColor;
let setImage;

const showDate = new Date()
console.log(showDate)
const showOnlyHours = showDate.getHours()
console.log(showOnlyHours)
const showOnlyMinutes = showDate.getMinutes()
let insertSpan = document.querySelector('span').innerHTML = `${showOnlyHours}:${showOnlyMinutes}`

if (showOnlyHours >= 6 && showOnlyHours <= 12) {

    setBGColor = document.querySelector('body').style.backgroundColor = '#0fd2e2'; //blue
    showParagraph = document.querySelector('#result').innerHTML = 'Bom dia lindo acordou cedo em rs'
    setImage = document.querySelector('img').src = 'https://www.colunatech.com.br/wp-content/uploads/2021/08/one-peace-1.jpg' //luffy imagem

    //condição para estar de manhã

} else if (showOnlyHours > 12 && showOnlyHours <= 18) {
    //condição para estar de tarde
    setBGColor = document.querySelector('body').style.backgroundColor = '#e6a60f';//laranja
    showParagraph = document.querySelector('#result').innerHTML = 'Tardezinha boua'
    setImage = document.querySelector('img').src = 'https://criticalhits.com.br/wp-content/uploads/2021/06/0896cd12e66c175047dea1f0aba7d182-910x512.jpg' //nami imagem


} else if (showOnlyHours > 18 && showOnlyHours <= 24) {
    //condição para estar de noite
    setBGColor = document.querySelector('body').style.backgroundColor = '#2d2929'; //um pretin
    showParagraph = document.querySelector('#result').innerHTML = 'Ta de noite mlk da pa dale'
    setImage = document.querySelector('img').src = 'https://criticalhits.com.br/?attachment_id=208749' //brook imagem 1

    console.log(setColor)
} else if (showOnlyHours >= 0 && showOnlyHours <= 6) {
    //condição para estar de madrugada
    setBGColor = document.querySelector('body').style.backgroundColor = '#2d2626'; //um pretin um pouco mais pretin
    showParagraph = document.querySelector('#result').innerHTML = 'Madruga, vai ficar até tarde mais uma vez?'
    setImage = document.querySelector('img').src = 'https://static.wixstatic.com/media/1f8f2a_e63789c40dbd4d05999ccdeaa222ccda~mv2.png/v1/fit/w_720%2Ch_480%2Cal_c/file.png' //brook imagem 2

}
