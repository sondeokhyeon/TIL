import java.util.Scanner;

public class LargestNumber {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int[] nums = new int[10];
        for (int i = 0; i < 10; i++) {
            nums[i] = sc.nextInt();
        }

        int[] numArr = new int[10];
        for (int i = 0; i < 10; i++) {
            numArr[nums[i]]++;
        }

        int maxNum = 0;
        int maxCount = 0;
        for (int i = 0; i < 10; i++) {
            if(maxCount < numArr[i]) {
                maxCount = numArr[i];
                maxNum = i;
            }
        }
        System.out.println("최빈수는 : " + maxNum + " count : " + maxCount);
        sc.close();
    }
}