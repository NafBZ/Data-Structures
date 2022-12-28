# Write a function to get a list of the highest, and the second highest number from a given list. List may contain duplicates.


def firstSecond(givenList):
    res = []
    givenList = sorted(givenList)
    res.append(givenList[-1])
    for i in range(len(givenList)-1, -1, -1):
        if givenList[i] not in res:
            res.append(givenList[i])
            return res
        else:
            continue


myList = [84, 85, 86, 85, 90, 90, 85, 83, 23, 45, 84, 1, 2, 0]
print(firstSecond(myList))
