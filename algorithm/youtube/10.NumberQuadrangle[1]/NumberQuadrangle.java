public class NumberQuadrangle {
    public static void main(String[] args) {
        
        int num = 4;
        int sum = 0;
        for(int i = 1; i <= num; i++) {
            for (int j = 1; j <= num; j++) {
                sum ++;
                System.out.printf("%3d",sum);
            }
            System.out.println("");
        }

    }
}