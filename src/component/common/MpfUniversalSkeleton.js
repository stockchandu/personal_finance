import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Box from "@mui/material/Box";

export const MpfUniversalSkeleton = ({ value }) => {
  return (
    <>
        {[1, 2, 3, 4, 5, 6].map((section) => {
          return (
            <Box sx={{ marginTop: 2 }} key={section}>
              <Skeleton count={value} height={400} />
            </Box>
          );
        })}
    </>
  );
};
