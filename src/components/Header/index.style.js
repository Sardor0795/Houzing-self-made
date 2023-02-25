import styled from "styled-components";

export const HeaderWratter = styled.div`
  background-color: #0d263b;
  padding: 14px 0;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  margin-right: ${({ last }) => (!last ? "64px" : 0)};
`;
