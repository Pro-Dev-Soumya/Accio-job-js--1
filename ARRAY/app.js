// Hoisting
// JS default behaviour of moving variable declations to the top of the code






// ------------------Arrays-------------------
// let a = [1, 'qwerty', true, undefined, null, function(){
//     console.log("hello")
//     return true
// }]


// console.log(a[0])
// console.log(a[1])
// console.log(a[2])
// console.log(a[3])
// console.log(a[4])



// console.log(a.length)
// a[5]() // function









//print no 1 10 n
// var N = 10
// for(i=1; i<=N; i++)
// {
//     console.log(i)
// }




// //print in reverse
// var a = 10
// for(i=a; i>=1; i--)
// {
//     console.log(i)
// }




//print even no
// var a = 10
// for(i = 0; i<= a; i++)
// {
//     if(i%2 == 0)
//     {
//         console.log(i)
//     }
// }

//var N = 10
// for(i=1; i<=N; i++)
// {
//     console.log(i)
// }




// //print in reverse
// var a = 10
// for(i=a; i>=1; i--)
// {
//     console.log(i)
// }






//count how many no are there in n even and odd
// var n = 10
// var even = 0
// var odd = 0
// for(i=0; i<=n ; i++)
// {
//     if(i%2 == 0)
//     {
//         even++

//     }
//     else{
//         odd++
//     }
// }

// console.log(even)
// console.log(odd)




// var n = 5
// var sum  = 0
// for(i= 0; i<=n; i++)
// {
//     sum+= i 
// }
// console.log(sum)





// print multiplication table
// var n = 5
// for(i = 1; i<=10; i++)
// {
//     console.log(`${n} x ${i} = ${n*i}`)
// }



// let fact = 1
// for(i = 1; i<=5 ; i++)
// {
//     fact*=i
// }
// console.log(fact)




//----------------------ARRAY--------------------------------------


//let arr=[1, 22, 33, 4,5,6]

// print all elements
// for(let i = 0; i<arr.length; i++)
// { 
//     console.log(arr[i])
// }

//find sum of all elements
// let sum = 0
// for(let i = 0; i<arr.length; i++)
// {
//     sum = arr[i]+sum
// }
// console.log(sum)


//sum of even elemnts and odd elemnts
// var even = 0
// var odd = 0
// for(let i = 0; i<arr.length; i++)
// {
//     if(arr[i]%2 == 0)
//     {
//         even = arr[i] + even
//     }
//     else{
//         odd = arr[i] + odd
//     }
// }
// console.log(even)
// console.log(odd)




//Find maximum elemnts
// let arr=[1, 2, 3, 4,5,6]
// var max = arr[0]
// for(let i = 0; i<arr.length; i++)
// {
//     if(arr[i] > max)
//     {
//         max = arr[i]
//     }
// }
// console.log(max)


// find the minimum number
// let arr=[1, 2, 3, 4,5,6]
// var min = arr[0]
// for(let i = 1; i<arr.length; i++)
// {
//     if(arr[i] < min)
//     {
//         min = arr[i]
//     }
// }
// console.log(min)




// let arr=[1, 22, 33, 4,5,6]

// //print all elements in reverse
// for(let i = arr.length; i>=0; i--)
// { 
//     console.log(arr[i])
// }





// let nums = [2, 3, 4, 5, 6]
// nums.forEach((value) => {
//     console.log(value**2)
// })




// let array = [3, 9, 2, 7]
// let max = -Infinity
// for(let i = 0; i<array.length; i++)
// {
//     if(max<array[i])
//     {
//         max = array[i]
//     }
// }
// console.log(max)




// print all items--------------for of----------------
// let arr = [1, 2, 4, 6, 8, 0]
// for(let item of arr)
// {
//     console.log(item)
// }



// //Concat
// let a1 = [1, 4, 7, 8]
// let a2 = [22, 77, 88]
// let a3 = ["asfg", "soumya", true, []]
// let a4 = a1.concat(a2, a3, [2222, 444],["harsh", "saas"])
// console.log(a4)




//--------------------- distructing an array--------------------
//  let arr = [ 1, 3, 4, 6, 8]
//  const[a,b,c,d] = arr
//  console.log(a)
//  console.log(b)






//------------------Nested array-------------------------------------
 //let arr = [1, 2, 3,[4, 5, 6,[7,8,9,10,[11, 12,"ANS"]]]]
// //let arr = [1, 2, 3,[4, 5, 6, "ANS"]]
// console.log(arr)
// console.log(arr.length)
// console.log(arr[3])


// let innerArr = arr[3]
// console.log(innerArr[3])

// console.log(arr[3][3])
// console.log(arr[3][3][4])



//let arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
//console.log(arr.flat())
//console.log(arr.flat(3))
//console.log(arr.flat(Infinity))




// let str = "soum"
// let str2 = "soum"

// console.log(str.concat(str2))





