import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import EditIcon from '@mui/icons-material/Edit';
import { useRef, useState, useEffect } from 'react';

function ProfilePage() {

  const [avatar, setAvatar] = useState('/profile.jpg'); 
  const fileInputRef = useRef(null); 

  const [name, setName] = useState('');
  const [isEditingName, setIsEditingName] = useState(false);

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
    setIsEditingName(!isEditingName);
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar);
    };
  }, [avatar]);

  return (
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50%',
      maxWidth: '500px',
      backgroundColor: 'purple',
      padding: '0rem',
      borderRadius: '5px'
    }}>
      <Container maxWidth="sm" sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
        backgroundColor: 'purple',
        padding: '2rem'
      }}>

        <Typography variant="h5" align="center" gutterBottom>
          Profile
        </Typography>

        <div style={{ position: 'relative' }}>

          <Avatar alt="Profile Picture" src={avatar} sx={{
            margin: '1rem auto',
            width: 100,
            height: 100
          }} />
          <Button
            onClick={handleEditButtonClick}
            sx={{
              position: 'absolute',
              top: '10%',
              right: '-20%',
              backgroundColor: 'transparent',
              color: 'white'
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

        <Grid container spacing={2} sx={{
          marginTop: '2rem',
          width: '100%'
        }}>

        <Grid item xs={12} sm={12} style={{ position: 'relative' }}>
            
            <TextField
              fullWidth
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditingName && name === ''}
            />
            <Button
              onClick={handleNameEditClick}
              sx={{
                position: 'absolute',
                top: '60%',
                right: '0rem',
                transform: 'translateY(-50%)',
                backgroundColor: 'transparent',
                color: 'white'
              }}
            >
              <EditIcon />
            </Button>
            
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField fullWidth label="Phone No." />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField fullWidth label="Email" />
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField fullWidth label="Date of Birth" />
          </Grid>
          
          <Grid item xs={12} sm={12}>
            <Button variant="contained" fullWidth sx={{
              marginTop: '2rem', background: 'violet', marginBottom: '2rem'
            }}>
              Log Out
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProfilePage;