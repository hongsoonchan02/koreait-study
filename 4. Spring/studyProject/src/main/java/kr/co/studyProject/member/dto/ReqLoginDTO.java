package kr.co.studyProject.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReqLoginDTO {
	
	private Long userId;
	private String userEmail;
	private String password;

}
