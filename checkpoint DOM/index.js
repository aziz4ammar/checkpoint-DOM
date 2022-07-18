var plus = document.querySelectorAll('.plus');
console.log(plus);

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', inc);
}

function inc (e) {
    var btn = e.target;
    console.log(btn);
    var div = btn.parentElement;
    console.log(div);
    var count = Number(div.querySelector('p').innerHTML);
    console.log(count);
    count++;
    div.querySelector('p').innerHTML = count;
    var tr=div.parentElement.parentElement
    console.log(tr)
    var ut= Number(tr.querySelector('.unitPrice').innerHTML)
    console.log(ut)
    var price_unit= ut*count
    tr.querySelector('.price').innerHTML=price_unit
    sum()
}
var min = document.querySelectorAll('.minus');
console.log(min);

for (let i = 0; i < min.length; i++) {
    min[i].addEventListener('click', dec);
}

function dec (e) {
    var btn = e.target;
    console.log(btn);
    var div = btn.parentElement;
    console.log(div);
    var count = Number(div.querySelector('p').innerHTML);
    if (count>0) {
    console.log(count);
    count--;
    div.querySelector('p').innerHTML = count;
    var tr=div.parentElement.parentElement
    console.log(tr)
    var ut= Number(tr.querySelector('.unitPrice').innerHTML)
    console.log(ut)
    var price_unit= ut*count
    tr.querySelector('.price').innerHTML=price_unit
    }
    sum()
}
var pr =(document.querySelectorAll('.price'));
console.log(pr)

function sum() {
    var tot=0
    for (let i = 0; i < pr.length; i++) {
        tot+=Number(pr[i].innerHTML)
        document.querySelector('#total').innerHTML=tot
    }

}
var hert = document.querySelectorAll('.like');
for (let i = 0; i < hert.length; i++) {
    hert[i].addEventListener('click', lke);
}
function lke(e) {
    var cible=e.target
    if(cible.style.color!="red"){
        cible.style.color="red"
    }
    else{
        cible.style.color="#424242"
    }
}
var del=document.querySelectorAll('.delete')
for (let i = 0; i < del.length; i++) {
    del[i].addEventListener('click', det);
}
function det(e) {
    var cible=e.target
    var tr=cible.parentElement.parentElement.parentElement.parentElement
    tr.querySelector('.price').innerHTML=0
    sum();
    tr.remove();
}
