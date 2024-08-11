import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Grid from "@mui/material/Grid";

export const HomeSkeleton =()=>{
    return (
        <>
        <Grid item xs={12} md={4} lg={4} mb={2}>
          <Skeleton count={1} height={300} />
        </Grid>
        <Grid container spacing={2}>
          {[1, 2, 4, 5, 6].map((section) => {
            return (
              <>
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  key={section}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  <Skeleton count={1} height={300} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </>
    )
}