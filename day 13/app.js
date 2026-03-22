// -------------------------ARRAY--------------------------------




//-------map------
// let arr = [1, 2, 3, 4, 5, 2, 2]
// let arr2 = arr.map((item, index)=> 
//     {
//         //console.log(item)
//         //return item
//         //return item*2
//         //console.log(item, index)
//     }
// )
//console.log(arr2)   // - if we do return then only do cgl outside







// //------filter------jis per condition match hoga vahi print karega

// let arr3 = arr.filter((item) => {
//     //return item%2==0
//     return item==2
// })
// console.log(arr3, "filter")






// //-------find-------
// let arr4 = arr.find((item)=>{return item==4}) 
// console.log(arr4, "find")








// Que muliply by 3 and find even no

//let arr = [1, 3, 3, 4, 4]


//----method 1---
// let arr2 = arr.map((item)=> {
//     return item*3
// })
// console.log(arr2)

// let arr3 = arr2.filter((item) => {
//     return item%2==0
// })
// console.log(arr3)


//------method 2--------
// let result = arr.map(item=> item*3). filter(item=>item%2==0)
// console.log(result)


//------------reduce------ it reduce array as per the condition


// result.reduce((acc, cur)=>{
//     console.log(acc, cur)
// },0)


// let res = arr.reduce((acc, cur) =>{
//     return acc+=cur
// }, 0)
// console.log(res)


// let res = arr.reduce((acc, cur) =>{
//     return acc*=cur
// }, 1)
// console.log(res)





//Que filter out the even no them multiply by 3 then give the product of the elemet
// let arr = [1, 3, 3, 4, 4]
// let arr2 = arr.filter(item => item%2==0).map(item=>item*3).reduce((acc, cur)=> {return acc*=cur},1)
// console.log(arr2)







//-------------------------STRING--------------------

//let str = "soumya jat"
// for(let i = 0; i<str.length; i++)
// {
//     console.log(str[i])
// }
//space also count as a lenght and index


// print string in reverse
// for(let i = str.length; i>=0; i--)
// {
//     console.log(str[i])
// }



// // print palidrom in string
// let str = "abi"
// let res = ""
// for(let i = str.length-1; i>=0; i--)
// {
//     console.log(str[i])
//     res = res + str[i]
// }
// console.log(res)
// if(str===res){console.log("p")}
// else{console.log("not p")}




// count how many times a comes in string

// let str = "aaaajhgfdhjkcxiygtsjbaaee oooouuuuhgbjdjsaooaaaaa"
// let count = 0
// let target = "a"
// for(let i = 0; i<str.length; i++)
// {
//     if(str[i]==target )
//     {count++}
// }
// console.log(count)




//que count the vowels

// let str = "aaaajhgfdhjkcxiygtsjbaaee oooouuuuhgbjdjsaooaaaaa"
// let count = 0
// let target = "a"||"e"||"i"||"o"||"u"
// for(let i = 0; i<str.length; i++)
// {
//     if(str[i]=="a"|| str[i]=="e" ||str[i]=="i"||str[i]=="o"||str[i]=="u" )
//     {count++}
// }
// console.log(count)
