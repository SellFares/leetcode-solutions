/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    var res = [2*n]
    j=0
    for(let i=0 ; i < n ; i++){
        res[j] = nums[i]
        res[j+1] = nums[i+n]
        j=j+2
    }
    console.log(res)
    return res
};
