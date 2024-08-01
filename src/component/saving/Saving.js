import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { tableCellSaving } from "../../constant/tableSectionData";
import { mpfKey } from "../../constant/global";
import { useEdit } from "../../hooks/useEdit";
export const Saving = () => {
  const edit = useEdit();
  const { mpfData, isMPFData } = useMPFData();
  const saving = filterMPFData(isMPFData, mpfData, mpfKey.SAVING);
  return (
    <>
      {isMPFData &&
        saving.map((saving, index) => {
          return (
            <MPFAccordion title={saving.sectionName} edit={() => edit(saving)}>
              <MPFTable
                tableData={saving}
                tableHeader={tableCellSaving}
                section={mpfKey.SAVING}
              />
            </MPFAccordion>
          );
        })}
    </>
  );
};
