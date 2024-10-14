import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import { useRef, useState, useEffect } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';

function ProfilePage() {
  const [avatar, setAvatar] = useState('/profile.jpg');
  const fileInputRef = useRef(null);
  const [name, setName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newAvatar = URL.createObjectURL(file);
      setAvatar(newAvatar);
    }
  };

  const handleEditButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleNameEditClick = () => {
    setIsEditingName((prev) => !prev);
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar);
    };
  }, [avatar]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', // Full height for both large and small screens
        padding: 0, // No padding for the outer box
        backgroundColor: 'white',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          backgroundColor: 'purple',
          borderRadius: '8px',
          boxShadow: 2,
          height: isSmallScreen ? '100%' : 'auto', // Allow the container to take the full height on small screens
        }}
      >
        <Typography variant="h5" align="center" gutterBottom color="white">
          Profile
        </Typography>

        <div style={{ position: 'relative' }}>
          <Avatar
            alt="Profile Picture"
            src={avatar}
            sx={{
              margin: '1rem auto',
              width: { xs: 80, sm: 100 },
              height: { xs: 80, sm: 100 },
            }}
          />
          <Button
            onClick={handleEditButtonClick}
            sx={{
              position: 'absolute',
              top: '10%',
              right: '-18%',
              backgroundColor: 'transparent',
              color: 'white',
            }}
          >
            <EditIcon />
          </Button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </div>

        <Grid container spacing={2} sx={{ marginTop: '2rem', width: '100%' }}>
          <Grid item xs={12} style={{ position: 'relative' }}>
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditingName && name === ''}
              sx={{ mb: 2 }}
            />
            <Button
              onClick={handleNameEditClick}
              sx={{
                backgroundColor: 'transparent',
                color: 'white',
                position: 'absolute',
                right: '0',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <EditIcon />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Phone No." sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Email" sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12}>
            <TextField fullWidth label="Date of Birth" sx={{ mb: 2 }} />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                marginTop: '2rem',
                background: 'violet',
                marginBottom: '2rem',
              }}
            >
              Log Out
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProfilePage;
