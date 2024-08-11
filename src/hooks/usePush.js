import { useNavigate } from "react-router-dom";

export const usePush = () => {
  const navigation = useNavigate();
  const goToPath = (path) => {
    switch (path) {
      case "Overview":
        navigation("/");
        break;
      case "Liabilities":
        navigation("/liability");
        break;
      case "Investment":
        navigation("/invest");
        break;
      case "Savings":
        navigation("/saving");
        break;
      case "Money Outflows":
        navigation("/money-out");
        break;
      case "Money Inflows":
        navigation("/money-in");
        break;
      case "Earned Money":
        navigation("/earned-money");
        break;
      case "Insurance":
        navigation("/insurance");
        break;
      case "Money Rules":
        navigation("/money-rule");
        break;
      case "Vehicle Details":
        navigation("/vehicles");
        break;
      case "Documents":
        navigation("/documents");
        break;

      default:
        console.warn(`Unknown path: ${path}`);
        break;
    }
  };

  return goToPath;
};
