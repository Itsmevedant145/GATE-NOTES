import java.util.HashMap;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>(); // number -> index

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }

            map.put(nums[i], i);
        }

        return new int[] {};
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        int[] nums = { 2, 7, 11, 15 };
        int target = 9;

        int[] indices = solution.twoSum(nums, target);

        if (indices.length == 2) {
            System.out.println("Indices found: " + indices[0] + ", " + indices[1]);
            System.out.println("Numbers: " + nums[indices[0]] + " + " + nums[indices[1]] + " = " + target);
        } else {
            System.out.println("No two sum solution found.");
        }
    }
}
