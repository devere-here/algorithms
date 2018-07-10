import java.util.Arrays;

public class PancakeSort {
	
	public static void main(String[] args) {
						
		System.out.println(Arrays.toString(pancakeSort(new int[] {5, 1, 3})));  // [1, 3, 5]
		System.out.println(Arrays.toString(pancakeSort(new int[] {5, 7, 2, 16, 11, -6, 1, 3})));  // [-6, 1, 2, 3, 5, 7, 11, 16]
	}
	
	
	public static int[] pancakeSort(int[] array) {

		int sortedIdx = array.length - 1;
		
		
		while(sortedIdx > 0) {
			int maxIdx = maxUnsortedIdx(array, sortedIdx);
			
			array = flip(array, 0, maxIdx);
			array = flip(array, 0, sortedIdx);
			sortedIdx--;
		}
		
		return array;	
	}
	
	private static int[] flip(int[] array, int left, int right) {
		
		while (left < right) {
			int temp  = array[left];
			array[left] = array[right];
			array[right] = temp;
			left++;
			right--;
		}
		
		return array;
	}
	
	private static int maxUnsortedIdx(int[] array, int end) {
		if (array.length == 0) return -1;
		
		int maxIdx = 0;
		int maxValue = array[0];
		
		for (int i = 1; i <= end; i++) {
			if (array[i] > maxValue) {
				maxIdx = i;
				maxValue = array[i];
			}
		}
		
		return maxIdx;
	}
	

}