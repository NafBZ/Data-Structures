class Node:
    def __init__(self, value=None):
        self.value = value
        self.next = None


class SingleLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def __iter__(self):
        node = self.head
        while node:
            yield node
            node = node.next

    def insertion(self, value, location):
        newNode = Node(value)
        if self.head == None:  # If the linkedlist was empty
            self.head = newNode
            self.tail = newNode
        else:
            if location == 0:  # If the location of the new node at the beginning of the linked list
                newNode.next = self.head
                self.head = newNode
            elif location == -1:  # If the location of the new node at the end of the linked list
                newNode.next = None
                self.tail.next = newNode
                self.tail = newNode
            else:  # If the location of the new node at somewhere between the head and the tail of the linked list
                tempNode = self.head
                index = 0
                while index < location - 1:
                    tempNode = tempNode.next
                    index += 1

                nextNode = tempNode.next
                tempNode.next = newNode
                newNode.next = nextNode

                if tempNode == self.tail:
                    self.tail = newNode
        pass

    def traverse(self):
        if self.head is None:
            print("Linkedlist is empty")
        else:
            tempNode = self.head
            while tempNode is not None:
                print(tempNode.value)
                tempNode = tempNode.next

    def search(self, nodeValue):
        if self.head is None:
            print("Linkedlist is empty")
        else:
            tempNode = self.head  # Create a temporary Node
            while tempNode is not None:  # Loop through the entire linkedlist until find the node value
                if tempNode.value == nodeValue:
                    return tempNode.value
                else:
                    tempNode = tempNode.next

            return "The value does not exist in the linked list"

    def deletion(self, nodeLocation):
        if self.head is None:
            print("Linkedlist is empty")

        else:
            if nodeLocation == 0:  # Deletion of the first node
                if self.head == self.tail:
                    self.head = None
                    self.tail = None
                else:
                    self.head = self.head.next

            elif nodeLocation == -1:  # Deletion of the last node
                if self.head == self.tail:
                    self.head = None
                    self.tail = None
                else:
                    tempNode = self.head
                    while tempNode is not None:
                        if tempNode.next == self.tail:
                            break
                        else:
                            tempNode = tempNode.next
                    tempNode.next = None
                    self.tail = tempNode

            else:  # Deletion from other locations
                tempNode = self.head
                index = 0
                while index < nodeLocation - 1:
                    tempNode = tempNode.next
                    index += 1
                nextNode = tempNode.next
                tempNode.next = nextNode.next

        pass

    def delete_entire_list(self):
        if self.head is None:
            print("Linkedlist is empty")
        else:
            self.head = None
            self.tail = None

        pass


# Driver Code
if __name__ == '__main__':

    linkedlist = SingleLinkedList()  # Create a linked list object

    # Insterting nodes
    linkedlist.insertion(5, 0)
    linkedlist.insertion(3, 1)
    linkedlist.insertion(8, 2)
    linkedlist.insertion(7, 3)
    linkedlist.insertion(1, 4)
    linkedlist.insertion(9, 5)

    # Printing the linkedlist value
    print([node.value for node in linkedlist])
    linkedlist.deletion(4)
    print([node.value for node in linkedlist])
