import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellInvestment } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
export const Investment = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const investment = filterMPFData(isMPFData, mpfData, mpfKey.INVESTMENT);

  const handleRemove = (investment) => {};

  const handleAdd = (investment) => {
    alert(investment);
  };
  return (
    <>
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
      {isMPFData &&
        investment.map((investment, index) => {
          return (
            <MPFAccordion
              title={investment.sectionName}
              edit={() => edit(investment)}
            >
              <MPFTable
                tableData={investment}
                tableHeader={tableCellInvestment}
                section={mpfKey.INVESTMENT}
              />
            </MPFAccordion>
          );
        })}
    </>
  );
};
