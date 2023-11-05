import pathlib

from starlette.config import Config


config = Config(pathlib.Path(__file__).parent.parent.resolve() / ".env")
ANTHROPIC_API_KEY = config("ANTHROPIC_API_KEY")
GCP_API_KEY = config("GCP_API_KEY")
NGROK_DOMAIN = config("NGROK_DOMAIN")
OPENAI_API_KEY = config("OPENAI_API_KEY")
TWILIO_ACCOUNT_SID = config("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = config("TWILIO_AUTH_TOKEN")
TWILIO_PHONE_NUMBER = config("TWILIO_PHONE_NUMBER")

PLACE_DETAILS_URL = "https://maps.googleapis.com/maps/api/place/details/json"
