# [22,27,16,2,18,6] -> Insertion Sort
#
# Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.
# Big-O gösterimini yazınız.
# Time Complexity:
#   Average case: Aradığımız sayının ortada olması, O(n)
#   Worst case: Aradığımız sayının sonda olması, O(n^2)
#   Best case: Aradığımız sayının dizinin en başında olması. O(n^2)
# Dizi sıralandıktan sonra 18 sayısı hangi case kapsamına girer? Yazınız.
#
#
# [7,3,5,8,2,9,4,15,6] dizisinin Insertion Sort'a göre ilk 4 adımını yazınız.

# Asamalari:
#       [2,7,3,5,8,9,4,15,6]
#       [2,3,7,5,8,9,4,15,6]
#       [2,3,4,7,5,8,9,15,6]
#       [2,3,4,5,7,8,9,15,6]

# 18 sayısı avarage case senaryosuna girer

def insertion_sort(arr):
    for step in range(1, len(arr)):
        current_min = arr[step - 1]
        inline_step = step

        while inline_step < len(arr):
            if current_min > arr[inline_step]:
                temp = current_min
                current_min = arr[inline_step]
                arr[inline_step] = temp
            inline_step += 1
            arr[step - 1] = current_min


nums = [7, 3, 5, 8, 2, 9, 4, 15, 6]
insertion_sort(nums)
print(nums)
