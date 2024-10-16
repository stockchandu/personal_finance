import MPFAccordion from "../common/Accordion";
import MPFTable from "../common/Table";
import { useMPFData } from "../../hooks/useSelector";
import { filterMPFData } from "../../utils/filterMpfData";
import { mpfKey } from "../../constant/global";
import { useEdit, useCreate, useDelete } from "../../hooks/useEdit";
import { AddRemove } from "../common/AddRemove";
import { StickyBox } from "../common/StickyBox";
import Box from "@mui/material/Box";
import { MpfUniversalSkeleton } from "../common/MpfUniversalSkeleton";
import { getMpfUniversalData } from "../../utils/mpfUniversalData";
import { useCallback } from "react";
export const MpfUniversal = ({
  sectionKey,
  addLabel,
  removeLabel,
  bgColor,
}) => {
  const updateData = useEdit();
  const createData = useCreate();
  const deleteData = useDelete();
  const { mpfData, isMPFData } = useMPFData();
  const sectionData = filterMPFData(isMPFData, mpfData, sectionKey);

  const handleRemoveCB = useCallback(
    (data) => {
      const mapper = {
        sectionName: sectionKey,
        operation: "delete",
      };
      deleteData(mapper, data);
    },
    [sectionKey]
  );

  const handleAddCB = () => {
    const mapper = {
      sectionName: sectionKey,
      operation: "create",
    };
    createData(mapper);
  };

  const handleUpdateCB = useCallback(
    (data) => {
      const mapper = {
        sectionName: sectionKey,
        operation: "update",
      };
      updateData(data, mapper);
    },
    [sectionKey]
  );

  const getRowBySection = (row, name) => {
    switch (name) {
      case mpfKey.LIABILITY:
        return getMpfUniversalData(row)[mpfKey.LIABILITY];
      case mpfKey.INVESTMENT:
        return getMpfUniversalData(row)[mpfKey.INVESTMENT];
      case mpfKey.SAVING:
        return getMpfUniversalData(row)[mpfKey.SAVING];
      case mpfKey.MONEYOUT:
        return getMpfUniversalData(row)[mpfKey.MONEYOUT];
      case mpfKey.MONEYIN:
        return getMpfUniversalData(row)[mpfKey.MONEYIN];
      case mpfKey.EARNEDMONEY:
        return getMpfUniversalData(row)[mpfKey.EARNEDMONEY];
      case mpfKey.INSURANCE:
        return getMpfUniversalData(row)[mpfKey.INSURANCE];
      case mpfKey.VEHICLE:
        return getMpfUniversalData(row)[mpfKey.VEHICLE];
      default:
        return [];
    }
  };

  return (
    <>
      {!isMPFData ? (
        <MpfUniversalSkeleton value={1} />
      ) : (
        <>
          <StickyBox>
            <AddRemove
              label={{ add: addLabel, remove: removeLabel }}
              data={sectionData}
              addClk={handleAddCB}
              removeClk={() => {
                handleRemoveCB(sectionData);
              }}
              addSX={{ backgroundColor: bgColor.addBG }}
              removeSX={{ marginLeft: 1, backgroundColor: bgColor.removeBG }}
            />
          </StickyBox>
          <Box sx={{ marginTop: 8 }}>
            {isMPFData &&
              sectionData?.map((data) => {
                console.log('data: ', data);
                return (
                  <MPFAccordion
                    title={data.sectionName}
                    edit={() => handleUpdateCB(data)}
                    key={data?.id}
                    isActive={data.isActive}
                  >
                    <MPFTable data={getRowBySection(data, sectionKey)} />
                  </MPFAccordion>
                );
              })}
          </Box>
        </>
      )}
    </>
  );
};
