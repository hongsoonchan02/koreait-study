package kr.co.studyProject.member.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
import kr.co.studyProject.member.dto.ReqLoginDTO;
import kr.co.studyProject.member.dto.ReqSignupDTO;
import kr.co.studyProject.member.dto.ResLoginDTO;
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
		return "/home";
	}
	
	@GetMapping("/login/form")
	public String loginForm() {
		return"/login";
	}
	
	@PostMapping("/login")
	public String login(ReqLoginDTO request, HttpSession session) {
		ResLoginDTO response = memberservice.login(request);
		if (response == null) {
			return "redirect:/home/signup/form";
		}
		
		session.setAttribute("USER_LOGIN", response);
		return "/home";
		
		
	}
	
	@GetMapping("/logout")
	public String logout(HttpSession session) {
		
		session.invalidate();
		
		return "redirect:/";
	}
	
	@GetMapping("/board/form")
	public String boardForm() {
		return "/board";
	}
	
	@GetMapping("/board/write/form")
	public String boardWriteForm() {
		return "/board-write";
	}
	
	



}
