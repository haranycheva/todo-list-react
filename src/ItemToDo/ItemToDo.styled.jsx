import { getButtonColor, getColor, getComp, getSelected } from "../functions/getPropValuesToStyled";
import { Link } from "react-router-dom";
import styled from "styled-components";


  export const Item = styled.li`
    position: relative;
    width: calc((100% - 150px) / 3);
    padding: 10px;
    border: 4px ${getSelected} ${getColor};
    margin-bottom: 10px;
    background-color: ${getComp};
  `;
  
  export const Title = styled(Link)`
    font-size: 18px;
    font-style: italic;
    font-weight: 700;
    text-decoration: none;
    color: #0f0004
  `;
  
  export const Text = styled.p`
    font-size: 14px;
    color: grey;
  `;
  export const Level = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 65px;
    height: 25px;
    border: 1px solid black;
  `;
  
  export const Button = styled.button`
  margin-top: 10px;
    padding: 10px;
    border: transparent;
    background-color: ${getButtonColor};
    color: #fff;
  `;