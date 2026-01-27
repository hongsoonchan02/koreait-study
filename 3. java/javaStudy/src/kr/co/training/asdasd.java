package kr.co.training;

import java.util.Scanner;

public class asdasd {

	public static void main(String[] args) {
		String id;
		int q8_pw;
		Scanner sc = new Scanner(System.in);
		System.out.print("아이디를 입력해주세요 : ");
		id = sc.nextLine();
		System.out.print("비밀번호를 입력해주세요 : ");
		q8_pw = sc.nextInt();
		if (id.equals("admin") && q8_pw == 1234) {
			System.out.println("관리자 로그인 성공");
		} else {
			System.out.println("다시 입력해주세요.");
		}

	}

}
