import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellSaving } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
export const Saving = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const saving = filterMPFData(isMPFData, mpfData, mpfKey.SAVING);
  
  const handleRemove = (saving) => {};

  const handleAdd = (saving) => {
    alert(saving);
  };
  return (
    <>
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
      {isMPFData &&
        saving.map((saving, index) => {
          return (
            <MPFAccordion title={saving.sectionName} edit={() => edit(saving)}>
              <MPFTable
                tableData={saving}
                tableHeader={tableCellSaving}
                section={mpfKey.SAVING}
              />
            </MPFAccordion>
          );
        })}
    </>
  );
};
