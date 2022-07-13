import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

function Layout() {
  return (
    <Box p='0 10px'>
      <Grid 
        container
        direction='column'
        width='620px' 
        height='460px' 
        m='0 auto' 
        border='1px solid #000'
      >
        <Outlet />
      </Grid>
    </Box>
  )
}

export { Layout }