public class linkedlist {
    static class Node {
        int val;
        Node next;

        Node(int x) {
            this.val = x;
            this.next = null;
        }
    }

    Node head;

    public void insert(int x) {
        Node temp = new Node(x);
        if (head == null) {
            head = temp;
        } else {
            Node q = head;
            while (q.next != null) {
                q = q.next;
            }
            q.next = temp;
        }

    }

    public void display() {
        Node q;
        for (q = head; q != null; q = q.next) {
            System.out.println(q.val);
        }
    }

    public static void main(String[] args) {
        
    }

}
