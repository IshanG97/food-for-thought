#pathlib automatically handles platform-specific path syntax. This means you can write code that works on different operating systems (Windows, macOS, Linux) without worrying about the differences in path conventions.
import pathlib 

#Starlette is a lightweight ASGI framework/toolkit, which is ideal for building high performance async services -> https://www.starlette.io/
#
from starlette.config import Config


config = Config(pathlib.Path(__file__).parent.parent.resolve() / ".env")
print (config)
ANTHROPIC_API_KEY = config("ANTHROPIC_API_KEY")
GCP_API_KEY = config("GCP_API_KEY")
NGROK_DOMAIN = config("NGROK_DOMAIN")
OPENAI_API_KEY = config("OPENAI_API_KEY")
TWILIO_ACCOUNT_SID = config("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = config("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = config("TWILIO_PHONE_NUMBER")

PLACE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json"