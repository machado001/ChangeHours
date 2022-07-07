const showDate = new Date()
const hours = showDate.getHours()
const minutes = showDate.getMinutes()


let insertSpan = function () {
    const span = document.querySelector('span')
    const inner = setInterval(() =>
        span.innerHTML = minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`,1);
    return inner;
}
document.addEventListener('DOMContentLoaded', insertSpan)

const c = () => {
    if (hours >= 6 && hours <= 12) {
        //condição para estar de manhã
        showHTML('#0fd2e2', 'Bom dia!', 'https://www.colunatech.com.br/wp-content/uploads/2021/08/one-peace-1.jpg')

    } else if (hours > 12 && hours < 18) {
        //condição para estar de tarde
        showHTML('#e6a60f', 'Tardezinha boa!', 'https://criticalhits.com.br/wp-content/uploads/2021/06/0896cd12e66c175047dea1f0aba7d182-910x512.jpg')

    } else if (hours => 18 && hours < 24) {
        //condição para estar de noite
        showHTML('#2d2929', 'A noite chegou!', 'https://criticalhits.com.br/?attachment_id=208749')
    

    }
    if (hours >= 0 && hours < 6) {
        //condição para estar de madrugada
        showHTML('#2d2626', 'Madruga, vai ficar até tarde mais uma vez?', 'https://static.wixstatic.com/media/1f8f2a_e63789c40dbd4d05999ccdeaa222ccda~mv2.png/v1/fit/w_720%2Ch_480%2Cal_c/file.png')
        console.log('lol?')
    }
}
document.addEventListener('DOMContentLoaded', c)

function showHTML(color, text, img) {
    setBGColor = document.querySelector('body').style.backgroundColor = color
    showParagraph = setTimeout(() => {
        document.querySelector('#result').innerHTML = text
    }, 1)
    setImage = document.querySelector('img').src = img
    return;
}