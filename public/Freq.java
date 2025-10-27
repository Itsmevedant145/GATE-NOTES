import java.util.HashMap;

public class Freq {
    public static void main(String[] args) {
        HashMap<Integer, Integer> frequencyMap = new HashMap<>();
        int[] arr1 = { 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 88, 4 };
        for (int num : arr1) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        System.out.println("Element frequencies:");
        for (int key : frequencyMap.keySet()) {
            System.out.println("Element: " + key + ", Frequency: " + frequencyMap.get(key));
        }
        int[] arr = { 2, 3, 2, 5, 8, 5, 6, 8, 8 };
        int n = arr.length;
        boolean[] visited = new boolean[n];

        System.out.println("Element | Frequency");
        for (int i = 0; i < n; i++) {
            if (visited[i]) {
                continue;
            }

            int count = 1;
            for (int j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    visited[j] = true;
                    count++;
                }
            }

            System.out.println("   " + arr[i] + "    |    " + count);
        }
    }
}
