import java.util.Scanner;

public class MultiplicationTable {
    public static void main(String[] args) {
  
		Scanner sc = new Scanner(System.in);

		System.out.print("First :");
		int s = sc.nextInt();
		
		System.out.print("second :");
		int f = sc.nextInt();

		for (int j = 1; j < 10; j++) {
			for (int i = s; i <= f; i++) {
				System.out.printf("%2d *%2d =%3d", i, j, i*j);
			}
			System.out.println();
		}
		
		sc.close();
    }
}