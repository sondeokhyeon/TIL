public class UpperLowerChange {
    public static void main(String[] args) {
        String input = "hELLO wORLD";
        char[] arr = input.toCharArray();

        for (int i = 0; i < input.length(); i++) {     
            if(input.charAt(i) >= 'a' && input.charAt(i) <= 'z' ) {
                arr[i] = (char)(arr[i] + 'A' - 'a');
            } else {
                arr[i] = Character.toLowerCase(input.charAt(i));
            }
        }
        System.out.println(arr);
    }
}