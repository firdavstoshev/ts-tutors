// Функция бинарного поиска на TS
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const targetValue = 10;
const result = binarySearch(sortedArray, targetValue);

if (result !== -1) {
    console.log(`Found ${targetValue} at index ${result}`);
} else {
    console.log(`${targetValue} not found in the array`);
}