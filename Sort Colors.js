var sortColors = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let i = 0;

    while(i <= high){
        if(nums[i] === 0){
            swap(nums, i, low);
            low++;
            i++;
        } else if (nums[i] === 2){
            swap(nums, i, high);
            high--;
        } else {
            i++;
        }
    }
};

function swap(nums, i, j){
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

//Example usage:
const nums1 = [2,0,2,1,1,0];
sortColors(nums1);
console.log(nums1);

const nums2 = [2,0,1];
sortColors(nums2);
console.log(nums2);