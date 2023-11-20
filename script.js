const button = document.querySelector('.buttonDark');
const container = document.querySelector('.container');

button.onclick = function(){
    this.classList.toggle('active');
    container.classList.toggle('active');
}