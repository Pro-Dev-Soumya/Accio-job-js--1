// function sayhi(name = " user")
// {
//     console.log(`hello ${name}`)
// }


// sayhi("soumya")
// sayhi("anu")
// sayhi("harsh")
// sayhi() // this is default parameter

 

// function sum(a, b)
// {
//     console.log( a + b)
// }

// sum(10, 20)
// sum(20, 200)




// function sayfullname(firstname = "user" , lastname= "")
// {
// console.log(`welcome, ${firstname} ${lastname}`)
// }

// sayfullname("honey" ,"singh")
// sayfullname("honey" )
// sayfullname()




// function sum (input1 = "input 1" , input2 = "input 2" )
// {
//     console.log(${input1} + ${input2})
// }



// function sum()
// {
//     let a = Number(prompt("enter number 1"))
//     let b = Number(prompt("enter number 2"))

//     // console.log(a + b)

//     return a + b
// }

// sum()



// function testingReturn()
// {
//     console.log("hello")
//      return "soumya"
//     //return 1234
//     //return false
// }

// console.log(testingReturn())





//functional expression
// const myFn = function(age, name = "user"){
//     console.log("hello from functional " , age , name)
//     return "xyz"
// }


// myFn(67, "somu")

// let retval = myFn()
// console.log(retval)




//==================== arrow function================================
// // this is the way to write function in clean way
//  const sayhi = (name = "user") => {
//     console.log("hi", name)
//     return "sapna"
//  }

//  sayhi("ria")
// console.log(sayhi()) // this works with return




// const sayk = () => (true)
// console.log(sayk())


// find even no
// function iseven(num)
// {
//     if(num % 2 == 0)
//     {
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(iseven(20))




// find max no
// const findmax = (a,b) => Math.max(a, b)
// console.log(findmax (11, 90))


// const charcount = Str => Str.length
// console.log(charcount("soumyakijuhsgf"))