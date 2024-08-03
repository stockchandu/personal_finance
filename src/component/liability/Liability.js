import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellLiability } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useCreate, useEdit,useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import Box from "@mui/material/Box";
import { StickyBox } from "../common/StickyBox";


export const Liability = () => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const liability = filterMPFData(isMPFData, mpfData, mpfKey.LIABILITY);

  const handleRemove = (liability) => {
    const data ={
      sectionName : "Liabilities",
      operation:"delete"
    }
    deleteData(data,liability)
  };

  const handleAdd = (liability) => {
    const data ={
      sectionName : "Liabilities",
      operation:"create"
    }
    createData(data)
  };

  const handleUpdate=(liability)=>{
    const data ={
      sectionName : "Liabilities",
      operation:"update"
    }
    updateData(liability,data)
  }
  return (
    <>
      <StickyBox>
        <AddRemove
          label={{ add: "Add Liability", remove: "Close Liability" }}
          data={liability}
          addClk={() => {
            handleAdd(liability);
          }}
          removeClk={() => {
            handleRemove(liability);
          }}
          addSX={{ backgroundColor: "#D12F2E" }}
          removeSX={{ marginLeft: 1, backgroundColor: "#6AA84F" }}
        />
      </StickyBox>
      <Box sx={{ marginTop: 8 }}>
        {isMPFData &&
          liability.map((liability) => (
            <MPFAccordion
              key={liability.sectionName}
              title={liability.sectionName}
              edit={() => handleUpdate(liability)}
            >
              <MPFTable
                tableData={liability}
                tableHeader={tableCellLiability}
                section={mpfKey.LIABILITY}
              />
            </MPFAccordion>
          ))}
      </Box>
    </>
  );
};
