import java.util.Scanner;

public class GreatestCommonDivisor {
    public static void main(String[] args) {

        int num1 = 12;
        int num2 = 18;
        int x = 1;

        int small;
        int big;

        if ( num1 > num2) {
            big = num1;
            small = num2;
        } else {
            big = num2;
            small = num1;
        }
        
        int gcd = 1;
        while(x <= small) {
            if(big % x == 0 && small % x  == 0) {
                gcd = x;
            }
            x++;
        }

        int gcd2 = 1;
        for (int i = 1; i <= small; i++) {
            if(big % i == 0 && small % i == 0) {
                gcd2 = i;
            }
        }

        System.out.println(gcd);
        System.out.println(gcd2);
        

    }
}