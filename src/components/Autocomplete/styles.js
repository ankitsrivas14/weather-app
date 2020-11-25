import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 1.5rem;
`;

export const LocationIcon = styled.span`
  font-size: 1.25rem;
  display:flex;
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  width: 1.25rem;
  position: absolute;
  left: 1rem; 
`;

export const SearchIcon = styled.button`
  font-size: 1.25rem;
  background: transparent;
  border: none;
  position: absolute;
  right: 1rem;
  margin: 0;
`;

export const Input = styled.input`
  box-shadow: var(--shadow);
  border-radius: 8px;
  border: none;
  display: block;
  height: 2.5rem;
  padding: 1.75rem 1.75rem 1.75rem 3rem;
  font-weight: 500;
  text-transform: capitalize;
  transition: box-shadow .2s ease;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0 0 1px 2px var(--primary)
  }
`;

export const ResultsList = styled.div`
  background: #fff;
    border-radius: 8px;
    box-shadow: var(--shadow);
    position: absolute;
    top: 110%;
    left: 0;
    right: 0;
    z-index: 10;
`;
export const Result = styled.div`
    border-bottom: 1px solid rgba(0,0,0,.1);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .75rem 1.5rem;
    animation: ResultsAnimation .5s;
    text-transform: capitalize;
`;

export const ResultWeather = styled.div`
  display:flex;
  > div {
    display: flex;
    flex-direction: column;
  }
`;
export const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-left: .5rem;
`;
