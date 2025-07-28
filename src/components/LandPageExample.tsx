import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { BadgeCheck, Gem, Globe } from 'lucide-react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#55a8fcff',
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', // Eski hali
  ...theme.typography.body2,
  padding: theme.spacing(3),
  textAlign: 'center',
  color: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
    borderColor: 'rgba(103, 126, 234, 0.3)',
    backgroundColor: '#006effff',
  }
}))

function LandPageExample() {
  return (
    <Box sx={{ 
      px: { xs: 2, sm: 4, md: 6 }, 
      py: { xs: 4, md: 10 }, 
    //   borderBottom: '2px solid rgba(0, 0, 0, 0.1)',
    }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: { xs: 4, md: 6 },
          alignItems: { xs: 'center', lg: 'flex-start' },
        }}>
            <Box sx={{ 
              flex: { lg: '0 0 40%' },
              maxWidth: { xs: '100%', lg: '500px' },
            }}>
              <Typography variant="h3" sx={{
                fontSize: { xs: '24px', sm: '24x', md: '24px', lg: '30px' },
                fontWeight: 'bold',
                color: '#2c3e50',
                lineHeight: 1.2,
                textAlign: { xs: 'center', lg: 'left' },
                mb: { xs: 2, md: 0 },
                ml: { xs: 0, lg: 30 }
              }}>
                Neden MeCourse <br />Tavsiye Etmelisiniz?
              </Typography>
            </Box>

            <Box sx={{ 
              flex: { lg: 1 },
              width: '100%',
              mr: { xs: 0, lg: 30 }
            }}>
                <Box sx={{ 
                  display: 'flex', 
                  gap: { xs: 4, sm: 3 }, 
                  justifyContent: { xs: 'center', lg: 'flex-end' },
                  flexWrap: 'wrap',
                  alignItems: 'stretch'
                }}>
                   <Box sx={{ 
                     width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 16px)' },
                     minHeight: { xs: '160px', sm: '180px' },
                   }}>
                     <Item>
                       <Typography variant="h6" sx={{ 
                         mb: 2, 
                         fontWeight: 'bold',
                         color: '#ffffffff',
                         fontSize: { xs: '1rem', sm: '1.1rem' },
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         gap: 1,
                       }}>
                        <BadgeCheck size={20} style={{ color: '#ffffffff' }} />
                        Kolay Kullanım
                       </Typography>
                       <Typography variant="body2" sx={{
                         lineHeight: 1.6,
                         color: '#ffffffff',
                         fontSize: { xs: '0.85rem', sm: '0.9rem' }
                       }}>
                         Sade ve anlaşılır arayüz ile kolayca kurs oluşturun. Hiçbir teknik bilgiye ihtiyaç yok!
                       </Typography>
                     </Item>
                   </Box>

                   <Box sx={{ 
                     width: { xs: '100%', sm: 'calc(50% - 24px)', md: 'calc(33.333% - 16px)' },
                     minHeight: { xs: '160px', sm: '180px' }
                   }}>
                     <Item>
                       <Typography variant="h6" sx={{ 
                         mb: 2, 
                         fontWeight: 'bold',
                         color: '#ffffffff',
                         fontSize: { xs: '1rem', sm: '1.1rem' },
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         gap: 1
                       }}>
                        <Gem size={20} style={{ color: '#ffffffff' }} />
                        Ücretsiz Başlangıç
                       </Typography>
                       <Typography variant="body2" sx={{
                         lineHeight: 1.6,
                         color: '#ffffffff',
                         fontSize: { xs: '0.85rem', sm: '0.9rem' }
                       }}>
                         Hiçbir ücret ödemeden hemen başlayabilirsiniz. Premium özellikler ile büyüyün.
                       </Typography>
                     </Item>
                   </Box>

                   <Box sx={{ 
                     width: { xs: '100%', sm: '100%', md: 'calc(33.333% - 16px)' },
                     minHeight: { xs: '160px', sm: '180px' },
                     mt: { xs: 0, sm: 3, md: 0 }
                   }}>
                     <Item>
                       <Typography variant="h6" sx={{ 
                         mb: 2, 
                         fontWeight: 'bold',
                         color: '#ffffffff',
                         fontSize: { xs: '1rem', sm: '1.1rem' },
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         gap: 1
                       }}>
                        <Globe size={20} style={{ color: '#ffffffff' }} />
                        Geniş Kitle
                       </Typography>
                       <Typography variant="body2" sx={{
                         lineHeight: 1.6,
                         color: '#ffffffff',
                         fontSize: { xs: '0.85rem', sm: '0.9rem' }
                       }}>
                         Kurslarınızı binlerce öğrenciye ulaştırın. Global pazarda yerinizi alın!
                       </Typography>
                     </Item>
                   </Box>
                </Box>
            </Box>
        </Box>
         <Box
          sx={{
            width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' },
            borderBottom: '3px solid rgba(0, 0, 0, 0.1)',
            mx: { xs: 'auto', sm: 'auto', md: 'auto', lg: '230px' },
            mt: 20,
            '&:hover': {
                transform: 'translateX(20px)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.4s ease',
            }
          }}
        />
    </Box>
  )
}

export default LandPageExample