import java.util.*;

public class second {
    public static void main(String[] args) {
        int[] arr = { 2, 5, 7, 9, 1, 6 };
        ArrayList<Integer> missingNumbers = new ArrayList<>();
        for (int num : arr) {

            missingNumbers.add(num);
        }
        for (int i = 1; i <= 10; i++) {
            if (!missingNumbers.contains(i)) {
                System.out.println("Missing number: " + i);
            }
        }
    }
}
