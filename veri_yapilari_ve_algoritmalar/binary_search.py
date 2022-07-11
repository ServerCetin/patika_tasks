# [7, 5, 1, 8, 3, 6, 0, 9, 4, 2] dizisinin Binary-Search-Tree aşamalarını yazınız.
#
# Örnek: root x'dir. root'un sağından y bulunur. Solunda z bulunur vb.

# Root 7'dir
# Diger asamalarda sirayla sonraki indexe bakilip eger kucukse soldan gidilir buyukse sagdan,
# her adımda bu soru sorulur


#                                           7
#                                    5             8
#                               1         6             9
#                          0        3
#                                 2   4


# Binary Search in python(source: https://www.programiz.com/dsa/binary-search)


def binarySearch(array, x, low, high):
    if high >= low:

        mid = low + (high - low) // 2

        # If found at mid, then return it
        if array[mid] == x:
            return mid

        # Search the left half
        elif array[mid] > x:
            return binarySearch(array, x, low, mid - 1)

        # Search the right half
        else:
            return binarySearch(array, x, mid + 1, high)

    else:
        return -1


array = [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]
x = 3

result = binarySearch(array, x, 0, len(array) - 1)

if result != -1:
    print("Element is present at index " + str(result))
else:
    print("Not found")
