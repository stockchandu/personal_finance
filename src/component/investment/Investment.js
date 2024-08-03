import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellInvestment } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit, useCreate, useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import { StickyBox } from "../common/StickyBox";
import Box from "@mui/material/Box";
export const Investment = () => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const investment = filterMPFData(isMPFData, mpfData, mpfKey.INVESTMENT);

  const handleRemove = (investment) => {
    const data = {
      sectionName: "Investment",
      operation: "delete",
    };
    deleteData(data,investment);
  };

  const handleAdd = () => {
    const data = {
      sectionName: "Investment",
      operation: "create",
    };
    createData(data);
  };

  const handleUpdate = (investment) => {
    const data = {
      sectionName: "Investment",
      operation: "update",
    };
    updateData(investment, data);
  };
  return (
    <>
      <StickyBox>
        <AddRemove
          label={{ add: "Add Investment", remove: "Close Investment" }}
          data={investment}
          addClk={() => {
            handleAdd(investment);
          }}
          removeClk={() => {
            handleRemove(investment);
          }}
          addSX={{ backgroundColor: "#6AA84F" }}
          removeSX={{ marginLeft: 1, backgroundColor: "#D12F2E" }}
        />
      </StickyBox>
      <Box sx={{ marginTop: 8 }}>
        {isMPFData &&
          investment.map((investment, index) => {
            return (
              <MPFAccordion
                title={investment.sectionName}
                edit={() => handleUpdate(investment)}
              >
                <MPFTable
                  tableData={investment}
                  tableHeader={tableCellInvestment}
                  section={mpfKey.INVESTMENT}
                />
              </MPFAccordion>
            );
          })}
      </Box>
    </>
  );
};
