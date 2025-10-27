import java.util.ArrayList;
import java.util.Arrays;

public class MaxOfSubarrays {

    public static ArrayList<Integer> maxOfSubarrays(int[] arr, int k) {
        ArrayList<Integer> result = new ArrayList<>();
        int[] window = new int[k];

        System.out.println("Initial window setup:");

        for (int i = 0; i < k; i++) {
            window[i] = arr[i];
            System.out.println("window[" + i + "] = " + arr[i]);
        }

        int max = getMax(window);
        System.out.println("Initial window max: " + max);
        result.add(max);

        // Step 2: Slide the window
        System.out.println("\nSliding the window:");
        for (int i = 1; i <= arr.length - k; i++) {
            System.out.println("\nWindow move " + i + ":");

            // Shift window left
            for (int j = 0; j < k - 1; j++) {
                window[j] = window[j + 1];
                System.out.println("Shifted window[" + j + "] = " + window[j]);
            }

            // Add next element at the end of the window
            window[k - 1] = arr[i + k - 1];
            System.out.println("Added new element to window[" + (k - 1) + "] = " + arr[i + k - 1]);

            // Get max of the new window
            max = getMax(window);
            System.out.println("Current window: " + Arrays.toString(window));
            System.out.println("Window max: " + max);
            result.add(max);
        }

        return result;
    }

    public static int getMax(int[] arr) {
        int largest = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > largest) {
                largest = arr[i];
            }
        }
        return largest;
    }

    // For testing
    public static void main(String[] args) {
        int[] arr = { 1, 3, -1, -3, 5, 3, 6, 7 };
        int k = 3;

        ArrayList<Integer> output = maxOfSubarrays(arr, k);
        System.out.println("\nFinal result: " + output);
    }
}
