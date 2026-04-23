// ques- check multiple of 5 by taking by user

// let num = prompt("Enter a number")
// if(num % 5 == 0)
// {
//     console.log(`${num} is multiple of 5 `)
// }
// else
// {
//     console.log(`${num} is not multiple of 5 `)
// }






// ques- write a code which give grades to the students according to there scores

// let marks = prompt("enter your marks")
// let Grade ;
// if(marks >= 80 && marks <=100)
// {
//     Grade = "A"
// }
// else if (marks >= 70 && marks <= 89)
// {
//      Grade = "B"
// }
// else if (marks >= 60 && marks <= 69)
// {
//      Grade = "C"
// }
// else if (marks >= 50 && marks <= 59)
// {
//      Grade = "D"
// }
// else if (marks >= 0 && marks <= 49)
// {
//      Grade = "F"
// }

// console.log("Marks of student is" , Grade)




//que- check num is +ive or -ive
// let num = 8
// if (num > 0)
// {
//     console.log("positive")
// }
// else {
//     console.log("negative")
// }




//que- chcek num is even or odd
// let num = 5
// if(num % 2 == 0)
// {
//     console.log("even")
// }
// else{
//     console.log("odd")
// }




// que - is persopn is eligible for vote(age >= 18)
// let age = 15
// if(age >= 18)
// {
//     console.log("eligivble to vote")
// }
// else{
//     console.log("not eligible to vote")
// }




// que - num is divisible by 5
// let num = 3
// if(num % 5 == 0)
// {
//     console.log("diviible by 5")
// }
// else
// {
//     console.log("not divisble")
// }




// largest of two numbers
// let a = 80
// let b = 0
// if (a > b)
// {
//     console.log(`${a} is the largest`)
// }
// else
// {
//     console.log(`${b} is the largest `)
// }





// let a = 8
// let b = 100
// let c = 30
// if (a > b && a > c)
// {
//     console.log(`${a} is the largest`)
// }
// else if(b > c)
// {
//     console.log(`${b} is the largest `)
// }
// else
// {
//     console.log(`${c} is the largest `)
// }





// que - check charecter is vovel or consonet
// let ch = prompt("Enter a charater").toLowerCase()
// if(ch == 'a' || ch == 'e' || ch == ' i' || ch ==' o'|| ch=='u')
// {
//     console.log("vowel")
// }
// else{
//     console.log("Consonet")
// }





//check weather a year is leap year
// let year = Number(prompt("Enter a year:"));

// if (year % 400 === 0) {
//     console.log("Leap Year");
// } else if (year % 4 === 0 && year % 100 !== 0) {
//     console.log("Leap Year");
// } else {
//     console.log("Not a Leap Year");
// }





//Write a program to check whether a number is: Positive Negative Zero
// let num = number(prompt("enter a num"))
// if(num>0)
// {
//     console.log("positive")
// }
// else if(num<0)
// {
//     console.log("negative")
// }
// else{
//     console.log("zero")
// }






// 1 Program to Calculate Electricity Bill
// 🔹 Conditions
// Units ≤ 100 → 1 per unit
// Units ≤ 200 → 2 per unit
// Units > 200 → 3 per unit

// let unit = Number(prompt("enter unit"))
// let bill;
// if(unit <= 100)
// {
//     bill = unit*1
// }
// else if(unit <= 200)
// {
//     bill = unit*2
// }
// else if(unit > 200 )
// {
//     bill = unit*3
// }
// console.log("EB = " , bill)





//Write a program that prints the day of the week based on a number (1–7).
// let day = Number(prompt("enter day"))
// if(day == 1)
// {
//     console.log("monday")
// }
// else if(day == 2)
// {
//     console.log("tuesday")
// }
// else if(day == 3)
// {
//     console.log("wednesday")
// }
// else if(day == 4)
// {
//     console.log("thrusday")
// }
// else if(day == 5)
// {
//     console.log("friday")
// }
// else if(day == 6)
// {
//     console.log("saturday")
// }
// else if(day == 7)
// {
//     console.log("sunday")
// }
// else{
//     console.log("invalid input")
// }





//Write a program to check if a number is divisible by both 3 and 7.
// let num = prompt("enter a number")
// if(num % 3==0 && num%7 ==0)
// {
//     console.log("divisible by both")
// }
// else{
//     console.log("not divi")
// }





// for loop


// que - print no 1-10
// for(let i = 1; i <= 10 ; i++)
// {
//     console.log(i)
// }


//que - sum of numbers
// let sum = 0
// let n = 6
// for(let i=1; i<=n; i++)
// {
//     sum = sum+i
// }
// console.log(sum)



// que- print all even num from 0- 100
// for(i = 2; i<=100; i+=2)
// {
//     console.log(i)
// }

//  for(i = 2; i<=100; i+=2)
//  {
//     if(i%2 == 0)
//     {console.log(i)}
//  }



// que- create a game where you start with any random game number. ask the user to keep guessing the game number until user finds the correct number
// let gamenum = 25;
// let usernum = prompt("enter the num")
// while(gamenum != usernum)
// {
// usernum = prompt("guess again")
// }
// console.log("it is right num")





//Print numbers from 1 to 10 using a for loop.
// for(i = 1; i<=10; i++)
// {
//     console.log(i)
// }


//Print numbers from 10 to 1 using a while loop.
// i = 10
// while(i>=1)
// {
//     console.log(i)
//     i--
// }


