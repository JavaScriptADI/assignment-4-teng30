let num=Math.ceil(Math.random() * 100);

if (num/3 == Math.floor(num/3) && num/5 != Math.floor(num/5)){
console.log(`${num}\nfizz`);    
} else if (num/3 != Math.floor(num/3) && num/5 == Math.floor(num/5)){
console.log(`${num}\nbuzz`);  
} else if (num/3 == Math.floor(num/3) && num/5 == Math.floor(num/5)){
console.log(`${num}\nfizzbuzz`); 
} else {
console.log(`${num}`);    
};

//--------------------------------------------//

for (let i = 0; i < 10; i++){
let numb=Math.ceil(Math.random() * 1000);
console.log(numb);
};

//--------------------------------------------//

let sum=0;

for (let i = 1; i <= 500; i++){
let number=i * 2; 
sum += number
};

console.log(sum);   

//--------------------------------------------//

let sum1 = 0
let sum2 = 0
let sum3 = 0

for (let i = 1; i <= 1000; i++){
if (i % 3 == 0){
sum1 += i
}

else if (i % 5 == 0){
sum1 += i
}

else if (i % 15 == 0){
sum3 += i    
}    
}    

console.log(sum1 + sum2 - sum3)
//--------------------------------------------//

// winashi miweria //