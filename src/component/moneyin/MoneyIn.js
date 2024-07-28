import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { mpfKey } from "../../constant/global";
import { tableCellMoneyIn } from "../../constant/tableSectionData";
//   TODO : WORK ON AFTER DATA FIX
export const MoneyIn = () => {
  const { mpfData, isMPFData } = useMPFData();
  const filterInvesment = filterMPFData(isMPFData, mpfData, mpfKey.MONEYIN);
  return (
    <>
      {isMPFData &&
        filterInvesment.map((mi, index) => {
          return (
            <MPFAccordion title={mi.sectionName}>
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
