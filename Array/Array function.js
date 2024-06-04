 const marvelHEROS=["thor","ironman","hulk"]
 const dcheros=["superman","flash"]

// marvelHEROS.push(dcheros)

// console.log(marvelHEROS) // ['thor', 'ironman', 'hulk', Array(2)]

//const newhero=marvelHEROS.concat(dcheros)  //concat return a new array 
 //console.log(newhero)  


// const allnewHeores=[...marvelHEROS ,...dcheros]; //spread operater
// console.log(allnewHeores);


const anotherarray=[1,2,3,[4,5,6],7,[6,7],4,5]
// const myrealanotherarray=[anotherarray].flat(Infinity) //flat array
// console.log(myrealanotherarray)


// console.log(Array.isArray("amit"));//false
// console.log(Array.from("AMIT"));// 
//console.log(Array.from({name:"AMIT"}))   //intersting array interview question //ouptput empty

let score1=100
let score2=200
let score3=300

// console.log(Array.from(score1,score2,score3)); //error
console.log(Array.of(score1,score2,score3)); //retrun array of score1,score2,score3

