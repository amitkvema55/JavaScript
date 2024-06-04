// for of

// let array1=[1,2,3,4,5]

// for (const i of array1){
//     console.log(i)
//    // 1,2,3,4,5
// }

 
// const  geetings="hello of world"

// for(greet of geetings){
//     console.log(greet)
// }


//Maps

const newmap=new Map()  // unqiue key value pair

newmap.set('In',"India")
newmap.set('US',"USA")
newmap.set("fr","france")

// console.log(newmap)



for(const [key,value] of  newmap){
    // console.log(key,value) 
    
}


const myobj={
    game1:'nfs',
    game2:'gta'
}


for (const [key,value] of myobj){
    console.log(key,value) // object is not itertable by for of loop
}
