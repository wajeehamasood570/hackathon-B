import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { fbGet } from "../../config/FirebaseSetup/firebaseMethods";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Button, Modal, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import LMSelect from "../../components/LMSelect";
import Person2Icon from "@mui/icons-material/Person2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Acceptor = () => {
  const [allDonor, setallDonor] = useState<any>([]);
  const [loader, setLoader] = useState<any>(false);
  const roleOptions = ["All", "A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  const [item, setItem] = useState<any>([]);

  const GetDonors = () => {
    setLoader(true);
    console.log(allDonor);
    fbGet("donor")
      .then((res: any) => {
        console.log(res);
        setLoader(false);
        setallDonor([...res]);
      })
      .catch((err) => {
        setLoader(true);
        console.log(err);
      });
  };

  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>(''); // Specify the type as string
  const [filteredDonors, setFilteredDonors] = useState<any>([]);

  // const filterItem = (categItem: any) => {
  //   console.log(categItem);
  //   const updatedItem = allDonor?.filter((curElem: any) => {
  //     return curElem.bloodgroup === categItem;
  //   });
  //   console.log(updatedItem);
  //   setItem(updatedItem);
  // };

  const filterItem = (bloodGroup: string) => {
    console.log(bloodGroup);
    setSelectedBloodGroup(bloodGroup);

    // Define an array of allowed blood groups based on the selected filter
    let allowedBloodGroups: string[] = [];

    if (bloodGroup === "All") {
      allowedBloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    } else if (bloodGroup === "A+" || bloodGroup === "A-") {
      allowedBloodGroups = ["A+", "A-", "AB+", "AB-"];
    } else if (bloodGroup === "O+" || bloodGroup === "O-") {
      allowedBloodGroups = ["O+", "O-"];
    }

    console.log(allowedBloodGroups);

    // Filter the donors based on the selected blood group
    const filteredDonors = allDonor?.filter((donor: any) =>
      allowedBloodGroups.includes(donor.bloodgroup)
    );
    console.log(filteredDonors);

    setItem(filteredDonors);
  };

  useEffect(() => {
    GetDonors();
  }, []);

  return (
    <Box
      sx={{ height: "100vh", background: "#f6f5f7" }}
      className="justify-content-center align-items-center flex-column "
    >
      <Container className="pt-5">
        <h3 className="text-center">Search Donor Of your Blood Group</h3>
        <nav className="navbar   justify-content-center align-items-center flex-row">
          <form className="form-inline  d-flex justify-content-center align-items-center flex-row">
            <Form.Group style={{ width: "200px", marginRight: "15px" }}>
              <LMSelect
                label="Blood Group"
                name="role"
                options={roleOptions}
                onChange={(e: any) => filterItem(e)}
              />
            </Form.Group>

            {/* <button
              className="btn btn-outline-success my-2 my-sm-0"
              
            >
              Find Donor
            </button> */}
          </form>
        </nav>

        <div>
          <>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Profile</StyledTableCell>
                    <StyledTableCell align="center">Donor Name</StyledTableCell>
                    <StyledTableCell align="center">Age</StyledTableCell>
                    <StyledTableCell align="center">
                      Blood Group
                    </StyledTableCell>
                    <StyledTableCell align="center">Gender</StyledTableCell>
                  </TableRow>
                </TableHead>

                {loader ? (
                  <h2>
                    Loading <br /> No data found
                  </h2>
                ) : (
                  <>
                    {item.map((x: any, i: any) => {
                      return (
                        <>
                          <TableBody>
                            <StyledTableCell align="center">
                              <Person2Icon />
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {x.username}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {x.age}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {x.bloodgroup}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              {x.gender}
                            </StyledTableCell>

                            {/* <StyledTableCell align="center">{x.body}</StyledTableCell> */}
                          </TableBody>
                        </>
                      );
                    })}
                  </>
                )}
              </Table>
            </TableContainer>
          </>
        </div>
      </Container>
    </Box>
  );
};

export default Acceptor;
