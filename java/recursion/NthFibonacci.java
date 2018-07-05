public class NthFibonacci{

    public static void main(String[] args){

        System.out.println(nthFibonacci(0)); // returns -1
        System.out.println(nthFibonacci(1)); // returns 0
        System.out.println(nthFibonacci(6)); // returns 5
        System.out.println(nthFibonacci(11)); // returns 55
    }

    static int nthFibonacci(int n){
        if (n <= 0) return -1;
        else if (n == 1 || n == 2) return n - 1;
		else return nthFibonacci(n - 1) + nthFibonacci(n - 2); 
    }

}