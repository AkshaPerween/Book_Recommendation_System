import React, { useState } from 'react';
import { getRecommendations } from './api';
import SearchForm from './components/SearchForm';
import BookGallery from './components/BookGallery';
import './App.css';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query, category, tone) => {
    setIsLoading(true);
    try {
      const results = await getRecommendations(query, category, tone);
      setRecommendations(results);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Semantic Book Recommender</h1>
      <SearchForm onSubmit={handleSearch} isLoading={isLoading} />
      <BookGallery recommendations={recommendations} />
    </div>
  );
}

export default App;