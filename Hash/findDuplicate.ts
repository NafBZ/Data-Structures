function findDuplicate(arr1: number[], arr2: number[]): Map<number, number> {
    const hashTable = new Map<number, number>();

    for (const num of arr1) {
        hashTable.set(num, (hashTable.get(num) || 0) + 1);
    }

    for (const num of arr2) {
        if (hashTable.has(num)) {
            hashTable.set(num, (hashTable.get(num) || 0) + 1);
        }
    }

    const duplicates = new Map<number, number>();
    for (const [num, count] of hashTable.entries()) {
        if (count > 1) {
            duplicates.set(num, count);
        }
    }

    return duplicates;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

const duplicates = findDuplicate(arr1, arr2);
console.log(duplicates);