/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "admin/components/MDBox";
import MDTypography from "admin/components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "admin/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "admin/examples/Navbars/DashboardNavbar";
import Footer from "admin/examples/Footer";
import { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button } from "@mui/material";

function Tables() {
  const [value, setValue] = useState("<p>Silakan menambahkan post baru</p>");
  const [text, setText] = useState("");

  console.log(process.env.REACT_APP_TINYMCE);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Tambah posts
                </MDTypography>
              </MDBox>
              <MDBox pt={3} style={{ padding: 15 }}>
                <Editor
                  apiKey={process.env.REACT_APP_TINYMCE}
                  value={value}
                  onInit={(evt, editor) => {
                    setText(editor.getContent({ format: "text" }));
                  }}
                  onEditorChange={(newValue, editor) => {
                    setValue(newValue);
                    setText(editor.getContent({ format: "html" }));
                  }}
                  init={{
                    height: 400,
                    menubar: false,
                    plugins:
                      "mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss",
                    toolbar:
                      "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
                {/* <pre>{text}</pre> */}
                <Button variant="contained" style={{color:'white'}} color="primary">
                  Simpan
                </Button>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
