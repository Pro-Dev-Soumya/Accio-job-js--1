//======================TYPE CASTING===========================
// explicit typecast
// let val = 1
// let vals = String(val)
// let valB = Boolean(val)
// console.log(val, vals, valB)



// let str = "123"
// let num = Number(str)
// let strB = Boolean(str)
// console.log(num, str, strB)



//implicit type casting
// console.log(1 + "2")  // output = 12
// console.log(2 - "34")  // output = -32
// console.log(11 - "3")  // output = 8
// console.log(1 == "dsfs")// false - NaN
// console.log(5 == "5") // true because it become number
// console.log(5 === "5") // false
// console.log(typeof NaN) // number
// console.log(5!=5,"pp")
console.log(true+false)


// console.log(Boolean(0)) // false





// ========================REVERSE A NUMBER===================================

// METHOD 1 BY USING LOOP

// let num = 123456
// let ans = 0
// while(num>0)
// {
//     let lastdigit = num % 10
//     ans = ans*10 + lastdigit
//     num = Math.floor(num/10)
// }
// console.log(ans)


// METHOD 2
// let num = 123456
// let str = String(num)
// console.log(str.split("").reverse().join(""))





// =========================REVERSE A STING======================
//METHOD 1
// let str = "soumya"
// console.log(str.split("").reverse().join(""))



// METHOD 2 USING LOOP
// let str = "soumya"
// let ans =""
// for(let i = str.length-1; i>=0; i--)
// {
//     ans = ans + str[i]
// }
// console.log(ans)








// ==========================Reverse a number=============================

// METHOD 1
// let arr = [1, 2, 3, 4, 5]
// arr.reverse()
// console.log(arr)




// METHOD 2 WITH EXTRA SPACE - takes more memory
// let arr = [1, 2, 3, 4, 5]
// let ans = []


// for(let item of arr)
// {
//     ans.unshift(item)
// }

//=========0r=======
// for(let i = arr.length-1; i>=0; i--)
// {
//     ans.push(arr[i])
// }
// console.log(ans)





//METHOD 3 UISING NO EXTRA SPACE - WITHOUT MAKING NEW ARRAY
// let arr = [1, 2, 3, 4, 5]
// let start = 0 
// let end = arr.length-1
// while(start<end)
// {
//     let temp = arr[start]
//     arr[start] = arr[end]
//     arr[end] = temp

//     start ++
//     end--
// }
// console.log(arr)





// =========================SORTING=================================
// ACENDING ORDER
// let arr = [99,1,122,13,9,0,-10,-1]
// arr.sort((a,b)=>{ return a-b})
// console.log(arr)



// DECENDING ORDER
// let arr = [99,1,122,13,9,0,-10,-1]
// arr.sort((a,b)=>{ return b-a})
// console.log(arr)




// let arr = [
//     {
//         name:"shera",
//         age:20
//     },
//     {
//         name:"soumya",
//         age:24
//     },
//     {
//         name:"ved",
//         age:18
//     }
// ]

// arr.sort((a,b) =>
//      { return a.age-b.age}
// )
// console.log(arr)


// arr.sort((a,b) => {
//     // return a.name.localeCompare(b.name)
//     return b.name.localeCompare(a.name)
// })
// console.log(arr)



