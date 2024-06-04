const condings=["js",'ruby','c++','python']

const values=condings.forEach((lang,index,arr)=>{
    return lang
    
})
// console.log(values) // undefined 
// here drawback of forech occur becoz it retrun nothing to so js developer introduce new loops also



// const mynunms=[1,2,3,4,5,6,7,8]
// //  const newnum=mynunms.filter((num)=>
// //     {
// //         return num>4})

// //  console.log(newnum)
//return a new array 



// let nums=[1,2,3,4,5,6,7,8,9]
// let newnum=nums.map((num)=>{
//     return (num*4)
// })

// console.log(newnum) // return an array with new opertions


// reduce
let nums=[1,2,3,4,5,6,7,8]
intval=1

const sum=nums.reduce((acc,curval)=> (acc*curval),intval);
console.log(sum)