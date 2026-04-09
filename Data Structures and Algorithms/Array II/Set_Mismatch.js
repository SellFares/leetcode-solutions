/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let res = [2]
    res[1]= 0
    let n = nums.length
    for(let i =0 ; i < n ; i++){
        for(let j = i+1 ; j < n ; j++ ){
            if ( nums[j] == nums[i] ){
                res[0] = nums[j]
                break
            }
        }
    }
    for(i =0 ; i < n ; i++){
        let test = nums.includes(i+1);
        if (!test) {
            res[1]=i+1
            break
        }
    }

    return res
};
