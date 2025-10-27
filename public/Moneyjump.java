import java.util.*;

public class Moneyjump {
    
    public int Remainingmonkey(int n,int m,int p,int k,int j){
        // n = monkey m = banana p = peanut k = bananna capacity j = peanut capaactty
        if ( n < 0 && k < 0 || j<0 || m <0  || p < 0){
            System.out.println("Invalid valid");
        }
        else {
            return n - ceil(m/k) - ceil(p/j);
        }
    }
}
