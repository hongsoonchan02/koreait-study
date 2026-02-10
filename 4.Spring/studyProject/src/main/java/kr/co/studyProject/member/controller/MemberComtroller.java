package kr.co.studyProject.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kr.co.studyProject.member.dto.ReqSignupDTO;

@Controller
@RequestMapping("/home")

public class MemberComtroller {
	
	@GetMapping("/signup/form")
	public String signupForm() {
		return "signup";
	}
	
	@PostMapping("/signup")
	public String signup(ReqSignupDTO request) {
		return "/home";
	}
	



}
