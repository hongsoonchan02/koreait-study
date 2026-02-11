package kr.co.studyProject.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.co.studyProject.member.dto.ReqLoginDTO;
import kr.co.studyProject.member.dto.ReqSignupDTO;
import kr.co.studyProject.member.service.MemberService;
import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/home")
@RequiredArgsConstructor

public class MemberController {
	
	private final MemberService memberservice;
	
	@GetMapping("/signup/form")
	public String signupForm() {
		return "/signup";
	}
	
	@PostMapping("/signup")
	public String signup(ReqSignupDTO request) {
		memberservice.signup(request);
		return "/signup";
	}
	
	@GetMapping("/login/form")
	public String loginForm() {
		return"/login";
	}
	
	@PostMapping("/login")
	public String login(ReqLoginDTO request) {
		return "";
	}
	



}
