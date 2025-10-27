public class MoveZerosToEnd {
    public static void moveZerosToEnd(int[] arr) {
        int n = arr.length;
        int count = 0; // Count of non-zero elements

        // Traverse the array. If element is non-zero, put it at 'count' index.
        for (int i = 0; i < n; i++) {
            if (arr[i] != 0) {
                arr[count] = arr[i];
                count++;
            }
        }

        // Now fill remaining positions with zero
        while (count < n) {
            arr[count] = 0;
            count++;
        }
    }

    // For testing
    public static void main(String[] args) {
        int[] arr = { 0, 1, 0, 3, 12, 0, 5 };
        moveZerosToEnd(arr);

        // Print updated array
        for (int num : arr) {
            System.out.print(num + " ");
        }
        // Output: 1 3 12 5 0 0 0
    }
}
