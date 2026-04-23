//============================2D MATRIX========================================
//let arr = [[1, 2, 3],[4, 5, 6],[7, 8, 9, 10]]

// for(let item of arr)
// {
//     for(let num of item)
//     {
//         console.log(num)
//     }
// }



// for(let i = 0; i<arr.length; i++)
// {
//     for(j = 0 ; j<arr[i].length;j++)
//     {
//         console.log(arr[i][j])
//     }
// }


// user input from 1D array
// let size = Number(prompt("enter a size of array"))
// let arr = []
// for(let i=0; i<size; i++)
// {
//     arr.push(Number(prompt(`enter a ${i+1} number`)))
// }
// console.log(arr)




//user input from 2d array

//METHOD 1 = problem with this k same no of coloms banenge 3-3 
// let row = Number(prompt("enter a row of array"))
// let colom = Number(prompt("enter a num of colom"))
// let arr = []
// for(let i= 0; i<row; i++)
// {
//     let inner = []
//     for(let j = 0; j<colom; j++)
//     {
//         inner.push(Number(prompt(` row: ${i}, colom: ${j}`)))
//     }
//     arr.push(inner)
// }
// console.log(arr)




//METHOD 2 = colom kitne bhi inner array me any no of we can put
// let row = Number(prompt("enter a row of array"))

// let arr = []
// for(let i= 0; i<row; i++)
// {
//     let colom = Number(prompt("enter a num of colom")) // har baar colom ka size puchega 
//     let inner = []
//     for(let j = 0; j<colom; j++)
//     {
//         inner.push(Number(prompt(` row: ${i}, colom: ${j}`)))
//     }
//     arr.push(inner)
// }
// console.log(arr)






// find max and min in 2d array
// let arr = 
// [
//     [11, 3, -7],
//     [99, 0, 4, 5,66],
//     [555, 6, 7, 8, 1]
// ]

// let max = -Infinity
// let min = Infinity
// for(let item of arr)
// {
//     for(let num of item)
//     {
//         if(num > max)
//         {
//             max = num
//         }
//         if(num < min)
//         {
//             min = num
//         }
//     }
// }

// console.log(max)
// console.log(min)










// reverse an array
// let arr = [1, 3, 5,6,7, 9]
// let s = 0
// let e = arr.length - 1
// while(s<e)
// {
//     let temp = arr[s]
//     arr[s] = arr[e]
//     arr[e] = temp
     
//     s++
//     e--
// }
// console.log(arr)



//REverse 2d array
// let arr = 
// [
//     [11, 3, -7],
//     [99, 0, 4, 5,66],
//     [555, 6, 7, 8, 1]
// ]

// for(let item of arr)
// {
//     let s = 0
//     let e = item.length-1

//     while(s<e)
//     {
//         let temp = item[s]
//         item[s] = item[e]
//         item[e] = temp

//         s++
//         e--
//     }
// }

// console.log(arr)





// SUM OF 2D ARRAY
// let arr = 
// [
//     [11, 3, -7],
//     [99, 0, 4, 5,66],
//     [555, 6, 7, 8, 1]
// ]
// let sum = 0
// for(let item of arr)
// {
//     for(let num of item)
//     {
//         sum+=num
//     }
// }
// console.log(sum)






// covert rows into coloum == transposed
// let arr = [[1,1,1], [2, 2, 2], [3, 3, 3],[4, 4, 4]]
// //console.log(arr)
// // we use right angled traiangle pattern idea
// for(let i = 0; i< arr.length; i++)
// {
//     for(let j = 0; j<i; j++)
//     {
//         let temp = arr[i][j]
//         arr[i][j]=arr[j][i]
//         arr[j][i] = temp
//     }
// }

// console.log(arr)









// print all elements colom wise =  phle row wise chalta tha
//let arr = [[1, 2, 3, 4,],[5, 6, 7, 8],[11, 33, 4, 55],[77, 88 , 99, 66]] = yeh array k case me sahi chalega
// console.log(arr)
// for(let i = 0; i<arr.length;i++)
// {
//     for(let j = 0; j<arr[i].length; j++)
//     {
//         //console.log(arr[i][j])//print row wise
//         console.log(arr[j][i])
//     }
// }





// let arr = [[1], [2, 3], [4, 5, 6]] //== is case me undefined ayga - mostly koi puchega nh
// //uneven size me yeh code kaam nh karta h
// let gl = -Infinity
// for(let item of arr)
// {
//     gl = Math.max(gl, item.length)

// }
// for(let i = 0; i<gl; i++)
// {
//     for(let j = 0; j<arr.length; j++)
//     {
//         if(arr[j][i]==undefined) continue
//         console.log(arr[j][i])
//     }
// }








// print 1 in whole row agr us me 1 h to -- row -5---colo--4
// let arr = [[1,0,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0],[0,1,0,0]]
// console.log(arr)
// for(let item of arr)
// {
//     let onepresent = item.includes(1)
//     if(onepresent == true){
//     for(let i = 0; i<item.length; i++)
//     {
//         item[i] = 1
//     }
// }
// }
// console.log(arr)







//Print alternate number ||right to left= even and ||left to right = odd .
// let arr = [[7, 2, 3], [2, 3, 4],[5, 6, 1]]
// //output = 7 2 3 4 3 2 5 6 1

// let m = 3
// let n = 3
// let str =" "
// for(let i=0; i<m; i++)
// {
//     if(i % 2 == 0)
//     {
//     for(let j = 0; j<n; j++)
//     {
//         str +=arr[i][j] +" "
//     }
//     }

//     else{
//         for(let j = n-1; j>=0; j--)
//         {
//             str +=arr[i][j] + " "
//         }
//     }

//     console.log(str)
// }






//alte number sum 
// let arr = [[1, 2, 3], [4, 5, 6],[7, 8, 9]]
// let n = arr.length

// let s1 = 0
// let s2 = 0
// for(let i = 0; i<n; i++)
// {
//         for(let j = 0; j<n; j++)
//         {
//             if((i+j) % 2 == 0)
//             {
//                 s1+=arr[i][j]
//             }
//             else{
//                 s2+=arr[i][j]
//             }
//         }
// }
// console.log(s1) //20 
// console.log(s2) //25
















