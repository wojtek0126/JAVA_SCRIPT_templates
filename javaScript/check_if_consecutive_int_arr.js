function firstNonConsecutive(arr) {
    let res = []
    for (let i = 0; i <= arr.length; i++) {
        if ((arr[i]) + 1 !== arr[i + 1]) {
            res.push(arr[i + 1]);
        }
    }
    console.log(res[0])
    if (res[0] === undefined) return null
    return res[0]
}

// firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1))