package kr.co.studyProject.member.dto;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ResLoginDTO {
	
	private Long id;
	private String userName;
	private String userNickname;
	private String phoneNumber;
	
	private LocalDateTime updatedAt;
	private LocalDateTime createdAt;

}
