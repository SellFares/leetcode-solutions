/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length
    let arrs = new Array(n+1).fill(false);
    let res = []
    for(num of nums ){
        arrs[num] = true
    }
    console.log(arrs)
    for( let i = 1 ; i < n+1 ; i++ ){
        if ( arrs[i] == false  ){
            res.push(i)
        }
    }

    return res
};
