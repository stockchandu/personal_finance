import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { mpfKey } from "../../constant/global";
import { tableCellMoneyIn } from "../../constant/tableSectionData";
import { useEdit, useCreate, useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import { StickyBox } from "../common/StickyBox";
import Box from "@mui/material/Box";
//   TODO : WORK ON AFTER DATA FIX
export const MoneyIn = () => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const moneyInflow = filterMPFData(isMPFData, mpfData, mpfKey.MONEYIN);

  const handleRemove = (moneyInflow) => {
    const data = {
      sectionName: "MoneyInflow",
      operation: "delete",
    };
    deleteData(data,moneyInflow);
  };

  const handleAdd = () => {
    const data = {
      sectionName: "MoneyInflow",
      operation: "create",
    };
    createData(data);
  };

  const handleUpdate = (mi) => {
    const data = {
      sectionName: "MoneyInflow",
      operation: "update",
    };
    updateData(mi, data);
  };
  return (
    <>
      <StickyBox>
        <AddRemove
          label={{ add: "Add Inflow", remove: "Close Inflow" }}
          data={moneyInflow}
          addClk={() => {
            handleAdd(moneyInflow);
          }}
          removeClk={() => {
            handleRemove(moneyInflow);
          }}
          addSX={{ backgroundColor: "#D12F2E" }}
          removeSX={{ marginLeft: 1, backgroundColor: "#6AA84F" }}
        />
      </StickyBox>
      <Box sx={{ marginTop: 8 }}>
        {isMPFData &&
          moneyInflow.map((mi, index) => {
            return (
              <MPFAccordion title={mi.sectionName} edit={() => handleUpdate(mi)}>
                <MPFTable
                  tableData={mi}
                  tableHeader={tableCellMoneyIn}
                  section={mpfKey.MONEYIN}
                />
              </MPFAccordion>
            );
          })}
      </Box>
    </>
  );
};
