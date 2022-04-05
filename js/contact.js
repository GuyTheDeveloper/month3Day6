let numb = prompt('Ko\'paytirmoqchi bo\'lgan soningizni kiriting!');
let numb2 = prompt('Bo\'lmoqchi bo\'lgan soningizni kiriting!');

for (let i = 1; i<=10; i++) {
    console.log(numb + ' * ' + i + " = ",numb * i);
}

for (let i = 1; i<=10; i++) {
    console.log(numb2 + ' / ' + i + " = ",Math.floor(numb2 / i));
}