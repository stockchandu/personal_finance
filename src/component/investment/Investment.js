import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellInvestment } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit } from "../../hooks/useEdit";

export const Investment = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const investment = filterMPFData(isMPFData, mpfData, mpfKey.INVESTMENT);
  return (
    <>
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
