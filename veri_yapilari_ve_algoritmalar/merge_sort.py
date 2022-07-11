# [16,21,11,8,12,22] -> Merge Sort
#
# Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
# Big-O gösterimini yazınız. O(nlogn)


# [16,21,11,8,12,22]
#               16,21,11                   8,12,22
#           16,21         11           8,12          22
#        16         21    11        8        12      22
#           16,21         11           8,12          22
#               11,16,21                   8,12,22
#                       8,11,12,16,21,22

def merge_sort(array):
    if len(array) > 1:

        #  r is the point where the array is divided into two subarrays
        r = len(array) // 2
        L = array[:r]
        M = array[r:]

        # Sort the two halves
        merge_sort(L)
        merge_sort(M)

        i = j = k = 0

        # Until we reach either end of either L or M, pick larger among
        # elements L and M and place them in the correct position at A[p..r]
        while i < len(L) and j < len(M):
            if L[i] < M[j]:
                array[k] = L[i]
                i += 1
            else:
                array[k] = M[j]
                j += 1
            k += 1

        # When we run out of elements in either L or M,
        # pick up the remaining elements and put in A[p..r]
        while i < len(L):
            array[k] = L[i]
            i += 1
            k += 1

        while j < len(M):
            array[k] = M[j]
            j += 1
            k += 1


array = [16, 21, 11, 8, 12, 22]

merge_sort(array)
print(array)
