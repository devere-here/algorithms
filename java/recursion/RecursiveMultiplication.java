public class RecursiveMultiplication {
	
	public static void main(String[] args) {
		
		System.out.println(recursiveMultiplication(7, 9));  // 63
		System.out.println(recursiveMultiplication(5, 3));  // 15
		System.out.println(recursiveMultiplication(1, 9));  // 9
						
	}
	
	static int recursiveMultiplication(int num1, int num2) {
		if (num1 == 0 || num2 == 0) return 0;
		
		int min = num1 < num2 ? num1 : num2;
		int max = min == num1 ? num2 : num1;
		
		return recursiveMultiplication(min, max, 0);
	}
	
	static int recursiveMultiplication(int min, int max, int total) {
		if (min > 0) {
			min--;
			total += max;
			
			return recursiveMultiplication(min, max, total);
		}
		
		return total;
	}
	

}