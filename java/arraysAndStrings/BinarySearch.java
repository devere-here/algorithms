/*

*/

import java.util.Arrays;

public class BinarySearch{

    public static void main(String[] args){

        System.out.println(binarySearch(new int[] {1, 2, 3}, 1)); // returns 0
        System.out.println(binarySearch(new int[] {1, 2, 3}, 4)); // returns -1
        System.out.println(binarySearch(new int[] {1, 2, 3, 4, 5, 6, 7}, 6)); // returns 5
    }

    static int binarySearch(int[] array, int target){
        int start = 0;
		int end = array.length - 1;
		
		while (start <= end){
			int midpoint = (start + end) / 2;
			if (array[midpoint] == target) return midpoint;
			else if (array[midpoint] < target) start = midpoint + 1;
			else end = midpoint - 1;
		}
		
		return -1;
    }

}