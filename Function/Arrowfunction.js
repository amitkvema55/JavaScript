const user={
    username:"amit",
    price:"999",

    welcomeMessage:function(){
        console.log(`this is ${this.username}` )
        // console.log(this)
    },

    
}

// user.welcomeMessage()

// console.log(this) //{}


// function chai(){
//     let usenam="hitesh"
//     console.log(this.usenam) //undefined
// }

// chai()


const chai =()=>{

    let usenam="hitesh"
  console.log(this.usenam) //undefined
}


chai()