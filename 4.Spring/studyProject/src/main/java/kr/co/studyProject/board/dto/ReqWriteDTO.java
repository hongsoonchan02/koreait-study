package kr.co.studyProject.board.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ReqWriteDTO {
	
	private Long id;
	private String category;
	private String title;
	private String content;

}
