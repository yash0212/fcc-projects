function palindrome(str) {
  let palin = true;
  let regex = /[():;\-_\\\/\s,.%\$\^!@#&*"'<>\?\{\}\[\]\|+=]/g; //Defined regex to detect all special characters
  str = str.replace(regex, "");                                 //Replace all special characters with blank from string
  str = str.toLowerCase();                                      //Convert every character in string to lowercase
  let i = 0;
  while (i < str.length) {                                      //Loop over every character in string
    if (!(str.charAt(i) == str.charAt(str.length - i - 1))) {   //Check if current character is not same as character from end of string
      palin = false;
      break;
    }
    i++;
  }
  return palin;                     //Return the result
}

//Testcases
console.log(palindrome("eye");
console.log(palindrome("_eye");
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));