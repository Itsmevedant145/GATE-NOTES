public class third {
    public float[] finishtime(float[] arr) {
        float min = arr[0];
        float[] res = new float[2];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }

        }
        res[0] = min;
        float sum = 0;
        for (float time : arr) {
            sum += time;
        }
        res[1] = sum / arr.length;
        return res;

    }

    public static void main(String[] args) {
        third t = new third();
        float[] arr = { 12.5f, 10.0f, 15.0f, 8.5f, 11.0f };
        float[] result = t.finishtime(arr);
        System.out.println("Minimum time: " + result[0]);
        System.out.println("Average time: " + result[1]);
    }
}
