import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellMoneyOut } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit, useCreate, useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import { StickyBox } from "../common/StickyBox";
import Box from "@mui/material/Box";
export const MoneyOut = () => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const moneyOutFlow = filterMPFData(isMPFData, mpfData, mpfKey.MONEYOUT);
  const handleRemove = (moneyOutFlow) => {
    const data = {
      sectionName: "MoneyOutflow",
      operation: "delete",
    };
    deleteData(data,moneyOutFlow);
  };

  const handleAdd = () => {
    const data = {
      sectionName: "MoneyOutflow",
      operation: "create",
    };
    createData(data);
  };

  const handleUpdate = (mo) => {
    const data = {
      sectionName: "MoneyOutflow",
      operation: "update",
    };
    updateData(mo, data);
  };
  return (
    <>
      <StickyBox>
        <AddRemove
          label={{ add: "Add Outflow", remove: "Close Outflow" }}
          data={moneyOutFlow}
          addClk={() => {
            handleAdd(moneyOutFlow);
          }}
          removeClk={() => {
            handleRemove(moneyOutFlow);
          }}
          addSX={{ backgroundColor: "#D12F2E" }}
          removeSX={{ marginLeft: 1, backgroundColor: "#6AA84F" }}
        />
      </StickyBox>
      <Box sx={{ marginTop: 8 }}>
        {isMPFData &&
          moneyOutFlow.map((mo, index) => {
            return (
              <MPFAccordion title={mo.sectionName} edit={() => handleUpdate(mo)}>
                <MPFTable
                  tableData={mo}
                  tableHeader={tableCellMoneyOut}
                  section={mpfKey.MONEYOUT}
                />
              </MPFAccordion>
            );
          })}
      </Box>
    </>
  );
};
