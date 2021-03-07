module.exports = function reverse (n) {
    if (n < 0){
        return (Number((n * -1).toString().split('').reverse().join(''))) * -1; 
    } else {
       return Number(n.toString().split('').reverse().join(''));  
    }
 
}