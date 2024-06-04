  //singleton
//object.create
  //obejct literlas

  const mysym=Symbol("key1"); //creata a symbol key

  const jsuser={
    name:"AMIT",
    "lastname":"kumar",
    [mysym]:"mykey1", //give an error //alaways use square brakcet in define symbol key
    age:"22",
    locaction:"Jaipur",
    lastLOGINDAYS:[]

  }

//   console.log(jsuser.name);
// //   console.log(jsuser[name]); //error use double quote with squre brackets
//   console.log(jsuser["name"]);//amit
//   console.log(jsuser.lastname);  //kumat

// console.log(jsuser.mysym) //give an error
// console.log(jsuser[mysym]);

// jsuser.age="23"
// console.log(jsuser.age)

// Object.freeze(jsuser)
// jsuser.age="25"

// console.log(jsuser);

jsuser.geet=function(){
    console.log(`Hello JS user ${this.name} your age is ${this.age}` ) //this refers current objects
}

console.log(jsuser.geet());  //excute of a function 
console.log(jsuser.geet);  //refernce of an function