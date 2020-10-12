import styled from "styled-components";

export const ActionButton = styled.button`
  height: 32px;
  min-width: 5rem;
  border: none;
  line-height: 1rem;
  align-items: center;
  display: flex;
  flex: 1 0;
  font-weight: 600;
  font-size: 0.9375rem;
  justify-content: center;
  position: relative;
  text-decoration: none;
  padding: 0 2px;
  transition: 400ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;
  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  color: var(--buttonTextColor);
  outline: 0;
  margin-right: 8px;

  &:hover {
    background-color: var(--elementHover);
  }

  span {
    font-size: 0.9rem;
  }
`;
