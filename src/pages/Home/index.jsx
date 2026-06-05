import React, { useState } from 'react';
import { moviesData } from '../../data/dados';
import MovieCard from '../../components/MovieCard';
import { HomeContainer, Navbar, Title, NavButton, FilterContainer, FilterButton, Grid, EmptyMessage } from './style';

export default function Home() {
  const [movies, setMovies] = useState(moviesData);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [abaAtiva, setAbaAtiva] = useState('home');

  const handleToggleFavorite = (id) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === id ? { ...movie, favoritado: !movie.favoritado } : movie
      )
    );
  };

  const getFilmesFavoritados = () => {
    if (abaAtiva === 'favoritos') {
      return movies.filter(movie => movie.favoritado);
    }
    
    if (selectedCategory === 'Todos') {
      return movies;
    }
    
    return movies.filter(movie => movie.categoria === selectedCategory);
  };

  const filmesParaExibir = getFilmesFavoritados();

  return (
    <HomeContainer>
      <Navbar>
        <Title>🎬 {abaAtiva === 'home' ? 'Catálogo de Filmes' : 'Meus Favoritos'}</Title>
        <NavButton onClick={() => setAbaAtiva(abaAtiva === 'home' ? 'favoritos' : 'home')}>
          {abaAtiva === 'home' ? 'Ver Favoritos ★' : 'Voltar ao Catálogo'}
        </NavButton>
      </Navbar>
      
      {abaAtiva === 'home' && (
        <FilterContainer>
          {['Todos', 'Ficção Científica', 'Ação', 'Crime'].map(category => (
            <FilterButton
              key={category}
              $active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>
      )}

      <Grid>
        {filmesParaExibir.length > 0 ? (
          filmesParaExibir.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onToggleFavorite={handleToggleFavorite} 
            />
          ))
        ) : (
          <EmptyMessage>
            {abaAtiva === 'favoritos' 
              ? 'Você ainda não favoritou nenhum filme.' 
              : 'Nenhum filme encontrado nesta categoria.'}
          </EmptyMessage>
        )}
      </Grid>
    </HomeContainer>
  );
}
