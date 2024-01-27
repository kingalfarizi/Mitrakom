/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "admin/components/MDBox";
import MDTypography from "admin/components/MDTypography";
import MDAvatar from "admin/components/MDAvatar";
import MDBadge from "admin/components/MDBadge";

// Images
import team2 from "admin/assets/images/team-2.jpg";

export default function data() {
  const Author = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
        style={{ width: "10rem" }}
      >
        {description}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Nama Barang", accessor: "nama", align: "left" },
      {
        Header: "deskripsi",
        accessor: "deskripsi",
        align: "left",
      },
      { Header: "harga", accessor: "harga", align: "center" },
      { Header: "kategori", accessor: "kategori", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        nama: <Author image={team2} name="Asus ROG" />,
        deskripsi: (
          <Job description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit corporis ducimus ad provident nesciunt. Consequuntur accusamus officia molestias vero saepe sint dolorum ut?" />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="tersedia"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        harga: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            100.000
          </MDTypography>
        ),
        kategori: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Kategori
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="/admin/barang/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team2} name="Asus ROG" />,
        deskripsi: (
          <Job description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit corporis ducimus ad provident nesciunt. Consequuntur accusamus officia molestias vero saepe sint dolorum ut?" />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="tersedia"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        harga: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            100.000
          </MDTypography>
        ),
        kategori: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Kategori
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="/admin/barang/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        nama: <Author image={team2} name="Asus ROG" />,
        deskripsi: (
          <Job description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit corporis ducimus ad provident nesciunt. Consequuntur accusamus officia molestias vero saepe sint dolorum ut?" />
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="tersedia"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        harga: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            100.000
          </MDTypography>
        ),
        kategori: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Kategori
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="/admin/barang/123"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
