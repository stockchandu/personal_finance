import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { mpfKey } from "../../constant/global";
import { tableCellMoneyIn } from "../../constant/tableSectionData";
import { useEdit } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
//   TODO : WORK ON AFTER DATA FIX
export const MoneyIn = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const moneyInflow = filterMPFData(isMPFData, mpfData, mpfKey.MONEYIN);
  const handleRemove = (moneyInflow) => {};

  const handleAdd = (moneyInflow) => {
    alert(moneyInflow);
  };
  return (
    <>
     <AddRemove
        label={{ add: "Add Inflow", remove: "Close Inflow" }}
        data={moneyInflow}
        addClk={() => {
          handleAdd(moneyInflow);
        }}
        removeClk={() => {
          handleRemove(moneyInflow);
        }}
        addSX={{ backgroundColor: "#D12F2E"  }}
        removeSX={{ marginLeft: 1, backgroundColor: "#6AA84F" }}
      />
      {isMPFData &&
        moneyInflow.map((mi, index) => {
          return (
            <MPFAccordion title={mi.sectionName}  edit={() => edit(mi)}>
              <MPFTable
                tableData={mi}
                tableHeader={tableCellMoneyIn}
                section={mpfKey.MONEYIN}
              />
            </MPFAccordion>
          );
        })}
    </>
  );
};
