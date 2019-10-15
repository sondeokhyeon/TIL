public class DecimalToBinary {
    public static void main(String[] args) {
        
        int del = 17;
        int[] bin = new int[15];

        int i = 0;
        while(del > 0) {
            bin[i] = del % 2;
            del /= 2;
            i++;
        }
        i--;
        for (; i >= 0; i--) {
            System.out.print(bin[i] + " ");
        }
    }
}