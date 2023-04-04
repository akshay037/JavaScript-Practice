let age = 23;
const vari = 43;
let doesDrive = true;

if (age = 23){
    console.log('Age is 23');
}
// not equal to '!='
else if (age != 63){
    console.log('Age is 23');
}
else if(age == 65){
    console.log('Age is 65');
}
// if value and type is not equal to
else if(age !== 65){
    console.log('Age is 65');
}
// to check value and type
else if(age === 65){
    console.log('Age is 65');
}
else{
    console.log('age is not 23');
}

if (typeof vari !== 'undefined'){
    
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}

if (doesDrive && age == 18){
    console.log('You can drive');
}
else {
    console.log('You can not drive');
}

// Ternary operator   condition ? exprIfTrue : exprIfFalse

console.log(age == 23? 'age is 23': 'ageis not 23');

// Switch case

switch (age) {
    case 18:
        console.log('You are 18');
        break;
    case 25:
        console.log('You are 25');
        break;
    case 34:
        console.log('You are 34');
        break;
    default:
        console.log('You are unknown age');
        break;
}