package kr.co.studyProject.member.service;


import kr.co.studyProject.member.dto.ReqLoginDTO;
import kr.co.studyProject.member.dto.ReqSignupDTO;
import kr.co.studyProject.member.dto.ResLoginDTO;
import kr.co.studyProject.member.service.MemberService;

public interface MemberService {
	
	public void signup(ReqSignupDTO request);
	
	/**
	 * 로그인 처리 메서드
	 * 
	 * 기능
	 * 	- 해당 아이디를 가진 유저가 있는지 조회 (findByUserId)
	 * 	- 만약 존재하지 않으면 null 반환
	 * 	- 존재한다면 사용자가 입력한 평문 비밀번호로 BCrypt로 검증
	 * 		> 사용자가 입력한 비밀번호가 암호화된 비밀번호와 일치하는지
	 * 	- 비밀번호가 일치한다면 응답 객체 반환
	 * 	- 일치하지 않는다면 null 반환
	 * 
	 * @param request 사용자가 입력한 로그인 정보(userId, password)
	 */
	
	ResLoginDTO login(ReqLoginDTO request);
	

}
