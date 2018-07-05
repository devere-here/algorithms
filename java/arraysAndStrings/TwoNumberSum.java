import java.util.Arrays;
import java.util.HashMap;

public class TwoNumberSum {
	
	public static void main(String[] args) {
		
		System.out.println(Arrays.toString(twoNumberSum(new int[] {2, 1, 3}, 6))); // returns []
		System.out.println(Arrays.toString(twoNumberSum(new int[] {2, 1, 3}, 4))); // returns [1, 3]
		System.out.println(Arrays.toString(twoNumberSum(new int[] {2, 1, 3, 8, 11, 2, 15, 9, -4}, 23))); // returns [8, 15]
    }
	
	public static int[] twoNumberSum(int[] array, int targetSum) {
		
		HashMap<Integer, Integer> hMap = new HashMap<Integer, Integer>();
			
		for (int i = 0; i < array.length; i++){
			if (hMap.containsValue(array[i]) == true){
				int[] twoNumberArr = new int[2];
				twoNumberArr[0] = Math.min(array[i], targetSum - array[i]);
				twoNumberArr[1] = Math.max(array[i], targetSum - array[i]);
				
				return twoNumberArr;				
			} else{
				hMap.put(array[i], targetSum - array[i]);
			}
		}
		
		return new int[0];		
	}
}