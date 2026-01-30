package kr.co.koreait;

public class Ex18_Filed {
	// 필드
	int num = 10; // 인스턴스 변수

	public static void main(String[] args) {
		// 필드(=멤버 변수)
		//	- 클래스 레벨의 변수를 의미
		
		Ex18_1_Car car = new Ex18_1_Car();
		car.wheel = 5;
	
		System.out.println(car.speed);
		System.out.println(car.wheel);
		
		Ex18_1_Car sonata = new Ex18_1_Car();
		sonata.wheel = 7;
		sonata.speed = 130;
	
		System.out.println(sonata.speed);
		System.out.println(sonata.wheel);
		
		Ex18_2_Person jjangu = new Ex18_2_Person("신짱구", 5, "인천", "010-1234-1234");
		Ex18_2_Person minsu = new Ex18_2_Person("김민수", 5);
		
//		jjangu.name = "짱구";
//		jjangu.age = 19;
//		jjangu.addr = "인천시";
//		jjangu.phone = "010-7825-4876";
		jjangu.introduce();
		
//		Ex18_2_Person minsu = new  Ex18_2_Person();
//		minsu.name = "민수";
//		minsu.age = 21;
//		minsu.addr = "서울시";
//		minsu.phone = "010-8754-9678";
		minsu.introduce();
		
		System.out.println(Ex18_2_Person.HOBBY);
		
//		Ex18_2_Person.introduce();
		
	}

}
