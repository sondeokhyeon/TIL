import java.util.ArrayList;
import java.util.Scanner;

public class Factorial {
    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        System.out.println("팩토리얼 확인");
        System.out.print("숫자를 입력하세요 : ");
        int num = sc.nextInt();
        sc.close();
        int facNum = 1;
        
        for (int i = 1; i <= num; i++) {
            facNum *= i;
        }
        
        System.out.println(num + "! = " + facNum + " 입니다. ");
    }
}