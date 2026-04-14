from fastapi import APIRouter

from app.schemas.gpt_schema import GPTResponse, GptRequest
from app.service.gpt_service import GPTService

router = APIRouter(prefix="/gpt", tags=["GPT"])

service = GPTService()

@router.post("/generate", response_model=GPTResponse)
def generate_test(req: GptRequest):

    result = service.generate_text(
        description = req.description,
        level = req.level,
        purpose = req.purpose,
        genre = req.genre,
        max_completion_token = req.max_completion_token,
        temperature = req.temperature
    )

    return GPTResponse(result=result)