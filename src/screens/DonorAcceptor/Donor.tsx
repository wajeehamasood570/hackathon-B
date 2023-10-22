import { Box, Button, Grid, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Form from "react-bootstrap/Form";
import LMInput from "../../components/LMInput";
import LMSelect from "../../components/LMSelect";
import { fbAdd, fbSigup } from "../../config/FirebaseSetup/firebaseMethods";
import blooddonation2 from "../../assests/Blooddonation2.png";
import LMButton from "../../components/LMButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Donor = () => {
  const [model, setModel] = useState<any>({});
  const navigate = useNavigate();

  const roleOptions = ["A+", "A-", "O", "AB"];

  const gender = ["Male", "Female"];

  const fillModel = (key: any, val: any) => {
    model[key] = val;
    setModel({ ...model });
  };

  const donoruser = () => {
    console.log(model);
    fbAdd("donor", model)
            .then((res: any) => {
                console.log(res);
                // setFormData({""});
            })
            .catch((err) => {
                console.log(err);
            });
    
  };

  //   const signupUser = () => {
  //     console.log(model);
  //     navigate(`/login`);
  //   }
  return (
    <>
      <Box
        sx={{ height: "100vh", background: "#f6f5f7" }}
        className="d-flex  justify-content-center align-items-center"
      >
        <Container>
          <Grid container spacing={2}>
            <Grid
              className="d-flex  justify-content-center align-items-center flex-column"
              xs={6}
            >
              <h1 className="text-center mb-5">
                Donate Your Blood And Save Your Life
              </h1>
              <div>
                <a href="#form">
                  <LMButton label="Donate Now" />
                </a>
              </div>
            </Grid>

            <Grid xs={6}>
              <img width="100%" src={blooddonation2} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <section id="form">
        <Form className="form-style p-3">
          <h2 style={{ fontSize: "24px" }}>Regitser Yourself as a Donor</h2>
          <Form.Group style={{ width: "50%" }}>
            <LMInput
              label="User Name"
              type="text"
              onChange={(e: any) => fillModel("username", e)}
            />
          </Form.Group>
          <Form.Group style={{ width: "50%" }}>
            <LMInput
              label="Email"
              type="email"
              onChange={(e: any) => fillModel("email", e)}
            />
          </Form.Group>

          <Form.Group style={{ width: "50%" }}>
            <LMInput
              label="Contact Number"
              type="number"
              onChange={(e: any) => fillModel("number", e)}
            />
          </Form.Group>
          <Form.Group style={{ width: "50%" }}>
            <LMInput
              label="Age"
              type="number"
              onChange={(e: any) => fillModel("age", e)}
            />
          </Form.Group>

          <Form.Group style={{ width: "50%" }}>
            <LMSelect
              label="Gender"
              name="gender"
              options={gender}
              onChange={(e: any) => fillModel("gender", e)}
            />
          </Form.Group>

          <Form.Group style={{ width: "50%" }}>
            <LMSelect
              label="Blood Group"
              name="role"
              options={roleOptions}
              onChange={(e: any) => fillModel("bloodgroup", e)}
            />
          </Form.Group>

          <Form.Group style={{ width: "50%" }}>
            <LMInput
              label="Address"
              type="address"
              onChange={(e: any) => fillModel("address", e)}
            />
          </Form.Group>

          <Form.Group style={{ width: "50%" }}>
            <LMInput
              label="Health Issues"
              type="text"
              onChange={(e: any) => fillModel("healthissues", e)}
            />
          </Form.Group>
          <Button
            variant="contained"
            className="bg-danger my-5 "
            style={{ width: "30%" }}
            onClick={() => donoruser()}
          >
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
};

export default Donor;
