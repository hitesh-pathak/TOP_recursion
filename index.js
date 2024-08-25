function fibs(n) {
    const arr = [];
    for (let i=0; i<n; i++) {
        if (i<=1) {
            arr.push(i);
            continue;
        }
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}

function fibsRec(n) {
    if (n<= 2) {
        return [0, 1].slice(0, n);
    }
    const arr = fibsRec(n-1);
    arr.push(arr[n-2] + arr[n-3]);
    return arr;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    // console.log(mid, arr.slice(0, mid), arr.slice(mid));
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));

    const mergeArr = [];
    let [i, j, k] = [0, 0, 0];
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            mergeArr[k] = leftArr[i];
            i += 1;
        } else {
            mergeArr[k] = rightArr[j];
            j += 1;
        }
        k += 1;
    }
    // left over
    leftArr.slice(i).forEach(e => mergeArr.push(e));
    rightArr.slice(j).forEach(e => mergeArr.push(e));

    return mergeArr;
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110, 0]));
