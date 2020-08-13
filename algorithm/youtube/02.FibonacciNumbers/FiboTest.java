public class FiboTest {
    public static void main(String[] args) {

        int[] arr1 = new int[10];

        arr1[0] = 1;
        arr1[1] = 1;

        for (int i = 2; i < 10; i++) {
            arr1[i] = arr1[i - 1] + arr1[i - 2];
        }

        for (int n : arr1) {
            System.out.println(n);
        }

    }
}