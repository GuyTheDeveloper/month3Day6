//homework number 1;
let son1 = Number(prompt('Birinchi sonni kiriting!'));
let amal = prompt('Amallardan birini kiriting: + - * / %');
let son2 = Number(prompt('Ikkinchi sonni kiriting!'));

if(isNaN(son1) || isNaN(son2)) {
    console.log('raqam kiriting!!!')

    if(isNaN(son1)) {
        console.log('Birinchi kiritgan soningiz xato!')
    }

    if(isNaN(son2)) {
        console.log('Ikkinchi kiritgan soningiz xato!');
    }
} else if(amal == '+') {
    console.log('Natija : ',(son1 + son2));
} else if (amal == '-') {
    console.log('Natija : ',(son1 - son2));
} else if (amal == '*') {
    console.log('Natija : ',(son1 * son2));
} else if (amal == '/') {
    console.log('Natija : ',(son1 / son2));
} else if (amal == '%') {
    console.log('Natija : ',(son1 % son2));
}
 else {
    console.log('Men sizga amal kiriting dedim!!!');
}
