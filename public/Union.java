import java.util.*;

public class Union {
    public static void main(String[] args) {
        int[] a1 = { 2, 3, 4, 5, 7 };
        int[] a2 = { 2, 3, 1, 6, 8, 9 };

        Set<Integer> set1 = new HashSet<>();
        Set<Integer> set2 = new HashSet<>();

        for (int num : a1) {
            set1.add(num);
        }
        for (int num : a2) {
            set2.add(num);
        }

        // Intersection
        Set<Integer> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection of sets: " + intersection);

        // Union
        Set<Integer> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Union of sets: " + union);

        // Difference (set1 - set2)
        Set<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference (set1 - set2): " + difference);
    }
}
