import styled from 'styled-components';

export const HomeContainer = styled.div`
  background: linear-gradient(180deg, #2e0854 0%, #000000 100%);
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto 30px auto;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 15px;
`;

export const Title = styled.h1`
  margin: 0;
  color: #fff;
`;

export const NavButton = styled.button`
  padding: 10px 20px;
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #b80710;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap
`;

export const FilterButton = styled.button`
  padding: 8px 16px;
  border: 1px solid #ccc;
  background-color: ${props => props.$active ? '#fff' : 'transparent'};
  color: ${props => props.$active ? '#333' : '#fff'};
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #fff;
    color: #333;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const EmptyMessage = styled.p`
  color: #aaa;
  text-align: center;
  font-size: 1.2rem;
  grid-column: 1 / -1;
  margin-top: 50px;
`;
