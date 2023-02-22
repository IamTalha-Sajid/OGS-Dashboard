import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import SideBar from './components/SideBar/Sidebar';
import AppRoutes from './routes';
import Header from './components/Header/Header';
import Drawer from '@mui/material/Drawer';

function App() {
  return (
    <Box sx={{ backgroundColor: 'black', height: '100vh', width: '100vw', }}>
      <Box>
        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Header />
            <Box sx={{ overflowY: 'scroll', height: '70vh' }}>
              <AppRoutes />
            </Box>
          </Box>
        </Box>
        <Drawer ></Drawer>
      </Box>
    </Box>
  );
}

export default App;
