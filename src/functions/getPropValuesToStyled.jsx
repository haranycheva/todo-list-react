import { colors } from "../constants";

export function getSelected({ selected }) {
    if (!selected) {
      return "solid";
    }
    return "double";
  }
  
  export const getColor = ({ level }) => {
      switch (level) {
        case "hard":
          return colors.LEVEL_ONE;
        case "medium":
          return colors.LEVEL_TWO;
        case "easy":
          return colors.LEVEL_THREE;
        default:
          break;
      }
    };
    export const getComp = ({ status }) => {
      switch (status) {
        case true:
          return colors.COMPLETE;
        case false:
          return "transparent";
        default:
          break;
      }
    };
    export const getButtonColor = ({color}) => {
      return color;
    };
    