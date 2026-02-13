package kr.co.studyProject.board.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpSession;
import kr.co.studyProject.board.dto.ReqWriteDTO;
import kr.co.studyProject.board.service.BoardService;
import kr.co.studyProject.member.dto.ResLoginDTO;
import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {
	private final BoardService boardService;
	
	@GetMapping
	public String boardForm() {
		
		
		return "/board";
	}
	
	@GetMapping("/write/form")
	public String boardWriteForm() {
		return "/board-write";
	}
	
	@PostMapping("/write")
	public String boardWrite(ReqWriteDTO request, HttpSession session) {
		
		ResLoginDTO loginUser = (ResLoginDTO)session.getAttribute("USER_LOGIN");
		
		if(loginUser == null) {
			return "redirect:/home/signup/form";
		}
		
		boardService.write(request, loginUser.getId());
		
		return "redirect:/board";
		
		
	}

}
