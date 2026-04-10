package kr.co.studyProject.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class ReqBoardDTO {
	
	private Long id;
	private int viewCount;
	private String userName;
	private String title;
	private String content;

}
