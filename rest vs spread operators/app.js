//======================Rest parameter=====================================
// function sum (...num)
// {
//     let sum = 0
//     for(let item of num)
//     {
//         sum += item
//     }
//     console.log(sum)

// }
//sum(1, 9 ,9, 10, 4, 8)//we can take as many as numbers
//sum("a","b","c","d")// can take as manyas arguments
//sum([1, 2,3],[4, 5, 6])




// function tellposition(first, Second, third, ...extras)
// {
//     console.log(` first position is of ${first}`)
//     console.log(` second position is of ${Second}`)
//     console.log(` third position is of ${third}`)
//     extra.length>0 && console.log(` rest position is of ${extras.join(", ")}`)
// }

// tellposition("som", "nath", "cool", "boy","try", "more","luck")





//=====================DESTRUCTURING IN REST PERASMETR==================
// let arr = [ 1, 3, 4, 5, 6, 7,8 ]
// const[a, b, c,...extra]=arr
// console.log(a, b, c)
// console.log(extra)






//======================DESTRUCTURING AN OBJECT===================
// let obj= {
//     name: "som",
//     age: 23,
//     city:"delhi"
// }
// console.log(obj.name, obj.age, obj.city)
// console.log(obj["name"], obj["age"], obj["city"])

// const{name,age,city}=obj
// console.log(name, age, city)

//const{name: naam,age:umar,city:jagha}=obj// hum ne name chnge kar diye keys k
//console.log(name, age, city)// is name se acces nh kar paynge
//console.log(naam, umar, jagha)


//---rest perameter--
// const{name, ...something}=obj
// console.log(name)
// console.log(something)








//================================SPREAD OPERATORS================================

// let arr = [1, 3, 4, 5, 6, 7]
// console.log(arr)
// console.log(...arr)


// let a1 = [1, 2, 3, 4]
// let a2 = [4, 5, 8,6 ]

// let ans = a1.concat(a2) // this is the way to concat
// let ans = a2.concat(a1)

// now new method to concat
// let ans = [...a1, ...a2]
// let ans = [...a2, ...a1]
// let ans = [-1, -3, -9,...a1, ...a2, 100, 3, 4, 500]

// console.log(ans)




//------objects me spread------
// let obj1 = {
//     name:"soms",
//     age:23,
//     city:"delhi"
// }
 
// let obj2 = {
//     addres: "gftyuikm",
//     country:"india",
//     name:"ved"
// }

// let obj3 = {
//     ...obj1,
//     ...obj2, // here name key came twice so it will update it 
//     color:"red",
//     car:"BMW"
// }

// console.log(obj3)

// let copy ={
//     ...obj1,
//     ...obj2
// }
// console.log(copy)









































































