import styled from "styled-components";

const Text = styled.span`
  font-weight: ${props => props.bold ? 700 : (props.semibold ? 700 : 'inherit')};
  color: ${props => props.faded ? 'var(--grey500)' : 'var(--grey900)'};
  text-transform: ${props => props.capitalize ? 'capitalize' : 'inherit'};
`;

export default Text;