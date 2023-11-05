from io import BytesIO
from tempfile import TemporaryDirectory

import openai
from pydub import AudioSegment

from constants import OPENAI_API_KEY


def transcribe_audio(
    chunks: list[bytes],
    prompt: str = "",
    frame_rate: int = 8000,
) -> str:
    """Transcribes μ-law encoded audio chunks."""
    recording = AudioSegment.from_file(BytesIO(b"".join(chunks)), format="mulaw")
    recording.frame_rate = frame_rate
    with TemporaryDirectory() as temp_dir:
        recording_path = f"{temp_dir}/recording.mp3"
        recording.export(recording_path, format="mp3")
        with open(recording_path, "rb") as f:
            transcript = openai.Audio.transcribe(
                "whisper-1", f, api_key=OPENAI_API_KEY, prompt=prompt
            )["text"]
    return transcript
