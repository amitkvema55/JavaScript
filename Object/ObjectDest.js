// Object Destruturing

const course={
    name:"PYTHON",
    price:"999",
    instructor:"hitesh",
}


const {instructor}=course

//synetic sugar
const {instructor:inst}=course
const {name:nam}=course

console.log(inst)
console.log(nam)


const navbar =({company})=>{

}

navbar(company="hitesh")