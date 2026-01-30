package kr.co.training;

public class Ex18_Main {

	public static void main(String[] args) {
		Ex18_1_Bye bye = new Ex18_1_Bye(600000);
		bye.buyDesktop();
		bye.buyMonitor();
		bye.buyMouse();
		System.out.println(bye.getBalance());

	}

}
