function feetToMile(feet){
    let totalMile = feet * 0.000189394; /*1 feet to mile 0.000189394*/
     return totalMile;
};
const result = feetToMile(10560)
console.log(result + " Mile");



function woodCalculator(chair, table, bad){
    let totalChair = chair * 1;
    let totalTable = table * 3;
    let totalBad = bad * 5;
    console.log("Chair: " + totalChair + ",", "Table: " + totalTable + ",", "Bad: " + totalBad);
    let totalWood = totalChair + totalTable + totalBad;
    return totalWood; 
};
let totalWoodNeed = woodCalculator(10, 10, 7);
console.log(totalWoodNeed + " wood lagbe");


function brickCalculator(tala){
    if (tala <= 10) {
        let totalBricks1 = 15 * 1000;
        console.log( tala + " tomo talar Jonno " + totalBricks1 + " Bricks Lagbe");
        console.log("1 to " + tala + " tala porjonto korte "  + tala * totalBricks1 + " bricks labge" );
    }
    else if (tala <= 100) {
        let totalBricks2 = 12 * 1000;
        console.log( tala + " tomo talar Jonno " + totalBricks2 + " Bricks Lagbe");
        console.log("1 to " + tala + " tala porjonto korte "  + tala * totalBricks2 + " bricks labge" );
    }
    
    return ;
} 
console.log(brickCalculator(11));





function tinyFriend(){
    var friend = ['jahid', 'hasan', 'rine', 'hasina'];
    var min = [0];
    for (let i = 0; i < friend.length; i++) {
        const element = friend[i];
        if (element > min) {
            min = element
        }
    }
    return min;
}

console.log(tinyFriend()) ;


