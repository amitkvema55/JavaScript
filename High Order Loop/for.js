// const myOBJ={
//     JS:"JAVASCRIPT",
//     PY:"python",
//     tail:"tailwind"
// }

// // for of loop in not work in object


// for (const key in myOBJ){
//     // console.log(key);
//     console.log( `${key} is ${myOBJ[key]}`)
// }


const programming=['js','py','react']


for ( i of programming)
    {

        // console.log(i)
    }

 for (i in programming) {
    // console.log(i)  
 }  


// for of loop give direct value of objects while for in loop gives direct keys of that object [like [],{   }]



newmap.set('In',"India")
newmap.set('US',"USA")
newmap.set("fr","france")

// console.log(newmap)



for(const [key,value] in newmap){
    //
    console.log(key,value) 
    
}

// cannot iterate maps