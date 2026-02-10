package kr.co.studyProject.member.service;

import kr.co.studyProject.member.dto.ReqSignupDTO;
import kr.co.studyProject.member.service.MemberService;

public interface MemberService {
	
	public void signup(ReqSignupDTO request);

}
