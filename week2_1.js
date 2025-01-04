function greet(user){
    for(let i=0;i<user.length;i++){
        if(user[i].age>18 && user[i].gender=="male"){
            console.log(user[i].name);
        }
    }
}
let user1=[{name:"jasfer",age:19,gender:"male"},{name:"raja",age:22,gender:"male"},{name:"lakh",age:19,gender:"female"}];
greet(user1);

/* another method
let arr2=[];
arr2.push(arr[i]);

use filters in js

*/

let user2=user1.filter(num=> num.age>18 && num.gender=="male");
console.log(user2);

// without arrow function
let user3=user1.filter(function(num){
    return num.age>18 && num.gender=="male";
});
console.log(user3);


// using map function
let user4 =[2,4,5,8,10];
let user5= user4.map(num=>num*2);
console.log(user5);
