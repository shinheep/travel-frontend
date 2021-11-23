import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import "./TeamPage.css";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("md")]: {
    margin: "1%",

  },
}));

export default function AutoGridNoWrap() {
  return (
    <Root>
      <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <Paper
          sx={{
            width: {
              xs: 420,
              sm: 500,
              md: 700,
            },
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid justifyContent="center" container wrap="wrap" spacing={2}>
            <Grid item zeroMinWidth>
            <Typography textAlign="center">
                About Travelgram
              </Typography>

              <Typography margin="20px">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                similique. Illo aut sint libero quos expedita dolore optio,
                error sit architecto placeat nulla laudantium ad minus repellat.
                Dolores, porro molestiae!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Typography textAlign="center">Meet The Team</Typography>
        <Paper
          sx={{
            width: {
              xs: 320,
              sm: 400,
              md: 600,
            },
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid justifyContent="center" container wrap="wrap" spacing={2}>
            <Grid item>
              <Typography textAlign="center" padding="5px" margin="5px">
                Orawee Chantravutikorn
              </Typography>
              <Avatar
                sx={{
                  width: {
                    xs: 180, 
                    sm: 250, 
                  },
                  height: {
                    xs: 180, // theme.breakpoints.up('xs')
                    sm: 250, // theme.breakpoints.up('sm')
                  },
                }}
                alt="Orawee Chantravutikorn"
                src="https://res.cloudinary.com/orawee/image/upload/v1634152166/LRG_DSC04871_o04xck.jpg"
              ></Avatar>
            </Grid>
            <Grid item zeroMinWidth>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                similique. Illo aut sint libero quos expedita dolore optio,
                error sit architecto placeat nulla laudantium ad minus repellat.
                Dolores, porro molestiae!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{
            width: {
              xs: 320,
              sm: 400,
              md: 600,
            },
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid justifyContent="center" container wrap="wrap" spacing={2}>
            <Grid item>
              <Typography textAlign="center" padding="5px" margin="5px">
              Alex Delaney
              </Typography>
              <Avatar
                sx={{
                  width: {
                    xs: 180, 
                    sm: 250, 
                  },
                  height: {
                    xs: 180, 
                    sm: 250, 
                  },
                }}
                alt="Alex Delaney"
                src="https://res.cloudinary.com/orawee/image/upload/v1637696028/Screen_Shot_2021-11-23_at_11.33.09_AM_edtp5x.png"
              ></Avatar>
            </Grid>
            <Grid item zeroMinWidth>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                similique. Illo aut sint libero quos expedita dolore optio,
                error sit architecto placeat nulla laudantium ad minus repellat.
                Dolores, porro molestiae!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{
            width: {
              xs: 320,
              sm: 400,
              md: 600,
            },
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid justifyContent="center" container wrap="wrap" spacing={2}>
            <Grid item>
              <Typography textAlign="center" padding="5px" margin="5px">
              Shinhee Park
              </Typography>
              <Avatar
                sx={{
                  width: {
                    xs: 180, 
                    sm: 250, 
                  },
                  height: {
                    xs: 180, 
                    sm: 250, 
                  },
                }}
                alt=""
                src="https://res.cloudinary.com/orawee/image/upload/v1637695723/StudioGhibli/Screen_Shot_2021-11-23_at_11.28.05_AM_v7tfra.png"
              ></Avatar>
            </Grid>
            <Grid item zeroMinWidth>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                similique. Illo aut sint libero quos expedita dolore optio,
                error sit architecto placeat nulla laudantium ad minus repellat.
                Dolores, porro molestiae!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper
          sx={{
            width: {
              xs: 320,
              sm: 400,
              md: 600,
            },
            my: 1,
            mx: "auto",
            p: 2,
          }}
        >
          <Grid justifyContent="center" container wrap="wrap" spacing={2}>
            <Grid item>
              <Typography textAlign="center" padding="5px" margin="5px">
                Daniel Lee
              </Typography>
              <Avatar
                sx={{
                  width: {
                    xs: 180, 
                    sm: 250, 
                  },
                  height: {
                    xs: 180, 
                    sm: 250, 
                  },
                }}
                alt="Daniel Lee"
                src="https://res.cloudinary.com/orawee/image/upload/v1637704503/IMG_4291_so3m4j.jpg"
              ></Avatar>
            </Grid>
            <Grid item zeroMinWidth>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                similique. Illo aut sint libero quos expedita dolore optio,
                error sit architecto placeat nulla laudantium ad minus repellat.
                Dolores, porro molestiae!
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Root>
  );
}

