import { Typography } from "@mui/material";
import { useLoginData } from "../../hooks/useSelector";
import { decryptData } from "../../utils/decrypt";

export const Welcome = () => {
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const { userInfo } = useLoginData();
  const decrypt = decryptData(userInfo, secretKey);
  const userName = JSON.parse(decrypt);
  const welcome = `Hi ${userName.name} , Here is your Personal Finance Overview`;
  return <Typography>{welcome}</Typography>;
};
