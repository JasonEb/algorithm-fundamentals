# def duplicate_zeros(arr)
#     i = 0

#     while i < arr.length
#         if arr[i] == 0
#             arr.insert(i, 0)
#             arr.pop
#             i += 2
#         else
#             i += 1
#         end
#     end

#     nil
# end

def duplicate_zeros_naive(arr)
    result = [] 

    # walk through arr
    # if we encounter a 0, then we push it to the result array with additional zero
    # then we return the result array with the duplicate.length set to the arr.lenght

    arr.each do |num|
        if num === 0
            result << 0
        end

        result << num
    end

    result[0...arr.length]
end

def duplicate_zeros(arr)
    # Walk through once, count how many 0s to track output
    # - once the count exceeds size of the array, walk backwards and insert zeroes
    # while walking backwards, add the number. If you add a zero, then jump twice to keep sync

    rdx = 0
    wdx = arr.length - 1 
    count = 0
    cutoff = false
    
    # walk forward
    while (rdx < arr.length)
        num = arr[rdx]

        if (num == 0)
            count += 2
        else
            count += 1
        end

        if (count > arr.length)
            cutoff = count >= arr.length
            break
        end

        rdx += 1
    end

    # idx should be stopped at the right spot
    # walk backwards. if we see a zero, insert another zero to the left 
    while (rdx > 0)
        num = arr [rdx]

        if num == 0
            # write 0s to rdx and rdx - 1
            arr[rdx] = 0
            arr[rdx - 1] = 0

            rdx -= 1
            wdx -= 2
        else
            arr[rdx] = num 

            rdx -= 1
            wdx -= 1
        end
    end

    arr
end