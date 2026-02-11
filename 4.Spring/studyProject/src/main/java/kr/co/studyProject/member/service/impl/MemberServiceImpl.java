package kr.co.studyProject.member.service.impl;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import kr.co.studyProject.member.repository.MemberRepository;
import kr.co.studyProject.member.dto.ReqLoginDTO;
import kr.co.studyProject.member.dto.ReqSignupDTO;
import kr.co.studyProject.member.entity.Member;
import kr.co.studyProject.member.service.MemberService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	private final MemberRepository memberRepository;
	private final BCryptPasswordEncoder passwordEncoder;

	@Override
	public void signup (ReqSignupDTO request) {
		// 1. 비밀번호, 닉네임, 이메일 중복 확인
		if (!request.getPassword().equals(request.getPasswordCheck())) {
			System.out.println("비밀번호가 일치하지 않습니다.");
		}
		if (memberRepository.existsByUserEmail(request.getUserEmail())) {
			System.out.println("이미 존재하는 이메일입니다.");
		}
		if (memberRepository.existsByUserNickname(request.getUserNickname())) {
			System.out.println("이미 존재하는 닉네임입니다.");
		}
		
		// 비밀번호 암호화
		String passwordEncord = passwordEncoder.encode(request.getPassword());
		
		// DB 저장
		Member member = new Member();
		member.setUserName(request.getUserName());
		member.setUserNickname(request.getUserNickname());
		member.setUserEmail(request.getUserEmail());
		member.setPassword(passwordEncord);
		member.setPhoneNumber(request.getPhoneNumber());
		
		memberRepository.save(member);
		
		
}
	
	@Override
	public void login(ReqLoginDTO request) {
		
		Member member = memberRepository.findByUserEmail(request.getUserEmail());
		
	}
}
