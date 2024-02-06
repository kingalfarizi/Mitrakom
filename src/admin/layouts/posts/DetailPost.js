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
import { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchdata = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`);
  const data = await response.json();
  return data;
};

function DetailPost() {
  let { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchdata(id),
    refetchIntervalInBackground: 1000,
  });

  // console.log(data);

  const [value, setValue] = useState(data?.data.body);
  const [text, setText] = useState("");

  const [post, setPost] = useState({
    judul: "",
    penulis: "",
    body: "",
    image: "",
  });

  useEffect(() => {
    if (!isLoading) {
      setPost(data.data);
    }
  }, [data]);

  // console.log(process.env.REACT_APP_TINYMCE);

  const handleOnChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(post);
  };
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
                  Edit posts
                </MDTypography>
              </MDBox>

              {isLoading ? (
                <CircularProgress color="inherit" />
              ) : (
                <MDBox pt={3} style={{ padding: 15 }}>
                  <label htmlFor="barang">Image</label>
                  <img
                    src={post.image}
                    id="preview-img"
                    alt="preview"
                    style={{ width: "15rem" }}
                  />
                  <TextField
                    required
                    id="barang"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    type="file"
                    // onChange={handleImgUpload}
                  />

                  <label htmlFor="barang">Judul Post</label>

                  <TextField
                    id="judul"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="judul"
                    value={post.judul}
                    onChange={handleOnChange}
                  />
                  <label htmlFor="barang">Penulis Post</label>

                  <TextField
                    id="penulis"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="penulis"
                    value={post.penulis}
                    onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Isi Post</label>
                  <Editor
                    apiKey={process.env.REACT_APP_TINYMCE}
                    value={post.body}
                    onInit={(evt, editor) => {
                      setText(editor.getContent({ format: "text" }));
                    }}
                    onEditorChange={(newValue, editor) => {
                      setValue(newValue);
                      setPost({
                        ...post,
                        body: editor.getContent({ format: "html" }),
                      });
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
                  <Button
                    variant="contained"
                    style={{ color: "white" }}
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Simpan
                  </Button>
                </MDBox>
              )}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DetailPost;
