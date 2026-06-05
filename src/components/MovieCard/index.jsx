import React, { useState } from 'react';
import { CardContainer, CardImage, CardContent, MovieTitle, MovieCategory, FavoriteButton } from './style';

export default function MovieCard({ movie, onToggleFavorite }) {
   return (
    <CardContainer>
      <CardImage src={movie.imagem} alt={movie.nome} />
      <CardContent>
        <MovieTitle>{movie.nome}</MovieTitle>
        <MovieCategory>{movie.categoria}</MovieCategory>
      </CardContent>
      <FavoriteButton 
        $isFavorite={movie.favoritado} 
        onClick={() => onToggleFavorite(movie.id)}
      >
        {movie.favoritado ? '★ Favorito' : '☆ Favoritar'}
      </FavoriteButton>
    </CardContainer>
  );
}
  