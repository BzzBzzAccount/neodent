let sum = document.querySelectorAll('.sum');
let calculateBtn = document.querySelector('.calculate');
let totalSum = document.querySelector('.total-sum');

let sumArray = [2, 4, 6, 10, 16, 26, 42];

calculateBtn.onclick = function(){
    let sum = 0
    for(let i = 0; i < sumArray.length; i++){
        sum += sumArray[i]
    }
    totalSum.innerHTML = sum
}
class Users{
    constructor(userName, userPass){
        this.userName = userName
        this.userPass = userPass
    }
}
