// components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Sola yaslı başlık */}
        <Typography variant="h6" component="div">
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            MeCourse
          </Link>
        </Typography>

        {/* Sağa yaslı butonlar */}
        <Box>
          <Button color="inherit" component={Link} to="/">Ana Sayfa</Button>
          <Button color="inherit">Hakkında</Button>
          <Button color="inherit">İletişim</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
