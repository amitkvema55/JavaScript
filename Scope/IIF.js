//IIFE

(function chai(){
    console.log('db coneected')
})();  // two iife prblem 

((name)=>{
    console.log(`db ${name}`)
})("amit");  //semicolon problem