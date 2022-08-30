import styled from "@emotion/styled";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  list-style-type: none;
  line-height: 32px;
  background: ${({ theme }) => theme.simple.white};
  box-shadow: ${({ theme }) => `1px 1px 8px 1px ${theme.colors.shadow}`};
  border-radius: 5px;
  margin: 4px 16px;

  button {
    all: unset;
    width: 24px;
    height: 24px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;

    :focus {
      outline: ${({ theme }) => `2px solid ${theme.colors.focused}`};
    }
  }
`;

export const StyledLabel = styled.label`
  display: none;
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  background-color: ${({ theme }) => theme.checkbox.unchecked};
  border: ${({ theme }) => `1px solid ${theme.checkbox.border}`};
  padding: 9px;
  border-radius: 50%;
  display: inline-block;
  position: relative;

  :checked {
    background-color: ${({ theme }) => theme.checkbox.checked};
    border: ${({ theme }) => `1px solid ${theme.checkbox.border}`};
  }

  :checked:after {
    content: "\\2714";
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 3px;
    color: ${({ theme }) => theme.simple.white};
  }

  :focus {
    outline: ${({ theme }) => `2px solid ${theme.colors.focused}`};
  }
`;

export const StyledSpan = styled.p`
  width: 376px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StarButton = styled.button<{ isActivated: boolean }>`
  svg {
    fill: ${({ isActivated, theme }): string =>
      isActivated
        ? `${theme.colors.activated_star}`
        : `${theme.colors.deactivated_star}`};
  }
`;

export const Wrapper = styled.div`
  width: 64px;
  display: flex;
  justify-content: space-between;
`;
