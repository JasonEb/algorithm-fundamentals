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

def duplicate_zeros(arr)
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