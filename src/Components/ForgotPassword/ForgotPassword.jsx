import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect, useRef } from 'react';

export default function ForgotPassword() {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [focusIndex, setFocusIndex] = useState(0);
  const inputsRef = useRef([]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    if (value.length === 1) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = value;
        return newOtp;
      });
      if (index < otp.length - 1) {
        setFocusIndex(index + 1);
      }
    } else if (value.length === 0) {
      setOtp((prevOtp) => {
        const newOtp = [...prevOtp];
        newOtp[index] = '';
        return newOtp;
      });
      if (index > 0) {
        setFocusIndex(index - 1);
      }
    }
  };

  useEffect(() => {
    if (inputsRef.current[focusIndex]) {
      inputsRef.current[focusIndex].focus();
    }
  }, [focusIndex]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Box
        sx={{
          width: { xs: '90%', sm: 400 },
          backgroundColor: '#4162DE',
          color: 'white',
          borderRadius: 8,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
          <IconButton>
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>
        </Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Forgot Password
        </Typography>
        <TextField
          label="Phone No. or Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              value={digit}
              onChange={(e) => handleOtpChange(e, index)}
              sx={{ width: 50, mx: 1 }}
              inputProps={{
                maxLength: 1,
                style: { textAlign: 'center' },
              }}
              inputRef={(el) => inputsRef.current[index] = el}
            />
          ))}
        </Box>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2, backgroundColor: 'blue' }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
