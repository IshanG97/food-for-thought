# Food for Thought

**Food for Thought - Anthropic Hackathon 2023**

**Inspiration**

People with allergies and food intolerances struggle everyday to find restaurant options that suit them. We were inspired to create an app that makes dining out easier and more accessible for everyone. We wanted to build a tool that provides more options, clarity, and convenience around finding and booking restaurants while accounting for natural language requests about food preferences. The title ‘Food for Thought’ highlights the ease of finding relevant food options with natural language, powered by Claude by Anthropic.



**What We Learned**

Through building Food for Thought, we learned how to:

-Create an intuitive Google Maps-based UI with location search and click capabilities. This is dynamic and not hard-coded.

-Integrate seamless speech-to text phone call booking workflow with Claude's conversational API.

-Craft natural dialogue for our chatbot to field food allergy questions and dining preferences.


**How We Built It**

We built Food for Thought using:


-Google Maps APIs to find and interact with restaurants near the user.

-Claude's AI platform for the conversational booking agent and phone SMS notifications.

-Whisper API for speech to text transcription - output reacts with Claude LLM.

-React Native/Streamlit/NextJS for the UI prototyping.

**Challenges We Faced**
-Tried to build a simpler UI with streamlit, but struggled with integrating functions from the Google Maps API.

-Connecting location coordinates in JSON with backend data in ChromaDB.

-Connecting different elements of the vector DB, UI and backend LLM features.

-Integrating the backend phone-calling agent with the front end maps UI.

**Summary**
We think our idea has potential for real-world value and impact, in an age of increasing user requests about food allergen information, and enhanced need for personalised diet and food recommendations. The conversational booking agents dramatically simplify the reservation process for people with dietary limitations and also ease the burden for restaurant staff that have to continually deal with repetitive user queries. With a focus on increasing accessibility for food and health information, we successfully built components that allow users to easily search, discover, and book restaurants on-the-go. With in-built conversational booking agents to take individual preferences into account, food-for-thought dramatically simplifies the reservation process for people with dietary limitations. 

**Contributors**
Ishan Godawatta, Amine Amor, Ananya Bhalla, Javid Lakha
