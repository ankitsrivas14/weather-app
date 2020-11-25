import styled from "styled-components";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const Loader = styled.div`
  color: var(--primary);
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  -webkit-animation-delay: -.16s;
  animation-delay: -.16s;
  
  &, &:after, &:before {
    background: var(--primary);
    -webkit-animation: load1 1s ease-in-out infinite;
    animation: load1 1s ease-in-out infinite;
    width: 1em;
    height: 4em;
  }
`;