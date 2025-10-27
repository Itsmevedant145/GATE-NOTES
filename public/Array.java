import java.util.*;

import java.util.Scanner;

public class Array {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter elements of array");
        int n = sc.nextInt();
        int[] ar = new int[n];
        System.out.println("now eneter elements one by noe");
        for (int i = 0; i < n; i++) {
            ar[i] = sc.nextInt();
        }
        System.out.println("given array is");
        for (int num : ar) {
            System.out.println(num);
        }
        // Arrays.sort(ar);
        System.out.println("sorted array is");
        // for (int num : ar) {
        // System.out.println(num);
        // }

        sc.close();
        int largest = Integer.MIN_VALUE;
        int secondLargest = Integer.MIN_VALUE;
        for (int i = 0; i < n; i++) {
            if (ar[i] > largest) {
                secondLargest = largest;
                largest = ar[i];
            } else if (ar[i] > secondLargest && ar[i] != largest) {
                secondLargest = ar[i];
            }

        }
        if (secondLargest == Integer.MIN_VALUE) {
            System.out.println("There is no second largest element in the array.");
        } else {
            System.out.println("The second largest element is: " + secondLargest);
        }

    }
}
