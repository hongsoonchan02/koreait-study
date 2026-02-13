package kr.co.studyProject.board.service;

import kr.co.studyProject.board.dto.ReqWriteDTO;

public interface BoardService {
	
	void write (ReqWriteDTO request, Long loginId);

}
