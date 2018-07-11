/*
Depth First Search in java. 
Time: O(n)
Space: O(1)
*/

public class DepthFirstSearch{

    public static void main(String[] args){

        Node head = new Node(10);
		head.addChildren(5, 15);
		head.left.addChildren(53, 90);
		head.right.addChildren(21, 100);
						
		System.out.println(head.depthFirstSearch(10).value);  // 10
		System.out.println(head.depthFirstSearch(100).value);  // 100
		System.out.println(head.depthFirstSearch(17));  // null

    }

}

class Node{
    int value;
	Node left;
	Node right;
	
	Node(int value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
	
	public void addChildren(int value1, int value2) {
		this.left = new Node(value1);
		this.right = new Node(value2);
	}
	
	public Node depthFirstSearch(int value) {
		
		Node returnNode = null;
		
		if (this.left != null) {
			returnNode = this.left.depthFirstSearch(value);		
		} 
		if (returnNode == null && this.right != null) {
			returnNode = this.right.depthFirstSearch(value);
		} 
		if (this.value == value) {
			return this;
		}
		
		return returnNode;	
	}
}