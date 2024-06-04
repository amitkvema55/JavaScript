//   function addTwoNumbers(num1,num2){
//     console.log(num1+num2)


//  }
// const sum=addTwoNumbers(1,3)  //
// console.log(sum)// undefined becoz we did not return any thing yet


//  function addTwoNumber(num1,num2){
//     return num1+num2  //return output is satate which should hold some con

//  }


//  const sum = addTwoNumber(1,null)//1
//  const sum1 = addTwoNumber(1,undefined) // NaN
//  console.log(sum1)


//// ...REST OPERATOTR


function calculateCartPrice(val1,val2,...num1){
    return num1

}


console.log(calculateCartPrice(200,400,500,3000))


//
const  user={
    usename:"AMIT",
    price:199
    
    
}

function handleObject(anyobject){

    console.log(anyobject.usename)

}

// handleObject(user)

handleObject({})  //direct object pass in  function

handleObject([]) //direct pass arary in function


//Conclusion

// We can pass object ,array  as parameter in function