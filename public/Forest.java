import java.util.ArrayList;
import java.util.*;

public class Forest {
    public static ArrayList<ArrayList<Integer>> MagicalForest(int arr[]) {
        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                ArrayList<Integer> res = new ArrayList<>();
                res.add(arr[i], arr[j]);
                ans.add(res);
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3 };
        
        System.out.println();

    }
}