//Print all even numbers between 1 and 20.
// for(i = 0; i<=20; i++)
// {
//     if(i%2 == 0)
//     console.log(i)
// }



//Print the multiplication table of 5.
// let n = 5
// for(let i = 1; i<=10; i++)
// {
//     console.log(n*i)
// }

//another way
// for(let i = 1; i<=10; i++)
// {
//     console.log(`5 x ${i} = ${5 * i}`)
// }
0




//Find the sum of numbers from 1 to 100.
// let sum = 0
// for(let i = 1; i<=100; i++)
// {
//     sum = sum + i  
// }
// console.log(sum)





//Print all numbers from 1 to 50 that are divisible by 3.
// for(let i = 1; i<=50 ; i++)
// {
//     if(i%3 == 0)
//     {
//         console.log(i)
//     }
// }



// Count how many odd numbers are between 1 and 100.
// let count = 0
// for(i = 0; i<=100; i++)
// {
//     if(i%2 != 0)
//     {
//     count++
//     }
// }
// console.log(count)



// Print all numbers from 1 to 30, but:
// Print "Fizz" for multiples of 3
// Print "Buzz" for multiples of 5
// Print "FizzBuzz" for both

// for(let i = 1; i<= 30 ; i++)
// {
//     if(i%3 == 0)
//     {console.log("fizz")}
//     else if(i%5==0)
//     {console.log("buzz")}
//     else if(i%3==0 && i%5==0)
//     {console.log("Fizz buzz")}
// }






// que- Print each element using a loop.
// using for of


//let numbers = [2, 5, 8, 10, 3];
// let sum = 0 
// for(let i of numbers)
// {
//     console.log(i)
//     sum += i
// }
// console.log(sum)


// find largest num
// let max = numbers[0]
// for(let i = 1; i< numbers.length; i++)
// {
//     if(numbers[i] > max)
//     {
//         max = numbers[i]
//     }
// }
// console.log(max)




//count num greater than 10
// let numbers = [2, 5, 8, 10, 3, 15, 20];
// let count = 0
// for(let i = 0; i < numbers.length; i++)
// {
//     if(numbers[i]>10)
//     {
//         count++
//     }
// }
// console.log(count)




//Reverse a number (e.g., 123 → 321).
// let n = 123
// let num = 0
// while(n>0)
// {
//     let ld = n%10
//     num = num * 10 + ld
//     n = Math.floor(n/10)
// }
// console.log(num)


// let num = 4567
// let box = 0
// while(num>0)
// {
//     let ld = num%10
//     box = box*10+ld
//     num = Math.floor(num/10)
// }
// console.log(box)



//Check if a number is PRIME
// let num = 7
// let isprime = true

// if(num<=1)
// {
//     isprime = false
// }
// for(let i = 2; i<num ; i++)
// {
//     if(num%i == 0)
//     {
//         isprime = false
//     }
//     break
// }

// if (isprime) {
//   console.log("Prime number");
// } else {
//   console.log("Not a prime number");
// }



//--------------------------ARRAY-----------------------


//que- Count occurrences of a value in an array
// let arr = [1, 2, 3, 2, 4, 2, 5];
// let target = 2
// let count = 0
// for(let i = 0; i<arr.length;i++)
// {
//      if (arr[i] === target) {
//     count++;
//   }
// }
// console.log(count)





// let str = "soumya"
// console.log(str.at(-2))







// arr = [7, 8 , 2, 20, 5]

// function maxNumbers(arr) {
//   arr.sort((a, b) => b - a)
//   return arr.slice(0, 3)
// }  
// maxNumbers(arr)//Need to be asked Why it doesn't return.

// console.log("Maximum Number 1 -",arr[0]);
// console.log("Maximum Number 2 -",arr[1]);
// console.log("Maximum Number 3 -",arr[2]);




// find the average of marks
// let marks = [85, 97, 44, 37, 76, 60]
// let average = 0
// for(let i = 0; i<marks.length; i++)
// {
//     average += marks[i]
// }
// console.log(average / marks.length)





// let arr = [1,2,3,4,5,6,7,8,9,10]

// let deletedElements = arr.splice(6,2, "xyz")

// console.log(arr)
// console.log(deletedElements)





// arr = ["Bloomberg", "Microsoft", "uber", "google", "IBM", "Netflix"]
// //arr.shift()
// //arr.splice(2,2,"OLA")
// arr.push("Amazon")
// console.log(arr)







// find the largest digit number
// var largest = 0
// var n = 123456789
// while( n != 0)
// {
//     let digit = n%10
//     if(digit>largest)
//     {
//         largest = digit
//     }
//     n = Math.floor(n/10)
// }
// console.log(largest)






// var s = 3456787265
// let evencount = 0
// while(s>0)
// {
//     let digit = s%10
//     if(digit%2 == 0)
//     {
//         evencount++
//     }
//     s = Math.floor(s/10)
// }

// console.log(evencount)







//reverse a num using while loop and check pelidrome
// let num = 123
// let newnum = 0
// let org= num
// while(num>0)
// {
//    let ld = num %10
//     newnum = newnum * 10 + ld
//     num = Math.floor(num/10)

// }
// console.log(newnum)

// if(org == newnum)
// {
//     console.log(true)
// }
// else{
//     console.log(false)
// }












// let arr = ["soumya", "harsh", "bro"]
// for(let item of arr)
// {
//     console.log(`welcome back , ${item}`)
// }





























