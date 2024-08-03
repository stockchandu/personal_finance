import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellSaving } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit, useCreate, useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import { StickyBox } from "../common/StickyBox";
import Box from "@mui/material/Box";
export const Saving = () => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const saving = filterMPFData(isMPFData, mpfData, mpfKey.SAVING);
  const handleRemove = (saving) => {
    const data = {
      sectionName: "Savings",
      operation: "delete",
    };
    deleteData(data,saving);
  };

  const handleAdd = () => {
    const data = {
      sectionName: "Savings",
      operation: "create",
    };
    createData(data);
  };

  const handleUpdate = (saving) => {
    const data = {
      sectionName: "Savings",
      operation: "update",
    };
    updateData(saving, data);
  };
  return (
    <>
      <StickyBox>
        <AddRemove
          label={{ add: "Add Saving", remove: "Close Saving" }}
          data={saving}
          addClk={() => {
            handleAdd(saving);
          }}
          removeClk={() => {
            handleRemove(saving);
          }}
          addSX={{ backgroundColor: "#6AA84F" }}
          removeSX={{ marginLeft: 1, backgroundColor: "#D12F2E" }}
        />
      </StickyBox>
      <Box sx={{ marginTop: 8 }}>
        {isMPFData &&
          saving.map((saving, index) => {
            return (
              <MPFAccordion
                title={saving.sectionName}
                edit={() => handleUpdate(saving)}
              >
                <MPFTable
                  tableData={saving}
                  tableHeader={tableCellSaving}
                  section={mpfKey.SAVING}
                />
              </MPFAccordion>
            );
          })}
      </Box>
    </>
  );
};
