import styled, { css } from "styled-components";
import optionHomeIcon from "../../assets/icons/option_home.svg";
import optionAdvancedIcon from "../../assets/icons/option_advanced.svg";
import optionSearchIcon from "../../assets/icons/option_search.svg";

const common = css`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  font-style: normal;
  border-radius: 2px;
  font-family: "Montserrat";
  border: 1px solid #e6e9ec;
  background-repeat: no-repeat;
  padding: ${({ searchBtn }) => (searchBtn ? "15px 54px" : "15px")};
  padding-left: ${({ searchBtn }) => (searchBtn ? "78px" : "44px")};
  color: ${({ searchBtn }) => (searchBtn ? "#fff" : "#0D263B")};
  margin-right: ${({ searchBtn }) => (searchBtn ? "0" : "20px")};
  background-color: ${({ searchBtn }) => (searchBtn ? "#0061DF" : "#fff")};
`;

export const OptionWrapper = styled.div`
  padding: 10px 0;
`;

export const OptionMenu = styled.div`
  display: flex;
  position: relative;
  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`;

export const SearchAddresInput = styled.input`
  ${common}
  flex-grow: 1;
  background-image: url("${optionHomeIcon}");
  background-position: left 15px center;
  ::placeholder {
    color: #0d263b;
  }
  @media (max-width: 810px) {
    ::placeholder {
      font-size: 12px;
    }

    @media (max-width: 760px) {
      width: 100%;
      margin-right: 0;
      border: 0;
      border-bottom: 1px solid #e6e9ec;
      margin-bottom: 24px;
      ::placeholder {
        font-size: 14px;
      }
    }
  }
`;

export const AdvancedBtn = styled.button`
  ${common}
  background-image: url("${optionAdvancedIcon}");
  background-position: left 15px center;
  @media (max-width: 760px) {
    width: calc(50% - 10px);
  }
`;

export const SearchBtn = styled.button`
  ${common}
  background-image: url("${optionSearchIcon}");
  background-position: left 54px center;
  @media (max-width: 760px) {
    width: calc(50% - 10px);
    background-position: left 40% center;
  }
  @media (max-width: 610px) {
    background-position: left 35% center;
  }
  @media (max-width: 420px) {
    padding-left: 60px;
    background-position: left 35px center;
  }
`;

// Advanced menu

export const AdvancedMenu = styled.form`
  max-width: 920px;
  position: absolute;
  top: 140%;
  right: 0;
  background-color: #ffffff;
  border-radius: 5px;
  transition: opacity 0.3s ease, pointer_events 0.3s ease;
  pointer-events: ${({ pointer_events }) => pointer_events};
  opacity: ${({ opacity }) => opacity};
  @media (max-width: 760px) {
    top: 120%;
  }
`;

export const InputsWrapper = styled.div`
  padding: 30px;
  padding-bottom: 0;
`;

export const InputTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
  margin-bottom: 10px;
`;

export const InputsGroup = styled.div`
  display: flex;
  :not(:last-child) {
    margin-bottom: 30px;
  }
  :last-child {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  border: 1px solid #e6e9ec;
  padding: 12px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  width: 25%;
  ::placeholder {
    color: #0d263b;
  }
  :not(:last-child) {
    margin-right: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  background: #f6f8f9;
  border-radius: 0px 0px 5px 5px;
  padding: 20px 30px;
  display: flex;
  justify-content: flex-end;
`;

export const FormButton = styled.button`
  padding: 12px 40px;
  background-color: ${({ type }) =>
    type === "submit" ? "#0061DF" : "transparent"};
  color: ${({ type }) => (type === "submit" ? "#FFFFFF" : "#0D263B")};
  border: 1px solid ${({ type }) => (type === "submit" ? "#0061DF" : "#0D263B")};
  border-radius: 2px;
  margin-right: ${({ type }) => (type !== "submit" ? "20px" : "0")};
`;
