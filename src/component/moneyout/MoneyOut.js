import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellMoneyOut } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
export const MoneyOut = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const moneyOutFlow = filterMPFData(isMPFData, mpfData, mpfKey.MONEYOUT);
  const handleRemove = (moneyOutFlow) => {};

  const handleAdd = (moneyOutFlow) => {
    alert(moneyOutFlow);
  };
  return (
    <>
     <AddRemove
        label={{ add: "Add Outflow", remove: "Close Outflow" }}
        data={moneyOutFlow}
        addClk={() => {
          handleAdd(moneyOutFlow);
        }}
        removeClk={() => {
          handleRemove(moneyOutFlow);
        }}
        addSX={{ backgroundColor: "#D12F2E"  }}
        removeSX={{ marginLeft: 1, backgroundColor: "#6AA84F" }}
      />
      {isMPFData &&
        moneyOutFlow.map((mo, index) => {
          return (
            <MPFAccordion title={mo.sectionName} edit={() => edit(mo)}>
              <MPFTable
                tableData={mo}
                tableHeader={tableCellMoneyOut}
                section={mpfKey.MONEYOUT}
              />
            </MPFAccordion>
          );
        })}
    </>
  );
};
