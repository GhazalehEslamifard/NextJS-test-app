import styled from "@emotion/styled";

import { Filter } from "../../types";

export const List = styled.ul`
  width: 700px;
  height: 500px;
  overflow: auto;
  padding: 0;
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 768px) {
    width: 600px;
  }

  @media (max-width: 600px) {
    width: 500px;
  }

  @media (max-width: 480px) {
    width: 400px;
  }
`;

const Button = styled.button`
  all: unset;
  height: 32px;
  color: ${({ theme }) => theme.simple.white};
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  margin-left: 8px;

  :focus {
    outline: ${({ theme }) => `2px solid ${theme.colors.focused}`};
  }
`;

export const DeleteButton = styled(Button)`
  width: 104px;
  background: ${({ theme }) => theme.button.delete};

  :disabled {
    background: ${({ theme }) => theme.button.delete};
    opacity: 0.3;
  }
`;

export const FilterButton = styled(Button)<{ filter: Filter }>`
  width: 128px;
  background: ${({ filter, theme }) =>
    filter === Filter.All
      ? theme.button.filter.all
      : theme.button.filter.important};
`;

export const ActionsWrapper = styled.div`
  width: fit-content;
  padding: 2px;

  a {
    all: unset;
    color: ${({ theme }) => theme.colors.focused};
    margin-right: 16px;
    padding: 4px;
    border-radius: 4px;

    :focus {
      outline: ${({ theme }) => `2px solid ${theme.colors.focused}`};
    }
  }
`;
