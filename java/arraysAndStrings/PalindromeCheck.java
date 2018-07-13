/*
Check if the input string is a palindrome

Time: O(n)
Space: O(1)

*/


public class PalindromeCheck {
	
	public static void main(String[] args) {
		
		System.out.println(palindromeCheck("racecar"));  // true
		System.out.println(palindromeCheck("cat"));  // false
		System.out.println(palindromeCheck("qwertyuioppoiuytrewq"));  // true
						
	}
	
	static boolean palindromeCheck(String str) {
		int start = 0;
		int end = str.length() - 1;
		
		while(start < end) {
			if (str.charAt(start) != str.charAt(end)) return false;
			start++;
			end--;
		}
		
		return true;
	}
	
}