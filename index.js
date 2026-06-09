console.log("hello");


function reverseString(str) {
  
}

console.log(reverseString("hello"));



function findLargest(arr) {
  
    
}




console.log(findLargest([
    3, 7, 2, 9, 5]));

function removeDuplicates(arr) {
  

}

console.log(removeDuplicates([1,2,2,3,4,4,5]));



function secondLargest(arr) {
    if (arr.length < 2) return null;

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        // Skip duplicates of largest
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } 
        else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? null : secondLargest;
}

function findMissingNumber(arr) {
    let n = arr.length + 1;

    let totalSum = (n * (n + 1)) / 2;

    let arrSum = 0;

    for (let num of arr) {
        arrSum += num;
    }

    return totalSum - arrSum;
}

console.log(findMissingNumber([1, 2, 3, 5, 6]));