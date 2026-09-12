=begin
0   1   2   3   4
-----------------
0   1   3   2   3 
                r
            w

=end
def remove_element(nums, val)
    # 2 pointers start at 0, a rdx for reading and a wdx for writing
    # if nums[rdx] is the target, keep incrementing rdx until it's no longer target
    # once it's no longer the target, resume writing nums[wdx] to nums[rdx] until 

    rdx, wdx = 0,0

    while rdx < nums.length
        if (nums[wdx] = nums[rdx])
            while (nums[rdx] == val)
                rdx += 1
            end
            nums[wdx] = val
            wdx += 1 
        else
            nums[wdx] = nums[rdx]
            wdx += 1
            rdx += 1
        end
    end

    wdx - 1
end
