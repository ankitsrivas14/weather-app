import styled from "styled-components";

export const ForcastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .5rem 1rem;
  margin-right: .5rem;
  transition: box-shadow .3s ease-in;
  width: 81px;
`;
export const Container = styled.div`
  position: relative;
  margin: .25rem;
  
  &:last-child ${ForcastCard} {
    margin-right:0;
  }
`;
export const RadioInput = styled.input`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;

  &:checked ~ ${ForcastCard} {
    background: #fffdf7;
    box-shadow: 0 0 1px 3px var(--primary);
    transition: box-shadow .3s ease-in;
  }
`;

export const Icon = styled.img`
  margin: .5rem;
  width: 27px;
`;
export const Row = styled.p`
  margin: 0 0 .25rem;
  font-weight: 500;
`;
