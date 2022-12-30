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
