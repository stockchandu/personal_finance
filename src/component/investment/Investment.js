import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellInvestment } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { openDialog } from "../../store/dialog/dialogSlicer";
import { useDispatch } from "react-redux";
export const Investment = () => {
  const dispatch = useDispatch();
  const { mpfData, isMPFData } = useMPFData();
  const investment = filterMPFData(isMPFData, mpfData, mpfKey.INVESTMENT);
  const handleOpenDialog = (investment) => {
    dispatch(openDialog({ isDialog: true ,dialogData:investment}));
  };
  return (
    <>
      {isMPFData &&
        investment.map((investment, index) => {
          return (
            <MPFAccordion
              title={investment.sectionName}
              edit={() => handleOpenDialog(investment)}
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
