package kr.co.studyProject.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ReqSignupDTO {
	private String userName;
	private String userEmail;
	private String userNickname;
	private String password;
	private String passwordCheck;
	private String phoneNumber;
	

}
