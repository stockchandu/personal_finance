import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellLiability } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit } from "../../hooks/useEdit";
export const Liability = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const liability = filterMPFData(isMPFData, mpfData, mpfKey.LIABILITY);
  return (
    <>
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
