import { Button, Card, Grid, TextField } from "@mui/material";
import MDBox from "admin/components/MDBox";
import MDTypography from "admin/components/MDTypography";
import Footer from "admin/examples/Footer";
import DashboardLayout from "admin/examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "admin/examples/Navbars/DashboardNavbar";
import React, { useState } from "react";

const TambahBarang = () => {
  const [base64Images, setBase64Images] = useState("");

  const [barang, setBarang] = useState({
    nama: "",
    deskripsi: "",
    harga: "",
    kategori: "",
    image: "",
  });

  const handleOnChange = (e) => {
    setBarang({ ...barang, [e.target.name]: e.target.value });
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
      setBase64Images(newImages);
      setBarang({ ...barang, image: newImages });
      //   console.log({ newImages });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ barang });
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
                  Tambah Barang
                </MDTypography>
              </MDBox>
              <MDBox pt={3} style={{ padding: 15 }}>
                {/* <FormControl> */}

                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <label htmlFor="barang">Image</label>
                  <img
                    src=""
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

                  <label htmlFor="barang">Nama Barang</label>
                  <TextField
                    id="barang"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={barang.nama}
                    name="nama"
                    onChange={handleOnChange}
                  />

                  <label htmlFor="deskripsi">Deskripsi</label>
                  <TextField
                    id="deskripsi"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    multiline
                    name="deskripsi"
                    value={barang.deskripsi}
                    onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Harga Barang</label>
                  <TextField
                    id="barang"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="harga"
                    value={barang.harga}
                    onChange={handleOnChange}
                  />

                  <label htmlFor="barang">Kategori Barang</label>
                  <TextField
                    id="barang"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    name="kategori"
                    onChange={handleOnChange}
                    value={barang.kategori}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    style={{ color: "black" }}
                  >
                    Submit
                  </Button>
                </form>
                {/* </FormControl> */}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
};

export default TambahBarang;
