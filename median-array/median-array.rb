# @param {Integer[]} nums1
# @param {Integer[]} nums2
# @return {Float}
def find_median_sorted_arrays(nums1, nums2)
    combined_array = nums1.concat(nums2).sort()
    length = nums1.concat(nums2).sort().length()
    divided_length = length % 2

    if divided_length == 0
        return ((combined_array[(length / 2)] + combined_array[(length / 2) - 1]) / 2)
    else
        return combined_array[(length / 2)].to_f
    end
end

print find_median_sorted_arrays([1, 2], [3, 4])