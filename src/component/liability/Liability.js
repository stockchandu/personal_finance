import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellLiability } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";

export const Liability = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const liability = filterMPFData(isMPFData, mpfData, mpfKey.LIABILITY);

  const handleRemove = (liability) => {};

  const handleAdd = (liability) => {
    alert(liability);
  };
  return (
    <>
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
      {isMPFData &&
        liability.map((liability) => {
          return (
            <MPFAccordion
              title={liability.sectionName}
              edit={() => edit(liability)}
            >
              <MPFTable
                tableData={liability}
                tableHeader={tableCellLiability}
                section={mpfKey.LIABILITY}
              />
            </MPFAccordion>
          );
        })}
    </>
  );
};
