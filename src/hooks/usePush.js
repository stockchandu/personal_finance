import { useNavigate } from "react-router-dom";

export const usePush = () => {
  const navigation = useNavigate();
  const goToPath = (path) => {
    switch (path) {
      case "Home":
        navigation("/");
        break;
      case "Liabilities":
        navigation("/liability");
        break;
      case "Investments":
        navigation("/invest");
        break;
      case "Saving(PF+Bank)":
        navigation("/saving");
        break;
      case "Money OutFlow":
        navigation("/money-out");
        break;
      case "Money Inflows":
        navigation("/money-in");
        break;
      default:
        console.warn(`Unknown path: ${path}`);
        break;
    }
  };

  return goToPath
};