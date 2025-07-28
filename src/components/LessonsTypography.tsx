import { Typography, Box } from '@mui/material';
import LandPageCard from './LandPageCard';

function LessonsTypography() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'flex-start', md: 'center' },
        mt: { xs: '60px', md: '140px' },
        ml: { xs: '20px', sm: '50px', md: '100px', lg: '100px', xl: '300px' },
        mr: { xs: '10px', sm: '25px' },
        gap: { xs: 2, md: 4 },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          align="left"
          gutterBottom
          sx={{
            fontSize: {
              xs: '28px',
              sm: '38px',
              md: '56px',
            },
          }}
        >
          Kurslarınızı ücretsiz olarak <br /> Yayınlayın ve geniş <br /> Bir kitleye ulaşın.
        </Typography>

        <Typography
          variant="h4"
          align="left"
          gutterBottom
          sx={{
            fontSize: {
              xs: '12px',
              sm: '12px',
              md: '15px',
            },
          }}
        >
          MeCourse, kurslarınızı kolayca oluşturmanıza ve yayınlamanıza olanak tanır. <br /> Ücretsiz erişim ile başlayın. 
        </Typography>
      </Box>
      
      <Box sx={{ flexShrink: 1 }}>
        <LandPageCard />
      </Box>
    </Box>
   



  );
}

export default LessonsTypography;
