public class NumberCountPrint {
    public static void main(String[] args) {
  
		int number = 131420118;
		int[] arr = new int[10];

		while(number > 0 ) {
			arr[number % 10] ++;
			number /= 10;
		}

		for (int i = 0; i < arr.length; i++) {
			System.out.println(i + ": " + arr[i]);
		}

    }
}