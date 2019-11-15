public class NumberQuadrangle4 {
    public static void main(String[] args) {
  
		int num = 4;

		int arr[][] = new int[num][num];
		for (int i = 0; i < num; i++) {
			for (int j = 0; j < num; j++) {
				arr[i][j] = (i + 1) * (j + 1);
				//System.out.printf("%4d", j);
			}
		}

		for (int i = 0; i < num; i++) {
			
			for (int j = 0; j < num; j++) {
				System.out.printf("%4d", arr[i][j]);
			}
			
			System.out.println();
		}

    }
}