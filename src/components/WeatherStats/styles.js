import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 3rem;
`;

export const Stat = styled.div`
    background: var(--primary-light);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem .75rem;
    margin-right: 0.5em;
    
    &:last-child {
      margin-right: 0;
    }
`;
