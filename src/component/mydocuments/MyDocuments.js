import Box from "@mui/material/Box";
import { StickyBox } from "../common/StickyBox";
import Typography from "@mui/material/Typography";
import {
  documentMapper,
  myDocumentsData,
} from "../../constant/myDocumentsData";
import Paper from "@mui/material/Paper";
import { MpfButton } from "../common/Button";
import { db } from "../../config/db";
import { apiService } from "../../api/apiService";

export const MyDocuments = () => {
  const typoStyle = {
    fontSize: "17px",
    fontWeight: "500",
  };
  const signInUser = async (email, password) => {
    const { data, error } = await apiService.getToken(email, password);

    if (error) {
      console.error("Error during sign in:", error.message);
      return null;
    }

    return data.session.access_token;
  };

  const getPdfUrl = async (name, fileName) => {
    const documentsName = documentMapper[name][fileName];
    if (documentsName) {
      const { data, error } = await apiService.downloadDocument(
        "mpf_private",
        documentsName
      );
      if (error) {
        console.error("Error fetching file URL:", error);
        return null;
      }
      return data.publicUrl;
    }
  };

  const handleDownload = async (name, documents) => {
    const getDocumentUrl = await getPdfUrl(name, documents);
    if (getDocumentUrl) {
      const link = document.createElement("a");
      link.href = getDocumentUrl;
      link.download = documentMapper[name][documents];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };
  return (
    <>
      <StickyBox>
        <h2> All Documents</h2>
      </StickyBox>
      <Box sx={{ marginTop: 10, marginLeft: 2 }}>
        {Object.entries(myDocumentsData).map(([key, value]) => {
          return (
            <Paper sx={{ marginTop: 2, p: 2 }}>
              <Typography sx={typoStyle}> {key}</Typography>
              {value.map((docu) => {
                return (
                  <Paper
                    sx={{
                      marginTop: 1,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    elevation={0}
                  >
                    <Typography sx={typoStyle}>
                      {docu.id} - {docu.title}
                    </Typography>
                    <MpfButton
                      label="DOWNLOAD"
                      sx={{ backgroundColor: "#6AA84F" }}
                      click={() => handleDownload(key, docu.title)}
                    />
                  </Paper>
                );
              })}
            </Paper>
          );
        })}
      </Box>
    </>
  );
};
