import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellInsurance } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit, useCreate, useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import { StickyBox } from "../common/StickyBox";
import Box from "@mui/material/Box";
export const Insurance = () => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const insurance = filterMPFData(isMPFData, mpfData, mpfKey.INSURANCE);

  const handleRemove = (insurance) => {
    const data = {
      sectionName: "Insurance",
      operation: "delete",
    };
    deleteData(data,insurance);
  };

  const handleAdd = () => {
    const data = {
      sectionName: "Insurance",
      operation: "create",
    };
    createData(data);
  };

  const handleUpdate = (insurance) => {
    const data = {
      sectionName: "Insurance",
      operation: "update",
    };
    updateData(insurance, data);
  };
  return (
    <>
      <StickyBox>
        <AddRemove
          label={{ add: "Add Insurance", remove: "Close Insurance" }}
          data={insurance}
          addClk={() => {
            handleAdd(insurance);
          }}
          removeClk={() => {
            handleRemove(insurance);
          }}
          addSX={{ backgroundColor: "#6AA84F" }}
          removeSX={{ marginLeft: 1, backgroundColor: "#D12F2E" }}
        />
      </StickyBox>
      <Box sx={{ marginTop: 8 }}>
        {isMPFData &&
            insurance.map((ins, index) => {
            return (
              <MPFAccordion
                title={ins.sectionName}
                edit={() => handleUpdate(ins)}
              >
                <MPFTable
                  tableData={ins}
                  tableHeader={tableCellInsurance}
                  section={mpfKey.INSURANCE}
                />
              </MPFAccordion>
            );
          })}
      </Box>
    </>
  );
};
