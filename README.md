# Book Recommendation System

![Screenshot 2025-05-03 022652](https://github.com/user-attachments/assets/03d879cb-0a35-4e18-ac88-0699695ad1f2)

Our Book Recommender System is designed to help users discover books that align with their personal preferences and emotions. By analyzing the user’s input description, selected category (e.g., fiction, non-fiction), and emotional tone, the system intelligently suggests books that best match the reader’s intent. Leveraging Natural Language Processing (NLP) and sentiment analysis, this personalized approach enhances the reading experience and simplifies book discovery in an ever-growing literary landscape.

# Features
- **Data Collection & Preparation**: Collected and cleaned book data (titles, descriptions, genres) using Python and Pandas to create a reliable dataset.

- **Semantic Encoding**: Converted book descriptions into vector embeddings using pre-trained Hugging Face models and stored them in ChromaDB for fast retrieval.

- **Recommendation Engine**: Used vector similarity search to match user input with book embeddings and return the most relevant recommendations.

- **Advanced Personalization**: Applied zero-shot classification and sentiment analysis with LLMs to categorize books and match user mood for more personalized suggestions.

- **User Interface**: Built an interactive React-based frontend connected to a FastAPI backend for real-time book recommendations based on user inputs.
