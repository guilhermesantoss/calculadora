import styled from 'styled-components';

export const ButtonStyled = styled.button`
  font-size: 1.4em;
  background-color: var(--bg-button);
  border: none;
  border-right: var(--border-button);
  border-bottom: var(--border-button);
  outline: none;

  &:active {
    background-color: #ccc;
  }

  &.double {
    grid-column: span 2;
  }

  &.triple {
    grid-column: span 3;
  }

  &.operation {
    background-color: #fa8321;
    color: #fff;

    &:active {
      background-color: #fa8321cc;
    }
  }
`;
