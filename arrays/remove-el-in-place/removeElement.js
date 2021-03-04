const removeElement = (nums, val) => {
    //iterate through array
    //once target detected, overrite the current elements
    let curr = nums[0]
    let i = 0;
    let fdx = nums.length - 1

    while(i <= fdx) {
        curr = nums[i]

        if (curr == val) {
            //shift elements left
            shiftElementsLeft(nums,i)
            fdx--
        } else {
            i++
        }
    }
    nums = nums.slice(0, fdx)
    return fdx + 1
}

const shiftElementsLeft = (nums, i) => {
    let j = ++i
    let ogLength = nums.length

    while(j <= ogLength - 1) {
        nums[j - 1] = nums[j]
        j++
    }
}

exports.removeElement = removeElement

