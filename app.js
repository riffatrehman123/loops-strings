
// chapters # 17 to 20

// Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var arr = [];
// arr[0] = [];
// arr[0][0] = [];
// arr[0][0][0]
// console.log(arr)

// Declare and initialize a multidimensional array
// representing the following matrix:

// public class Main
// {
//     public static void main(String[] args) {

//         int[][] intArray = new int[3][3];

//         System.out.println("The two-dimensional array:");
//         for (int i = 0; i < 3; i++) {
//             for (int j = 0; j < 3; j++) {
//                 intArray[i][j] = i*j;                   
//                 System.out.print(intArray [i][j] + " ");
//             }
//             System.out.println("");
//         }
//     }
// }

// var ary = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ]
// for (var a = 0; a < ary.length; a++) {
//     for (var b = 0; b < 4; b++) {
//         document.write(ary[a][b] + " " );
//     }
//     document.write("<br>")
// }






// Write a program to print numeric counting from 1 to 10.


// for(var a = 1; a <  11; a++) {

//     document.write(a + "<br>");








// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
//  taken as an input from user.


// import java.util.Scanner;
// public class Multiplication_Table 
// {
//     public static void main(String[] args) 
//     {
//         Scanner s = new Scanner(System.in);
// 	System.out.print("Enter number:");        
// 	int n=s.nextInt();
//         for(int i=1; i <= 10; i++)
//         {
//             System.out.println(n+" * "+i+" = "+n*i);
//         }
//     }
// }

// var a = prompt("Entre a number to show its multiplication table");
// var a = prompt("Entre the length multiplication table");

// for (var i = 1; i <= 15; i++) {
//     document.write("7* " + i + "=" + 7 * i + "<br>")
// }


// Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
//  “strawberry”]/

// var ary = [
// 	["apple", "banana", "mango", "orange", "strawberry"],
// ]
// for (var a = 0; a < 5; a++) {
// 	// for (var b = 0; a < 5; b++) 

// 		document.write(ary[a]);

// 	document.write("<br>");
// }
// void initializeArray() {
//     fruits[0] = "Apple";
//     fruits[1] = "Orange";
//     fruits[2] = "Banana";
//     fruits[3] = "Grapes";
//     fruits[4] = "Mango";

// Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Even
// for(var a = 1; a <  17; a++) {
//     if(a % 2 == 0){
//         document.write(a + "<br>");
//     }

// }


//  odd

// for(var a = 1; a <  15; a++) {
//     if(a % 2 != 0){
//         document.write(a + "<br>");
//     }

// }
// counting
// for(var a = 1; a <  16; a++) {

//         document.write(a + "<br>");


// }

// Reverse counting
//      for(var a = 16; a >  1; a++) {

//          document.write(a + "<br>");


//  }


//         You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// var a= prompt("Welcome to ABC bakery.What do you want to order sir/ Ma'mm"?);
// document.write("cookie inavailable index 2 in our bakery")

// var a= prompt("Welcome to ABC bakery.What do you want to order sir/ Ma'mm"?);
// document.write("We are sorry.pastry is not available in over bakery")



// Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].


//  var a=[24, 53, 78, 91, 12]
//      document.write("The largest number is 91")


// Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// var a=[24, 53, 78, 91, 12]
//       document.write("The smallest number is 12")


// Write a program to print multiples of 5 ranging 1 to
// 100.


//  for(var a = 1; a <  105; a++) {
//          if(a % 5 == 0){
//              document.write(a + "<br>");
//          }

//      }


// chapter# 21 to25

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.     


// var firstName = "warisha";
// var lastName = "gilani";
// var fullName = firstName + " " + lastName;
// var fullName = prompt("fullName");

//                     2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// var mob=prompt("Enter your favourite mobile phone model");
// var len= mob.length;
// document.write("Lenght of the string: "+ len);


// var ary= prompt("plz entre your favorite mobile phone model");{
//     document.write(ary .length);

// }

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// var n = ("Pakistani");{
//     document.write("n 7") 
// }

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

//  var str = "Hello world";
//  var n = str.indexOf("l");
//  document.write("l 9");

//5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var w = "Pakistani" ; 
//  find = w . charAt ( 3 ); {
//      alert="3";
//  }


//  6. Repeat Q1 using string concat() method.


// var firstName = "warisha";
// var lastName = "gilani";
//  var fullName = firstName + " " + lastName;
//  var fullName = prompt("fullName");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var firstName=["hyder","islam",];
// var lastName=["abad","abad"]
// console.log(firstName + lastName);





// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// var myStr = "Ali and sami are bestfriends.Thay play circket and football together.";
// var newStr = myStr.replace(/and/g, "&");

// // Printing the modified string
// document.write(newStr);

//9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


// var strnum = 472;
// console.log(strnum);
// console.log(typeof(strnum));


// 10. Write a program that takes user input. Convert and
//  show the input in capital letters.

// var cityTocheck = prompt("Entre your city");
// cityTocheck = cityTocheck.toUpperCase();


// 11. Write a program that takes user input. Convert and
// show the input in title case.


// var cityTocheck = prompt("Entre your city");
// cityTocheck = cityTocheck.tolowerCase();


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;
// console.log(3536);

//  13 . Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .


// alert("please enter a valid userName");                                                                                                                   
//             userName=prompt("Enter your Input: ");
//             split[i]=un.split("&nbsp;");
//             arr[i]=un.charCodeAt(i);
//             if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
//             {
//                 message="correct in"

//             }
//         }


// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

//  var a = prompt(welcome to ABC bakery.what do you want to order sir/Mam,m?);
// alert(a);
//  document.write(cookie is  available in over bakery in index 2 in our bakery);

//  var b = prompt(welcome to ABC bakery.what do you want to order sir/Mam,m?);
// alert(b);
//   document.write(we are sorry pastry  is not available in over bakery);

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



// function CheckPassword(inputtxt) 
// { 
// var passw=  /^[A-Za-z]\w{7,14}$/;
// if(inputtxt.value.match(passw)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// }


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// public static void main(String[] args) {
//     String line = "univerty of karachi";
//     //using String split function
//     String[] words = line.split(" ");
//     System.out.println(Arrays.toString(words));
//     //using java.util.regex Pattern
//     Pattern pattern = Pattern.compile(" ");
//     words = pattern.split(line);
//     System.out.println(Arrays.toString(words));
// }
// }


// 17. Write a program to display the last character of a user
// input.

//   if (sentence.charAt(sLength-1).equals(pakistan);
// //          Systam.out.println("");



// var lastchar = name.charAt(name.lenght-1);


// str = "pakistan";
//  System.out.pritringntln(S"last char = "" + str.charAt(str.length() - 1));


// // 18. You have a string “The quick brown fox jumps over the
// // lazy dog”. Write a program to count number of
// // occurrences of word “the” in given string.

// // function count(main_str, sub_str) 
// //     {
// //     main_str += '';
// //     sub_str += '';

// //     if (sub_str.length <= 0) 
// //     {
// //         return main_str.length + 1;
// //     }

// //        subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// //        return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
// //     }
 
// // console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
