//======================Searching=========================================
//mostly we do on array and can do on array
// 1.Linear = on unshorted array
// 2. Binary = on shorted array (Increasing and decresing order)



//get the index of target if it is there otheerwise print -1
//====METHOD 1===
// let arr = [1, 99, 5, -8, 9, -2]
// let target = 999
// let ans = -1
// for (let i = 0; i<arr.length; i++)
// {
//     if(arr[i]== target)
//     {
//         ans = i
//         break
//     }
    
// }
// console.log(ans)


//===Method 2====
// function linearsearch(arr, target)
// {
//     let ans = -1
//     for(let i = 0; i< arr.length; i++)
//     {
//         if(arr[i] == target)
//         {
//             ans = i
//             break
//         }
//     }
//     return ans
// }

// console.log(linearsearch([101, 3, -8, 9, -10], 3))


// //=====METHOD 3======
// function linearsearch2(arr, x)
// {
//     for(let i = 0; i<arr.length; i++)
//     {
//         if(arr[i] == x)
//         {
//             return true
//         }
//     }
//     return false
// }

// console.log(linearsearch2([102, 9, -9, 3, 45], 900))









// //  QUES
// const users = [
//     {id:1, name:"aman"},
//     {id:2, name:"Riya"},
//     {id:3, name:"soms"},
//     {id:4, name:"Neha"},
// ]
// function findobject(arr,  targetid)
// {
//     for(let item of arr)
//     {
//         if(item.id == targetid)
//         {
//             return item
//         }
       
//     }
//     return {}
// }
 
// console.log(findobject(users, 3))







// //Ques
// function city(arr, liveindelhi)
// {
//     let ans = []
//     for(let item of arr)
//     {
//         if(item.city == liveindelhi)
//         {
//             ans.push(item.name)
//         }
//     }
//     return ans
// }

// const user1 = [
//     {id:1, name:"aman", city:"delhi"},
//     {id:2, name:"soms", city:"pune"},
//     {id:3, name:"shrea", city:"delhi"},
//     {id:4, name:"jyoti", city:"mumbai"},
// ]

// console.log(city(user1, "delhi"))







// //QUes = Find first expensive product(>50000)

// const products = [
//   { id: 1, name: "Mouse", price: 500 },
//   { id: 2, name: "Keyboard", price: 1500 },
//   { id: 3, name: "Monitor", price: 12000 },
//   { id: 4, name: "iPhone", price: 80000 },
//   { id: 5, name: "Laptop", price: 65000 },
//   { id: 6, name: "Tablet", price: 20000 }
// ];


// function mostproduct(arr)
// {
//     for(let item of arr)
//     {
//         if(item.price > 50000)
//         {
//             return item
            
//         }
//     }
//     return {}
// }
// console.log(mostproduct(products))




// //Ques = search multiple condition find user whwre city = delhi, age>25
// const users3 = [
//  {id:1, name:"Aman", age:22, city:"Delhi"},
//  {id:2, name:"Riya", age:28, city:"Mumbai"},
//  {id:3, name:"Karan", age:30, city:"Delhi"},
// {id:4, name:"shea", age:26, city:"delhi"},
// ];


//=====method 1 if only one ans required=======
// function multiplecondition(arr)
// {
//     for(let item of arr)
//     {
//         if(item.city == "Delhi" && item.age > 25)
//         {
//             return item
//         }
//     }
//     return{}
// }

// console.log(multiplecondition(users3))



//=====method 2 for multiple ans===========//  have to chcek something wrong
// function multiplecondition(arr)
// {
//     let ans = []
//     for(let item of arr)
//     {
//         if(item.city == "Delhi" && item.age > 25)
//         {
//             ans.push(item)
//         }
//     }
//     return ans
// }

// console.log(multiplecondition(users3))









//QUES= give the chepest product, expensive product, average price,  total price
// function productanalysis(arr)
// {
//     let sum = 0
//     let cheapest = arr[0]
//     let expensive = arr[0]
//     for(let item of arr)
//     {
//         sum = sum + item.price
//         if(item.price < cheapest)
//         {
//             cheapest = item
//         }
//         if(item.price > expensive)
//         {
//             expensive = item
//         }
//     }
//     return{
//         cheapestproduct: cheapest.name,
//         expensiveproduct: expensive.name,
//         totalprice : sum, 
//         averageprice : (sum/arr.length)
//     }    
// }
// const products = [
//   { id: 1, name: "iPhone", price: 80000 },
//   { id: 2, name: "Laptop", price: 65000 },
//   { id: 3, name: "Headphones", price: 3000 },
//   { id: 4, name: "Monitor", price: 12000 },
//   { id: 5, name: "Keyboard", price: 2000 },
//   { id: 6, name: "Smart Watch", price: 15000 }
// ];

// console.log(productanalysis(products))















