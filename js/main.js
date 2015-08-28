// add scripts
// $(document).on('ready', function() {
//   console.log('sanity check!');
// });

var before = 'find you will pain only go you recordings security the into if'

var after = 'if into the security recordings you go only pain will you find'


/*
\\- - - - - - - - //
 \\   RESULT 1   //
  \\ - - - - - -//
*/
function reverseMessage1(str) {
  var arr = str.split(" ");
  /* loop through arr and replace first index with last index, second index with second to last index, third index with third to last index, etc */
  for (var i = 0,j=(arr.length)-1; i < arr.length/2; i++) {
    temp=arr[i]
    arr[i] = arr[j];
    arr[j]=arr[i]
    arr[j] = temp; j--;
  }
  return arr.join(" ");
};

reverseMessage1(before);


/*
\\- - - - - - - - //
 \\   RESULT 2   //
  \\ - - - - - -//
*/
function reverseMessage2(str) {
  var arr = str.split(" ");
      result="";
  for (var i = arr.length-1; i >=0; i--) {
    result+=arr[i]+" ";
  }
  return result;
};

reverseMessage2(before);


/*
\\- - - - - - - - //
 \\   RESULT 3   //
  \\ - - - - - -//
*/
function reverseMessage3(str) {
  var arr = str.split(" "),
    length = arr.length;
    i = length/2 | 0;
  while (i--) {
    arr.splice(i, 1, arr.splice(length-1-i, 1, arr[i])[0]);
  }
  return arr.join(' ');
};

reverseMessage3


/*
\\- - - - - - - - //
 \\   RESULT 4   //
  \\ - - - - - -//
*/
function reverseMessage4(str) {
  return str.split(" ").reverse().join(" ");
};

reverseMessage4(before);


/*
\\- - - - - - - - //
 \\   RESULT 5   //
  \\ - - - - - -//
*/
var reverseMessage5 = function(str) {
  var result = [],
      arr = str.split(" ");
  while (arr.length)
    result.push(arr.pop());
  return result.join(" ");
};

reverseMessage5(before);


/*
\\- - - - - - - - //
 \\   RESULT 6   //
  \\ - - - - - -//
*/
function reverseMessage6(str) {
  var arr = [];
  var temp = "";
  for(var i = 0 ; i < str.length ; i++) {
    if(str[i] === " ")
    {
      arr.push(temp);
      temp = "";
    } else {
      temp += str[i];
    }
  }
  if(temp.length >= 0) {
    arr.push(temp);
  }
  var result = "";
  for(var j = arr.length-1; j >=0 ; j--) {
    result += arr[j] + " ";
  }
  return result;
}

reverseMessage6(before);


/*
\\- - - - - - - - //
 \\   RESULT 7   //
  \\ - - - - - -//
*/
function reverseMessage7(str) {
  var arr = str.split('');
  var temp = [];
  while (arr.length >= arr.slice(0, arr.indexOf(' ')).length) {
    if (arr.lastIndexOf(' ') !== -1) {
      temp.push(arr.splice(arr.lastIndexOf(' ')).splice(1))
    } else {
      break;
    }
  }
  temp.push(arr)
  var newStr = temp.join(' ')
  return newStr.replace(/,/g, '');
}

/*
\\- - - - - - -  //
 \\    NOTES    //
  \\ - - - - - //
http://www.sitepoint.com/immutability-javascript/

http://stackoverflow.com/questions/9544182/why-are-strings-immutable-in-many-programming-languages

http://rigaux.org/language-study/various/mutability-and-sharing/

In JavaScript, strings and numbers are immutable by design.

In fact, no string methods change the string they operate on, they all return new strings. The reason is that strings are immutable – they cannot change, we can only ever make new strings.

What is Immutability?

The text-book definition of mutability is liable or subject to change or alteration. In programming, we use the word to mean objects whose state is allowed to change over time. An immutable value is the exact opposite – after it has been created, it can never change.


Why strings are immutable and what are the implications of it?

The String type (System.String) stores text values as a sequence of char (System.Char) elements that represent Unicode characters (encoded in UTF-16). Usually one char element stands for one symbol.

When working with text one has to remember that strings in javaScript are immutable! This simply means that once created, strings cannot be modified (without reflection or unsafe code), and the methods that apparently modify a string, really return a new object with the desired value.

Immutability of strings has many advantages, but it can cause problems if programmer forgets that any "change" to the string actually causes creation of a new instance of String class. Although the CLR(Common Language Runtime) treats strings in a special way, they are still a reference type, for which the memory is allocated on the managed heap.
 */

module.exports = {
  reverseMessage1 : reverseMessage1,
  reverseMessage2 : reverseMessage2,
  reverseMessage3 : reverseMessage3,
  reverseMessage4 : reverseMessage4,
  reverseMessage5 : reverseMessage5,
  reverseMessage6 : reverseMessage6,
  reverseMessage7 : reverseMessage7
}
