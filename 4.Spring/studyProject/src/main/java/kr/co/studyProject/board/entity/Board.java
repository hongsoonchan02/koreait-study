package kr.co.studyProject.board.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import kr.co.studyProject.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Builder
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Board {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String category;
	
	private String title;
	
	@Lob
	private String content;
	
	private int viewCount;
	
	@ManyToOne
	@JoinColumn(name="writer_id")
	private Member writerId;
	
	private LocalDateTime createdAt;
	private LocalDateTime updatedAt;
	
	// 저장되기 전 자동 호출
	@PrePersist
	public void prePersist() {
		this.createdAt = LocalDateTime.now();
		this.updatedAt = LocalDateTime.now();
			
	}
		
	// 수정되기 전 자동 호출
	@PreUpdate
	public void preUpdate() {
		this.updatedAt = LocalDateTime.now();
	}
	

}
