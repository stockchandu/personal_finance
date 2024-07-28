import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellMoneyOut } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
export const MoneyOut = () => {
  const { mpfData, isMPFData } = useMPFData();
  const moneyOutFlow = filterMPFData(isMPFData, mpfData, mpfKey.MONEYOUT);
  return (
    <>
      {isMPFData &&
        moneyOutFlow.map((mo, index) => {
          return (
            <MPFAccordion title={mo.sectionName}>
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
