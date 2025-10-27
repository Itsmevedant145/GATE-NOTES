public class First {
    public static void main(String[] args) {
        int[] arr = { 7, 4, 8, 2, 9 };
        int n = arr.length;
        int count = 0;
        int max = arr[n - 1];
        for (int i = n - 1; i >= 0; i--) {
            if (arr[i] > max) {
                max = arr[i];
                count++;
            }
        }
        System.out.println("Count of elements greater than their right side: " + count);
    }
}
