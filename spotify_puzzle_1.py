import sys

inputted = []
for line in sys.stdin:
    inputted.append(line)

# decToReverseBinary: Takes a number in base ten, converts it to its reverse binary representation in form a list, then returns the list

def decToReverseBinary(n):
    nextN = n
    result = []
    while nextN >= 1:
        #if evenly divisible by two, add 0 to the resulting binary representation
        if nextN % 2 == 0:

            # Don't add superflous zeroes in the start of the results list
            if len(result) > 0:
                result.append(0)
                
        else:
            result.append(1)
            
        nextN /= 2

    return result


def binaryToDec(binaryList):
    result = 0
    listlength = len(binaryList) - 1
    for index, val in enumerate(binaryList):
        result += val * (2**(listlength-index)) # for list [1,0,1]: 1*(2**2) + 0 * (2 ** 1) + 1 (2**0) = 4 + 0 + 1 = 5
        
    return result

answer = binaryToDec(decToReverseBinary(int(inputted[0])))
print answer
