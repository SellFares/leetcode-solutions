/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let n = nums.length
    let res = [n]
    for(let i=0; i < n ; i++ ) {
        let num = nums[i]
        let nb = 0
        for( let j=0 ; j < n ; j++ ){
            if ( nums[j] < nums[i] && j!=i ){
                nb++
            }
        }
        res[i]=nb
    }
    return res
};
