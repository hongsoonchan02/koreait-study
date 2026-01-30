package kr.co.koreait;

public class Ex15_Recursion {

	public static void main(String[] args) {
		
		Ex15_Recursion rc = new Ex15_Recursion();
		System.out.println(rc.sum(5));
		rc.test(5);
		

	}
	
	public int sum(int n) {
		if(n==1) {
			return 1;
		}
		
		return n + sum(n-1);
	}
	
	public void test(int n) {
		if (n==0) {
			return;
		}
		test(n-1);
		System.out.println(n + " ");
	}

}