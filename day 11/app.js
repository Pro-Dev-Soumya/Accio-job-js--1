// SWAPING
// sawp 2 variable using another variableaa
// it can work on any data type like string , num
// let a = 10
// let b = 20
// console.log(a)
// console.log(b)
// let temp = a
// a= b
// b=temp 
// console.log(a)
// console.log(b)




// sawp without  using 3rd variable, works only on number, not on strings
// let a = "abc"
// let b = "xyz"

// let a = 10
// let b = 20
// a=a+b
// b = a-b
// a = a-b

// console.log(a)
// console.log(b)








//SCOPES->where a variable can we use, global, block .

//1. global scope = when variable are not inside any block, they show global scope , i.e, they can be used anywhere in the same file

//2. Block scope = if wrapped inside some block , eg, for loop, while loop, if-else, etc. var shows global scope where as,  let & const shows block scope

//3. functional scope = all var, let, const shows functional scope. we cannot access all three outside the functional scope / block.we can acccess by using return



// Global scope
// var a = 100
// let b = 200
// const c = 300






//block scope
// {
//    // let & const shows block scope, cant accessed outside the block, hence refrence error
    
//     console.log(a, b , c)/// accieseble inside the block
// }

// console.log(a)// var is accessible outside the block
// console.log(b)// let & const shows block scope, cant accessed outside the block, hence refrence error
// console.log(c)// let & const shows block scope, cant accessed outside the block, hence refrence error







//Functional scope
// function abc()
// {
//     var a = 10
//     let b = 20
//     const c = 90

//     console.log(a, b, c)
// }
// abc()
// console.log(a)// cant access outside the function as all of them shows functional scope
// console.log(b)// cant access outside the function as all of them shows functional scope
// console.log(c)// cant access outside the function as all of them shows functional scope




// var a = 99

// function xyz()
// {
//     var age = 33
//     console.log("Hey")

//     return function(){
//         console.log("HEllo Ji")
//     }
// }

// var b = xyz()
// b()






// function one()
// {
//     function inner()
//     {
//         console.log("Hello from Inner")
//     }
//     inner();
//     return inner;
// }

// var three = one()
// three()














