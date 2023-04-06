// for loop 

for(let i=0;i<=20;i++){
    console.log(i);
}

// while loop

let j=0;
while(j<10){
    console.log(j++); 
}

// dowhile loop

let k = 0;
do {
    console.log(k++);
}
while (k<=10);

console.log('Done')

// Break

let X = 0;
do {
    console.log(X + 1);
    if(X===5){
        break;
    }
    X += 1;
}
while (X<10);

console.log('Done')

let arr = [41,48,34,65,67]
arr.forEach(function(element, index){
    console.log(element, index)
});
console.log(arr)

let obj = {
    names:"Tony",
    age:"28",
    sex:"Male",
    Power:"Ironman suit, Friday OS",
}
for(let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`)
}