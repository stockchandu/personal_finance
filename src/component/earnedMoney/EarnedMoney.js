import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellEarnedMoney } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit, useCreate, useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import { StickyBox } from "../common/StickyBox";
import Box from "@mui/material/Box";
export const EarnedMoney = () => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const earnedMoney = filterMPFData(isMPFData, mpfData, mpfKey.EARNEDMONEY);

  const handleRemove = (earnedMoney) => {
    const data = {
      sectionName: "EarnedMoney",
      operation: "delete",
    };
    deleteData(data,earnedMoney);
  };

  const handleAdd = () => {
    const data = {
      sectionName: "EarnedMoney",
      operation: "create",
    };
    createData(data);
  };

  const handleUpdate = (earnedMoney) => {
    const data = {
      sectionName: "EarnedMoney",
      operation: "update",
    };
    updateData(earnedMoney, data);
  };
  return (
    <>
      <StickyBox>
        <AddRemove
          label={{ add: "Add Income Source", remove: "Close Income Source" }}
          data={earnedMoney}
          addClk={() => {
            handleAdd(earnedMoney);
          }}
          removeClk={() => {
            handleRemove(earnedMoney);
          }}
          addSX={{ backgroundColor: "#6AA84F" }}
          removeSX={{ marginLeft: 1, backgroundColor: "#D12F2E" }}
        />
      </StickyBox>
      <Box sx={{ marginTop: 8 }}>
        {isMPFData &&
            earnedMoney.map((em, index) => {
            return (
              <MPFAccordion
                title={em.sectionName}
                edit={() => handleUpdate(em)}
              >
                <MPFTable
                  tableData={em}
                  tableHeader={tableCellEarnedMoney}
                  section={mpfKey.EARNEDMONEY}
                />
              </MPFAccordion>
            );
          })}
      </Box>
    </>
  );
};
