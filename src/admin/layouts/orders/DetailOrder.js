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
import { Button, CircularProgress, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

const fetchdata = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`);
  const data = await response.json();
  return data;
};

const updatePost = async (data, id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const hasil = response.json();
  return hasil;
};

function DetailOrder() {
  let { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["order", id],
    queryFn: () => fetchdata(id),
    refetchIntervalInBackground: 1000,
  });


  const [post, setPost] = useState({
    id: "",
    judul: "",
    penulis: "",
    body: "",
    image: "",
  });

  useEffect(() => {
    if (!isLoading) {
      setPost(data.data);
    }
  }, [data, isLoading]);

  // console.log(process.env.REACT_APP_TINYMCE);

  const handleOnChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = (event) => {
      const img = document.getElementById("preview-img");
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const newImages = reader.result;
      setPost({ ...post, image: newImages });
      //   console.log({ newImages });
    };
  };

  const { mutate, isPending } = useMutation({
    mutationKey: "updatePost",
    mutationFn: () => updatePost(post, id),
  });

  const handleSubmit = async () => {
    // console.log(barang);
    mutate(post, {
      onSuccess: async () => {
        alert("Data berhasil diubah");
        navigate("/admin/post");
      },
      onError: (error) => {
        alert("terdapat error: " + error);
      },
    });
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
                  Edit Order
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
                    onChange={handleImgUpload}
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

                  <Button
                    variant="contained"
                    style={{ color: "white" }}
                    color="primary"
                    onClick={handleSubmit}
                    disabled={isPending}
                  >
                    Simpan
                  </Button>

                  {isPending && <CircularProgress color="inherit" />}
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

export default DetailOrder;