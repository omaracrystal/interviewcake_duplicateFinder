// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');
});

var directoryArray = [];

//

// function directoryArr(directory) {
//   //push all files into an array
//   for (var i = 0; i < directory.length; i++) {
//     directoryArray.push(directory[i]);
//   };
//   return directoryArray;
// }

// function findDups(directoryArray) {
//   var savedFiles = [];
//   var dupFiles = [];
//   for (var i = 0; i < directoryArray.length; i++) {
//     if (directoryArray[i] == -1) {
//       saveFiles.push(directoryArray[i]);
//     } else {
//       dupFiles.push(directoryArray[i]);
//     }
//   };
//   console.log(savedFiles);
//   console.log(dupFiles)

//   for (var i = 0; i < dupfiles.length; i++) {
//     prompt('Please copy and paste which of the following files you would like to delete then click ok' + dupfiles[i] + dupfiles[i+1])
//   };
// }




module.exports = {
  findDups : findDups,
}
