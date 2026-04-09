/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxi = 0
    let curr = 0
    for(num of nums){
        if ( num=="1" ){
            curr++
        }else {
            if ( curr >= maxi ){
                maxi = curr
            }
            curr = 0
        }
    }
    if ( curr >= maxi ){
                maxi = curr
            }
    return maxi
};
