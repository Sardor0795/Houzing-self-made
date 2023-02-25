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
`;

export const SearchAddresInput = styled.input`
  ${common}
  flex-grow: 1;
  background-image: url("${optionHomeIcon}");
  background-position: left 15px center;
  ::placeholder {
    color: #0d263b;
  }
`;

export const AdvancedBtn = styled.button`
  ${common}
  background-image: url("${optionAdvancedIcon}");
  background-position: left 15px center;
`;

export const SearchBtn = styled.button`
  ${common}
  background-image: url("${optionSearchIcon}");
  background-position: left 54px center;
`;
