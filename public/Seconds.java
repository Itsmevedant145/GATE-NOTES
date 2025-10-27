public class Seconds {
    public int countsundays(String name , int num){
       String[] weekends = {"mon", "tue", "wed", "thu", "fri", "sat", "sun"};
       int[] vals = { 1, 2, 3, 4, 5, 6, 7 };
         int n = vals.length;
       int count = 0;
       for(int i = 0; i < n; i++) {
              if (weekends[i].equals(name)) {
                  int remainingdays = n - i;
                  if ( remainingdays < num){
                    count++;
                  }
                  int totalsundays = num % 7;
                  if (totalsundays == 0) {
                      count += num / 7;
                  } else {
                      count += (num / 7) + 1;
                  }
              }
         }
       
        return -1;
    }
    public static void main(String[] args) {

}
