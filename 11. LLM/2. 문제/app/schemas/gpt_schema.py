from pydantic import BaseModel

class GptRequest(BaseModel):
    description: str
    genre: str
    purpose: str
    level: str
    max_completion_token: int = 20000
    temperature: float = 0.3


class GPTResponse(BaseModel):
    result: str