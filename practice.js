Array.prototype.sortNum = function(){
    return this.sort((a,b)=>a-b);
}


let numbers = [23,65,34,23,12,64,21,42,1,5,8,5,7];

console.log(numbers.sortNum());