export const hasNonNullValue = (obj) => {
    return Object.values(obj).some((value) => value !== null && value !== "");
  };