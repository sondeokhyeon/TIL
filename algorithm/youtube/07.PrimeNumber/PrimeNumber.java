import java.util.ArrayList;

public class PrimeNumber {
    public static void main(String[] args) {

        int input = 18;
        boolean isPrimeNumber = true;

        for (int i = 2; i < input - 1; i++ ) {
            if(input % i == 0) {
                isPrimeNumber = false;
            } 
        }

        if(isPrimeNumber) {
            System.out.println(input + "은 소 수 입니다.");
        } else {
            System.out.println(input + "은 소 수가 아니네요.");
        }

        int nums = 100;
        int flag = 0;

        for (int i = 2; i <= nums; i++) {
            for (int j = 2; j <= i; j++) {
                if(i % j == 0) {
                    flag++;
                }
            }
            if(flag == 1) {
                System.out.print(i + " ");
            }
            flag = 0;
        }
    
    }
}