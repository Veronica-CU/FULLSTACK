import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Lokesh Sales - Responsive PWA
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color="text.secondary">
          Welcome to Lokesh's Sales Platform
        </Typography>
        
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <ShoppingCartIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                  Products
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Browse our product catalog
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  View Products
                </Button>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <PersonIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
                <Typography variant="h5" component="div" sx={{ mt: 2 }}>
                  Account
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Manage your account
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }}>
                  My Account
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;
