const mergeSort = require('../MergeSort')

const array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

function main() {
    console.log(array.length)
}

main()

/*

1. Merge Sort
[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

 - List to be sorted after 3 recursive calls: [21, 1]
 - List to be sorted on 17th recursive call: [16, 49, 39, 27, 43, 34, 46, 40]
 - First lists to be merged: [21] and [1]
 - Lists for 7th merge: [1, 21, 26, 45] and [2, 9, 28, 29]

2.

 1. If result after first partition is [3 9 1 14 17 24 22 20], 
 both 14 and 17 could be pivot.

 2.

3.

*/