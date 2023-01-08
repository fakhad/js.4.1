let imya = prompt ('введите имя');
let r = +prompt('введите год рождения');
let god = +prompt('введите нынешний год');
let otv = 1;
for(var i = 0; i < god; i++){
    otv=god-r
}
alert(imya +', ваш возраст ' +otv)