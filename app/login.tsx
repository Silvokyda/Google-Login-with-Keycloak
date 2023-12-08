import React, { useState } from 'react';
import { Container, Button, Typography, TextField } from '@mui/material';
import { useKeycloak } from '@react-keycloak/ssr';
import keycloak from '../utils/keycloak';

const Login: React.FC = () => {
  const { keycloak, initialized } = useKeycloak();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await keycloak.login({ username, password });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h2">Custom Login Page</Typography>
      {initialized ? (
        <form>
          <TextField
            label="Username"
            variant="outlined"
            margin="normal"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} variant="contained" color="primary">
            Login
          </Button>
        </form>
      ) : (
        <Typography>Loading Keycloak...</Typography>
      )}
    </Container>
  );
};

export default Login;