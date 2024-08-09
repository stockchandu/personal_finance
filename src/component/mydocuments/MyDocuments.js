import Box from "@mui/material/Box";
import { StickyBox } from "../common/StickyBox";
import Typography from "@mui/material/Typography";
import { myDocumentsData } from "../../constant/myDocumentsData";
import Paper from "@mui/material/Paper";
import { MpfButton } from "../common/Button";
import { db } from "../../config/db";


export const MyDocuments = () => {
  const typoStyle = {
    fontSize: "17px",
    fontWeight: "500",
    // marginTop: 3,
  };

  const getPdfUrl = async (bucketName, fileName) => {
    const { data, error } = await db
    .storage
    .from("mpf")
    .getPublicUrl("chandan_kumar_malik_aadhar.pdf");
    
    console.log('getPdfUrl: ', data);
  
    if (error) {
      console.error('Error fetching file URL:', error);
      return null;
    }
    return data.publicUrl;
  };
  

  const handleDownload = async(name, documents) => {
    const getDocumentUrl = await getPdfUrl()
    console.log('getDocumentUrl: ', getDocumentUrl);
    if (getDocumentUrl) {
        const link = document.createElement('a');
      link.href = getDocumentUrl;
      link.download = "chandan_kumar_malik_aadhar.pdf" 
      link.target = '_blank'; // Optional: Open in a new tab; remove if not needed
      link.rel = 'noopener noreferrer'; // Security best practice

      // Append the link to the body
      document.body.appendChild(link);
      link.click();

      // Clean up the DOM
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
                {
                  /* return <Typography sx={typoStyle}>{docu.title}</Typography>; */
                }
                return (
                  <Paper
                    sx={{
                      marginTop: 1,
                      // marginLeft: 2,
                      // border: "1px solid grey", // Adding a border
                      display: "flex", // Ensuring the Box is a flex container
                      justifyContent: "space-between",
                      alignItems: "center",
                      // padding:1
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
