function twoSum(nums, target) {
    const hash_table = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in hash_table) {
            return [hash_table[complement], i];
        }
        hash_table[nums[i]] = i;
    }
}

let nums = [2,7,11,15];
let target = 9;
console.log(twoSum(nums, target));