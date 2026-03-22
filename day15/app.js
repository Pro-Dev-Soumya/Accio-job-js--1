//===========================Nested objects===================================

// const obj = {
//     name : "soumya",
//     age : 34,
//     ispresent : true, 
//     sayhi : () => {
//         console.log("hello user")
//     }, 
//     address : {                           //nested objects
//         city : "delhi",
//         country: "india"
//     },
//     designation:"analyst"
// }



// console.log(obj.age)
// obj.sayhi()
// console.log(obj.address.city, obj.address.country)
// console.log(obj["address"]["city"])
// console.log(typeof obj)
// console.log(obj.hasOwnProperty("xyz"))  //gives boolen true or false. helps to chcek wether that key is there or not
// console.log(obj.hasOwnProperty("address"))


// if(!obj.hasOwnProperty("designatoion"))
// {
//     obj.designation = "software devloper"
// }
// console.log(obj)





// const obj = {
//     name : "",
//     age : 0,
//     ispresent : false
// }

// if(obj.age)
// {

// }
// else{
//     obj.age = 99
// }

// console.log(obj)














// let arr = [0 , -1 , -5, 8, 0 , 97, 87 , 65, -9]
// function solve(arr)
// {
//     let zero = 0
//     let negative = 0
//     let positive = 0

//     for(let item of arr)
//     {
//         if(item == 0)zero++
//         else if(item < 0 )negative++
//         else if(item>0)positive++
//     }

    // return {zero, negative, positive}

    // another way to return
    //const obj={}
    //obj.zerocount = zero
    //obj.positivecount = positive
    //obj.negative = negative

    // return obj
// }

// console.log(solve(arr))

// let ans =  solve(arr)
//console.log("zero:", ans.zerocount)
//console.log("positive:", ans.positivecount)
//console.log("negative:", ans.negativecount)







// let name = "shubham"
// let age = 90
// ispresnt = true
// const obj = {name, age, ispresnt}
// console.log(obj)







// ques .  how to check alphabet that it is capital or samll
//----Method 1-----
// let str = "a"
// if(str.toLowerCase() == str)
// {
//     console.log("tolowercase")
// }
// else if(str.toUpperCase() == str)
// {
//     console.log("toupper case")
// }

//-----method 2---
// if(str >= "a" && str<="z")
// {console.log("tolowercase")}
// else if(str>="A" && str<="Z")
// {console.log("touppercase")}







// // ques give the count of lower and upper case
// let str = "aBcDefghIJK@#$$"
// function solve(str)
// {
//     let uppercase = 0
//     let lowercase = 0
//     let specialchar = 0
//     for(let item of str)
//     {
//         if(item>="A" && item<="Z")
//         {
//             uppercase++
//         }
//         else if(item >= "a" && item <= "z")
//         {
//             lowercase++
//         } 
//         else{specialchar++}
//     }
//     return {uppercase, lowercase , specialchar}
// }

// console.log(solve(str))







//-------------------frequncy of character in str----------------------
// let str = "abcdabcdefaaagh"
// let ans = {}
// for(let item of str)
// {
//     if(ans.hasOwnProperty(item))
//     {
//         ans[item] = ans[item] + 1
//     }
//     else{ans[item] = 1}
// }
// console.log(ans)









//==========================RESTRICTING METHODS of Object============================
// 1. Prevent extentions - deny user from adding more properties/key. we can delet we can chnage but we cant add eg
// const obj = {
//     name:"soumya",
//     age : 23
// }
// Object.preventExtensions(obj)
// obj.city = "delhi"
// obj["country"] = "india"

// delete obj.age
// obj.name = "Niharika"

// console.log(obj)



// 2. seal= allow user to update only. no adding, no deleting
// const obj = {
//     name:"soumya",
//     age : 23
// }
// Object.seal(obj)
// obj.city = "delhi"
// obj["country"] = "india"

// delete obj.age
// obj.name = "Niharika"

// obj.age = 90

// console.log(obj)



// 3. Freeze  = cannot allow anything . no delet , no add, no update
// const obj = {
//     name:"soumya",
//     age : 23
// }
// Object.freeze(obj)
// obj.city = "delhi"
// obj["country"] = "india"

// delete obj.age
// obj.name = "Niharika"

// obj.age = 90

// console.log(obj)














// let obj = {
//     name:"soumya",
//     age:23,
//     isPresent: true,
//     sayhi: function(){ console.log("Hi" + obj.name )},
//     //sayhello:()=> { console.log("hello" + this.name)}
// }


// obj.sayhi()
// obj.sayhello()
// console.log(obj)
// console.log(obj.name, obj.isPresent, obj.age)
// console.log(obj["age"])

// obj.age = 30
// obj["name"]= "harsh"
// obj.city="delhi"
// obj["color"] = "blue"

// console.log(obj)

// for(let key in obj)
// {
//     //console.log(key)
//     console.log(key, obj[key])
// }

// delete obj.isPresent
// console.log(obj)


// let temp = obj.name
// obj.name = obj.age
// obj.age = temp
// console.log(obj)
