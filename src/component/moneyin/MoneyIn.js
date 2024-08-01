import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { mpfKey } from "../../constant/global";
import { tableCellMoneyIn } from "../../constant/tableSectionData";
import { useEdit } from "../../hooks/useEdit";
//   TODO : WORK ON AFTER DATA FIX
export const MoneyIn = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const filterInvesment = filterMPFData(isMPFData, mpfData, mpfKey.MONEYIN);
  return (
    <>
      {isMPFData &&
        filterInvesment.map((mi, index) => {
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
