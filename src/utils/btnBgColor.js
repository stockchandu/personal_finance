export const btnBgColor = (operation) => {
    switch (operation) {
      case "create":
        return "#6AA84F";
      case "update":
        return "#3A87B3";
      case "delete":
        return "#D12F2E";
      default:
        break;
    }
  };