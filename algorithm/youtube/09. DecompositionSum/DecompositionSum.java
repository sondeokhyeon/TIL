public class DecompositionSum {
    public static void main(String[] args) {
        
        int input = 12345;
        int input2 = input;
        String input3 = String.valueOf(input2);
        int sum = 0;
        int sum2 = 0;

        while(input > 0) {
            sum += input % 10;
            input /= 10;
        }

        System.out.println(sum);    

        for (int i = 0; i <= input3.length(); i++) {
            sum2 += input2 % 10;
            input2 /= 10;
        }
        System.out.println(sum2);
    }
}