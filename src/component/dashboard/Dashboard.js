import  React ,{useEffect, useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { BillList } from '../billList/BillList';
import { apiConfig } from '../../api/axios';
import { Drawer } from '../common/Drawer';
import { AppBar } from '../common/AppBar';
import { mainListItems ,secondaryListItems} from '../../constant/listItems';
import BillEstimateField from '../billEstimateField/BillEstimateField';



export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  
  const [billList,setBillList] = useState([])
  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(()=>{

    const fetchList =async()=>{
        const res =  await apiConfig.get("vusyyvtbtne44")

        setBillList(res.data)

    }

    fetchList()
},[])
  return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            {/* <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton> */}
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Circuit Breakers Analyzer
            </Typography> 
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={true}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {/* <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton> */}
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
           
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          Welcome User Name to the Odisha electry 
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  {/* <Chart /> */}
                  Get estimate of electry bill amount
                  {/* <input placeholder='enter previous units'></input>
                  <input placeholder='enter current units'></input>
                  <button>Get Estimate</button> */}

                  <BillEstimateField/>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                Total Outstanding Bills -  26000
                  {/* <Deposits /> */}
                  <button>Pay Now </button>
                  Note : get 10% + 20% discount
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
              
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {/* <Orders /> */}
                  <BillList billList={billList}/>
                </Paper>
              </Grid>
            </Grid>
            {/* <Copyright sx={{ pt: 4 }} /> */}
          </Container>
        </Box>
      </Box>
  );
}