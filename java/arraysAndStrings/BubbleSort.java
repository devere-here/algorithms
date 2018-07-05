import java.util.Arrays;

public class BubbleSort {
	
	public static void main(String[] args) {
		
        System.out.println(Arrays.toString(bubbleSort(new int[] {})));  // returns []
        System.out.println(Arrays.toString(bubbleSort(new int[] {2,1}))); // returns [1, 2]
        System.out.println(Arrays.toString(bubbleSort(new int[] {8,3,11,14,2,1,7}))); // returns [1, 2, 3, 7, 8, 11, 14]
    }

    static int[] bubbleSort(int[] array){
        for (int end = array.length - 1; end > 0; end--){
			for (int start = 0; start < end; start++){
				if (array[start] > array[start + 1]) swap(array, start, start + 1);		
		    }
		}
		
		return array;
    }

    static void swap(int[] array, int idx1, int idx2){
		int temp = array[idx1];
		array[idx1] = array[idx2];
		array[idx2] = temp;
	}
	
}