import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

export default function Variants() {
  return (
    <Box
      sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
        '& > :not(style)': {
          m: 2,
          width: 600,
          height: 700,
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <Paper variant="outlined" sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
      }} ><Typography sx={{
        fontSize: '2em',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
      }}>
          This is a paper with an outlined variant. It should be used for most content. 
          
        </Typography></Paper>
    </Box>
  );
}
