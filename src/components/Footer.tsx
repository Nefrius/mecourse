import { Box, Typography, Container, Divider } from '@mui/material';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        {/* Ana Footer İçeriği */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 4,
          justifyContent: 'space-between'
        }}>
          {/* Logo ve Açıklama */}
          <Box sx={{ flex: '1 1 300px', minWidth: '250px' }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#55a8fc'
              }}
            >
              MeCourse
            </Typography>
            <Typography
              variant="body2"
              sx={{
                mb: 3,
                lineHeight: 1.6,
                color: '#cccccc'
              }}
            >
              Kurslarınızı kolayca oluşturun, yönetin ve binlerce öğrenciye ulaştırın. 
              Eğitimde yeni nesil platform deneyimi.
            </Typography>
          </Box>

          {/* Hızlı Linkler */}
          <Box sx={{ flex: '1 1 150px', minWidth: '150px' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: 'white'
              }}
            >
              Hızlı Linkler
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ color: '#cccccc', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
                Ana Sayfa
              </Box>
              <Box sx={{ color: '#cccccc', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
                Kurslar
              </Box>
              <Box sx={{ color: '#cccccc', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
                Hakkımızda
              </Box>
              <Box sx={{ color: '#cccccc', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
                İletişim
              </Box>
            </Box>
          </Box>

          {/* Öğrenciler İçin */}
          <Box sx={{ flex: '1 1 200px', minWidth: '180px' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: 'white'
              }}
            >
              Öğrenciler İçin
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Box sx={{ color: '#cccccc', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
                Kurs Kataloğu
              </Box>
              <Box sx={{ color: '#cccccc', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
                Ücretsiz Kurslar
              </Box>
              <Box sx={{ color: '#cccccc', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
                Sertifikalar
              </Box>
              <Box sx={{ color: '#cccccc', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
                Yardım
              </Box>
            </Box>
          </Box>

          {/* İletişim Bilgileri */}
          <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: 'white'
              }}
            >
              İletişim
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Mail size={16} />
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  info@mecourse.com
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone size={16} />
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  +90 (212) 555 0123
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <MapPin size={16} />
                <Typography variant="body2" sx={{ color: '#cccccc' }}>
                  İstanbul, Türkiye
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Alt Çizgi */}
        <Divider sx={{ my: 4, backgroundColor: '#333' }} />

        {/* Copyright */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#888',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}
          >
            © 2025 MeCourse. Tüm hakları saklıdır. Made with <Heart size={14} color="#e74c3c" /> in Turkey
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Box sx={{ color: '#888', fontSize: '0.875rem', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
              Gizlilik Politikası
            </Box>
            <Box sx={{ color: '#888', fontSize: '0.875rem', cursor: 'pointer', '&:hover': { color: '#55a8fc' } }}>
              Kullanım Şartları
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
