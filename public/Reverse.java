public class Reverse {
    public static void main(String[] args) {
        int[] arr = { 2, 4, 6, 8, 10, 12 };
        int left = 0;
        int right = arr.length - 1;
        while (left <= right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
        System.out.println("Array after revserse");
        for (int num : arr) {
            System.out.print(num + ",");
        }
    }

}
