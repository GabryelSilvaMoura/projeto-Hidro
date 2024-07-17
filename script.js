var botao = document.querySelector('#butC')
var Side = document.querySelector('.menuH')

botao.addEventListener('click', function(){
    Side.classList.toggle('expandir');
})