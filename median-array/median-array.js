/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const combinedArray = nums1.concat(nums2).sort(function(a,b){return a - b})
    const length = nums1.concat(nums2).sort().length
    const dividedlength = length % 2
    switch (dividedlength) {
        case 0:
            return (combinedArray[length / 2] + combinedArray[length / 2 - 1]) / 2
        default:
            return combinedArray[Math.floor(length / 2)]
    }
};

module.exports = { findMedianSortedArrays }