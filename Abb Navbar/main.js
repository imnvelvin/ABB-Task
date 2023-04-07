var dildiv = document.querySelector('.dil')
var xett = document.querySelector('#xett')
var icon = document.querySelector('#buttonnn')
var inp = document.querySelector('#inputt')
var close= document.querySelector('#x')


icon.onclick = function(){
    inp.classList.toggle('active')
    close.classList.toggle('active')
}
close.onclick = function(){
    inp.classList.toggle('active')
    this.classList.toggle('active')
}
xett.onclick = function(){
    dildiv.classList.toggle('active')
    xett.classList.toggle('xett')
}

