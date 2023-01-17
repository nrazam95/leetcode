function findMedianSortedArray(nums1: number[], nums2: number[]): number {
    const combinedArray: number[] = nums1.concat(nums2).sort(function(a,b){return a - b})
    const length: number = nums1.concat(nums2).sort().length
    const dividedlength: number = length % 2

    console.log(combinedArray)
    console.log(length)
    console.log(dividedlength)
    switch (dividedlength) {
        case 0:
            return (combinedArray[length / 2] + combinedArray[length / 2 - 1]) / 2
        default:
            return combinedArray[Math.floor(length / 2)]
    }
};

console.log(findMedianSortedArray([3], [-2, -1]))