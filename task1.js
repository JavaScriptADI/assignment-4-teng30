let num=Math.ceil(Math.random() * 100);

if (num/3 == Math.floor(num/3) && num/5 != Math.floor(num/5)){
    console.log(`${num} \nfizz`);    
} else if (num/3 != Math.floor(num/3) && num/5 == Math.floor(num/5)){
    console.log(`${num} \nbuzz`);  
} else if (num/3 == Math.floor(num/3) && num/5 == Math.floor(num/5)){
    console.log(`${num} \nfizzbuzz`); 
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

    console.log(String.fromCharCode(78))

num="sas dsd sasd sd s"
nums=num.split(' ')

    console.log(nums)
    console.log(nums[2]) // gamoitana sasd //


let x=[13, 14, 15, 16]

    console.log(x[2])
    console.log(x.length)


if (x % 3 || x % 5){}       // ან ფუნქცია. ან ერთი ან მეორე. არ გულისხმობს 15-ზე გამყოფებს.//

//--------------------------------------------//

let someone = {
    intelegence: "high",
    height: "180cm",
    weight: "80kg",
    job: "school",
    age: 16
}

console.log(someone)



console.log(someone)
console.log(someone.height)

someone.age = 17
console.log(someone)

//----------------------------------------//

let number = 12345678987654321
let n=string(number).split("")

n[Math.floor(n.length()/2)] = "5"

n = n.join("")
n = Number(n)

console.log(n)
 
//-----------------------------------------//