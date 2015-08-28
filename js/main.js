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
function reverseMessage1(string) {
  var array = string.split(" ");
  /* loop through array and replace first index with last index, second index with second to last index, third index with third to last index, etc */
  for (var i = 0,j=(array.length)-1; i < array.length/2; i++) {
    temp=array[i]
    array[i] = array[j];
    array[j]=array[i]
    array[j] = temp; j--;
  }
  return array.join(" ");
};

reverseMessage1(before);


/*
\\- - - - - - - - //
 \\   RESULT 2   //
  \\ - - - - - -//
*/
function reverseMessage2(string) {
  var array = string.split(" ");
      result="";
  for (var i = array.length-1; i >=0; i--) {
    result+=array[i]+" ";
  }
  return result;
};

reverseMessage2(before);


/*
\\- - - - - - - - //
 \\   RESULT 3   //
  \\ - - - - - -//
*/
function reverseMessage3(string) {
  var array = string.split(" "),
    length = array.length;
    i = length/2 | 0;
  while (i--) {
    array.splice(i, 1, array.splice(length-1-i, 1, array[i])[0]);
  }
  return array.join(' ');
};

reverseMessage3


/*
\\- - - - - - - - //
 \\   RESULT 4   //
  \\ - - - - - -//
*/
function reverseMessage4(string) {
  return string.split(" ").reverse().join(" ");
};

reverseMessage4(before);


/*
\\- - - - - - - - //
 \\   RESULT 5   //
  \\ - - - - - -//
*/
var reverseMessage5 = function(string) {
  var result = [],
      array = string.split(" ");
  while (array.length)
    result.push(array.pop());
  return result.join(" ");
};

reverseMessage5(before);


/*
\\- - - - - - - - //
 \\   RESULT 6   //
  \\ - - - - - -//
*/
function reverseMessage6(string) {
  var array = [];
  var temp = "";
  for(var i = 0 ; i < string.length ; i++) {
    if(string[i] === " ")
    {
      array.push(temp);
      temp = "";
    } else {
      temp += string[i];
    }
  }
  if(temp.length >= 0) {
    array.push(temp);
  }
  var result = "";
  for(var j = array.length-1; j >=0 ; j--) {
    result += array[j] + " ";
  }
  return result;
}

reverseMessage6(before);

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
}
