import styled from "@emotion/styled";

export const List = styled.ul`
  width: 700px;
  height: 500px;
  overflow: auto;
  padding: 0;
  background: ${({ theme }) => theme.colors.list_background};

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
