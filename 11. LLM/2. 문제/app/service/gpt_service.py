from openai import OpenAI
from app.core.config import settings
from app.utils.prompt_builder import build_prompt

client = OpenAI(api_key=settings.OPENAI_API_KEY)

class GPTService:
    def generate_text(self, description:str, genre:str,
                      level:str, purpose:str, max_completion_token:int,
                      temperature:float):

        final_prompt = build_prompt(description, genre, level, purpose)

        response = client.chat.completions.create(
            model="gpt-5.4-nano",
            messages=final_prompt,
            max_completion_tokens=max_completion_token,
            temperature=temperature
        )

        return response.choices[0].message.content
