import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellInvestment } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";

export const Investment = () => {
  const { mpfData, isMPFData } = useMPFData();
  const investment = filterMPFData(isMPFData, mpfData, mpfKey.INVESTMENT);
  return (
    <>
      {isMPFData &&
        investment.map((investment, index) => {
          return (
            <MPFAccordion title={investment.sectionName}>
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