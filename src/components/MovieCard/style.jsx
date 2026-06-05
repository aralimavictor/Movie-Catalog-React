import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  color: #fff;
  padding-bottom: 15px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 15px;
  flex-grow: 1;
`;

export const MovieTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 1.2rem;
`;

export const MovieCategory = styled.span`
  background-color: #e50914;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const FavoriteButton = styled.button`
  background-color: ${props => props.$isFavorite ? '#ffc107' : '#555'};
  color: #000;
  border: none;
  padding: 8px 12px;
  margin: 0 15px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
