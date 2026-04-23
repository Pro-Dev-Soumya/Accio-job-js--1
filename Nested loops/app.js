// ================NESTED LOOPS========================================

// table of 10
// let n = 10
// for(let i = 1; i<=n; i++)
// {
//     console.log(`${n} x ${i} = ${n * i}`)
// }




// print 1- 50 tak ki sari table
// for(let i = 1; i<=50; i++)
// {
//     for(let j = 1; j<=10; j++)
//     {
//         console.log(`${i} x ${j} = ${j*i}`)
//     }
// }





//print table by taking input from user
// let start = Number(prompt("Enter a start number"))
// let end = Number(prompt("Enter a end number"))
// for(let i = start; i<=end; i++)
// {
//     for(let j = 1; j<=10; j++)
//     {
//         console.log(`${i} x ${j} = ${j*i}`)
//     }
// }




// print 5 * in a row with single loop
// let n = 5
// let str = ""
// for(let i = 0; i<n; i++)
// {
//     str += " *"
// }
// console.log(str)





// nested loop - give 3 units to all 5 persons
// let person = 5
// for(let j = 1; j<=person; j++)
// {
//     for(let i = 1; i<=3; i++)
//     {
//         console.log(`person: ${j}, unit: ${i}`)
//     }
// }






//=========================SUB-ARRAY==============================
//contious part of an array -[1, 2, 3, 4, 5]
//[1,3,5]- is not continous


//eg
// let arr= [1, 2, 3, 4, 5, 6]
// for(let i = 0; i<arr.length; i++)
// {
//     let ans = []
//     for(let j = i; j<arr.length; j++)
//     {
//         ans.push(arr[j])
//         console.log(ans)
        
//     }
//     //break
// }




//====================SUB-STRING============================================
// let str = "Soumya"
// for(let i=0; i<str.length; i++)
// {
//     let ans = ""
//     for(let j = i; j<str.length; j++)
//     {
//         ans+=str[j]
//         console.log(ans)
//     }
// }





//print star in square
// let n = Number(prompt("take a number"))
// for(let i = 0; i<n; i++)
// {
//     let ans = ""
//     for(let j = 0; j<n; j++)
//     {
//         ans +=" *"
//     }
//     console.log(ans)
// }




//print 5 line 7 suare in one line
// let n = Number(prompt("take a number"))
// let m = Number(prompt("take a number"))
// for(let i = 0; i<n; i++)
// {
//     let ans = ""
//     for(let j = 0; j<m; j++)
//     {
//         ans +=" *"
//     }
//     console.log(ans)
// }





// print traiangle
// let n = Number(prompt("take a number"))
// for(let i = 1; i<=n ; i++)
// {
//     let ans = ""
//     for(let j = i; j<=n; j++)
//     {
//         ans+=" *"
//         console.log(ans)
//     }
//     break
// }



//method 2
// let n = Number(prompt("take a number"))
// for(let i = 1; i<=n ; i++)
// {
//     let ans = ""
//     for(let j = 1; j<=i; j++)
//     {
//         ans+=" *"
        
//     }
//     console.log(ans)

// }



// print opposite1 traiangle
// let n = Number(prompt("take a number"))
// for(let i = 1; i<=n; i++)
// {
//     let ans= ""
//     for(let j=1 ; j<= n-i+1; j++)
//     {
//         ans+=" *"
//     }
//     console.log(ans)
// }





// print hollow squaare
// let n = 4
// for(let i = 1; i<=n; i++)
// {
//     let ans = ""
//     for(let j = 1; j<=n; j++)
//     {
//         //ans+= "* "
//         if(i == 1|| i==n|| j==1||j==n)
//         {
//             ans+= "* "
//         }
//         else{
//             ans+= "  "
//         }
//     }
//     console.log(ans)
// }





// print hollw traiangle
// let n = 5
// for(let i = 1 ; i<=n; i++)
// {
//     let str=""
//     for(let j = 1; j<=i; j++)
//     {
//         // str+=" *"
//         if(i == n || j==1||j==i)
//         {
//            str+=" *" 
//         }
//         else{
//             str+="  "
//         }
//     }
//     console.log(str)
// }






//flipped right angled tarainagle
// let n = 5
// for(let i = 1; i<=n; i++)
// {
//     let str= ""
//     for(let j = 1; j<=n-i; j++) // j<i
//     {
//         str+="  "
//     }
//     for(let k = 1; k<=i; k++)
//     {
//         str+=" *"
//     }
//     console.log(str)
// }







//flipped right angled tarainagle
// let n = 5
// for(let i = 1; i<=n; i++)
// {
//     let str= ""
//     for(let j = 1; j<=n-i; j++)
//     {
//         str+="  "
//     }
//     for(let k = 1; k<=i; k++)
//     {
//         if(k==i||i==n||k==1)
//         {
//             str+=" *"
//         }
//         else{
//             str+="  "
//         }
//     }
//     console.log(str)
// }








// print hollow square check console pattern\
let n= 5
for(let i=1; i<=n; i++)
{
    let str = ""
    for(let j=1; j<=n; j++)
    {
        if(i==j||i==n||j==n)
        {
            str+=" *"
        }
        else{
            str+=" "
        }
    }
}
console.log(str)





























































