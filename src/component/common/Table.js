import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import "./style/table.css";

const MPFTable = ({ data }) => {
  const getColorClassName = (item) => {
    if (item.color === "green") {
      return "table__invest--profit-green";
    } else if (item.color === "red") {
      return "table__invest--loss-red";
    } 

    if(item.isExpiry){
      return "table__invest--loss-red";
    }
  };

  const getText =(item)=>{
    if(item.isExpiry){
      return "Expired";
    }
  }

  return (
    <TableContainer component={Paper} elevation={0}>
      <Table>
        <TableBody>
          {data?.map((item,index) => (
            <TableRow key={item.value + index}>
              <TableCell
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>{item.header}</div>
                <div className={getColorClassName(item)}>
                  { getText(item) ? `${item.value} - Expired` : item.value}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MPFTable;
