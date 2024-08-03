import { useNavigate } from "react-router-dom";

export const usePush = () => {
  const navigation = useNavigate();
  const goToPath = (path) => {
    console.log('path: ', path);
    switch (path) {
      case "Home":
        navigation("/");
        break;
      case "Liabilities":
        navigation("/liability");
        break;
      case "Investment":
        navigation("/invest");
        break;
      case "Savings(PF+Bank)":
        navigation("/saving");
        break;
      case "Money Outflows":
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