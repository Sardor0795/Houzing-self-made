import styled from "styled-components";

export const CategoryCardWrapper = styled.div`
  width: 280px;
  height: 350px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.65);
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0;
  }
`;

export const CategoryCardImg = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

export const CategoryCardMiniImg = styled.span`
  width: 60px;
  padding-top: 84px;
  background-image: url("${({ minImg }) => minImg}");
  background-repeat: no-repeat;
  background-position: center top;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
