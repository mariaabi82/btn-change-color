const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['#23931d', '#d3c830', '#b56e8f', '#3b5998', '#7a237a', '#1d7893', '#93331d', '#69acea'];

colorBtn.addEventListener('click', changeColor);

function changeColor () {
    // bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random()*colors.length);
    // random is for numbers 0 to 999 something
    bodyBcg.style.backgroundColor = colors[random];
}