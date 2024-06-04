// const tinder=new Object() //singleton object creation

const tinderUser = {}

tinderUser.userid = 123
tinderUser.name = "Amit"

//console.log(tinderUser)


const regularuser = {
    email: "@GMAIL.COM",
    fullname: {
        fname: "Amit",
        lastname: "Kumar"
    }
}


//  console.log(regularuser.fullname.fname)
//  console.log(regularuser.fullname.lastname)


//  console.log(regularuser.fullname?"":"ERROR")

const obj1 = {
    1: "a",
    2: "b",
    3: "c"

}

const obj2 = {
    3: "4",
    4: "t",
    5: "y"

}

// const obj3={obj1,obj2}
// console.log(obj3)

// const  obj3=Object.assign({},obj1,obj2) //read documentions interviwew // correnct syntax
// console.log(obj3)

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);


const users = [
    {
    id: 1,
    name: "amit"
    }, 
    {
    id: 1,
    name: "amit"
    }, 

    {

    id: 1,
    name: "amit"
    }   
]


console.log(Object.keys(tinderUser)); //return an array of keys
console.log(Object.values(tinderUser)); //return an array of values
console.log(Object.entries(tinderUser)); //return an array of key values pairs