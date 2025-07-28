import { Container, Typography, Box, Button } from '@mui/material';
import { BadgeCheck } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SkipBack } from 'lucide-react';
import { SkipForward } from 'lucide-react';
import { SquareDashedBottomCode } from 'lucide-react';
import Footer from '../components/Footer';

function CoursePageReactTypescript() {
  const typescriptLogo = '../Assets/typescriptLogo.png'; 
  const reactLogo = '../Assets/reactLogo.png'; // Example image path
  return (
    <div>
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mt: { xs: '20px', sm: '20px', md: '20px', lg: '30px' },
      }}>
        <Typography variant="h5" color="initial" sx={{
          textAlign: 'left',
          fontWeight: { xs: 'bold', sm: 'bold', md: 'medium', lg: 'medium' },
          fontSize: { xs: '18px', sm: '18px', md: '28px', lg: '28px' },
        }}>

          <Box  sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <Button component={Link} to="/" variant="text" sx={{ width: {xs:'25px', md:'50px'}}}>
              <ArrowLeft style={{ color: '#0073ffff' }} />
            </Button>
           React + TypeScript Kursu :
          </Box>
        </Typography>

        <Typography variant="h6" color="initial" sx={{
          textAlign: 'right',
          fontSize: { xs: '12px', sm: '12px', md: '16px', lg: '18px' },
          fontWeight: 'medium',
          mt: { xs: 0, sm: 0, md: 2, lg: 2},
          borderRadius: '10px',
          padding: '7px',
        }}>
          <Box  sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <BadgeCheck style={{ color: '#0073ffff' }} /> Enes Baş
          </Box>
        </Typography>
      
    </Box>
     
      <Box sx={{
          mt: 2,
          border: '1px solid #e0e0e0',
          }}>
      </Box>
      
      <Box sx={{
        mt: 3,
        border: '2px solid #e0e0e0',
        width: '100%',
        height: { xs: '400px', sm: '400px', md: '400px', lg: '500px' },
        backgroundColor: '#f5f5f5',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        fontSize: { xs: '20px', sm: '20px', md: '24px', lg: '24px' },
        fontWeight: 'semibold',
        color: '#bebebeff',
        borderRadius: '8px',
        '&:hover': {
          backgroundColor: '#e0e0e08b',
          cursor: 'pointer',
          transition: 'background-color, scale 0.3s ease',
          scale: 1.01,
        }
      }}>
        Kursu izliyebilmek için lütfen giriş yapın veya kayıt olun.
      </Box>

      {/* Ana içerik containerı - Yan yana layout için */}
      <Box sx={{
        display: 'flex',
        gap: 4,
        mt: 3,
        flexDirection: { xs: 'column', md: 'row' }, // Mobilde alt alta, masaüstünde yan yana
      }}>
        
        {/* Sol taraf - Dersler ve Kurs İçeriği */}
        <Box sx={{ flex: 1 }}>
          {/* Dersler bölümü */}
          <Box sx={{
            borderBottom: '2px solid #e0e0e0',
            width: '100%',
            py: 1,
            fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '20px' },
            fontWeight: 'semibold', 
            textAlign: 'left',
          }}>
             Dersler :           
          </Box>

          <Box sx={{
            border: '2px solid #e0e0e0',
            mt: 2,
            width: '100%',
            height: { xs: '60px', md: '60px' },
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <Typography variant="h6" color="initial" sx={{
              ml: { xs: '10px', sm: '20px', md: '30px', lg: '30px' },
            }}><SkipBack style={{ 
              color: '#797979ff',
              textAlign: 'left',
              marginTop: '10px',
              borderRight: '3px solid #e0e0e0',
              paddingRight: '10px',
             }}  size={30}/>
             </Typography>
            <Typography variant="h6" color="initial" sx={{
              textAlign: 'left',
              fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '20px' },
              fontWeight: 'medium',
              marginLeft: { xs: '10px', sm: '20px', md: '30px', lg: '30px' },
             }}>1. Ders | Proje Kurulum</Typography>

             <Typography variant="h6" color="initial" sx={{
              marginLeft: 'auto',
              mr: { xs: '10px', sm: '20px', md: '30px', lg: '30px' },
             }}><SkipForward style={{ 
              color: '#797979ff',
              textAlign: 'left',
              marginTop: '10px',
              borderLeft: '3px solid #e0e0e0',
              paddingLeft: '10px',
             }}  size={30}/>
             </Typography>
          </Box>

          {/* Kurs İçeriği bölümü */}
          <Box sx={{
            width: '100%',
            mt: 5,
            py: 1,
            borderBottom: '2px solid #e0e0e0',
          }}>
            <Typography variant="h6" color="initial" sx={{
              textAlign: 'left',
              fontSize: { xs: '16px', sm: '14px', md: '18px', lg: '20px' },
            }}>
              Kurs İçeriği :
            </Typography>
          </Box>

          <Box sx={{
            border: '2px solid #e0e0e0',
            width: '100%',
            marginTop: 2,
            borderRadius: '10px',
          }}>
            <Box sx={{
              display: 'flex',
            }}>
              <Box
                component="img"
                src={typescriptLogo}
                alt="TypeScript Logo"
                sx={{
                  width: { xs: '70px', sm: '85px', md: '100px'},
                  height: { xs: '70px', sm: '85px', md: '100px'},
                }}
              />

              <div style={{
                marginLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
              }}>
                <Typography variant="h6" color="initial" sx={{ 
                  mt: { xs: 1, sm: 2 },
                  textAlign: 'left',
                  fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '20px' },
                }}>
                  Typescript - Temel Seviye
                </Typography>
                <Typography variant="body2" color="initial" sx={{
                  textAlign: 'left',
                  fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '16px' },
                  mt: { xs:0, md: 0.5}
                }}>
                  Bu kurs, TypeScript'e giriş yapmak isteyenler için tasarlanmıştır.
                </Typography>
              </div>
            </Box>
          </Box>

          <Box sx={{
              display: 'flex',
              mt: 1,
              border: '2px solid #e0e0e0',
              width: '100%',
              borderRadius: '10px', 
            }}>
              <Box
                component="img"
                src={reactLogo}
                alt="React Logo"
                sx={{
                  width: { xs: '70px', sm: '85px', md: '100px'},
                  height: { xs: '70px', sm: '85px', md: '100px'},
                  borderRadius: '10px',
                }}
              />

              <div style={{
                marginLeft: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
              }}>
                <Typography variant="h6" color="initial" sx={{ 
                  mt: { xs: 1, sm: 2 },
                  textAlign: 'left',
                  fontSize: { xs: '16px', sm: '16px', md: '18px', lg: '20px' },
                }}>
                  React - Temel Seviye
                </Typography>
                <Typography variant="body2" color="initial" sx={{
                  textAlign: 'left',
                  fontSize: { xs: '12px', sm: '12px', md: '14px', lg: '16px' },
                  mt: { xs:0, md: 0.5}
                }}>
                  Bu kurs, React'a giriş yapmak isteyenler için tasarlanmıştır.
                </Typography>
              </div>
            </Box>
        </Box>

        <Box sx={{ 
          flex: 1,
          border: '2px dashed #e0e0e0',
          borderRadius: '10px',
          p: 3,
          backgroundColor: '#f9f9f9',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'left',
        }}>
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'left' }}>
            Ders Hakkında: 
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left', mt: 2 }}>
            <Box sx={{ mb: 1 }}>
              Bu kurs, React ve TypeScript kullanarak modern web uygulamaları geliştirmek isteyenler için tasarlanmıştır.
            </Box>
            <Box sx={{ mb: 1 }}>
              Kurs, temel kavramlardan başlayarak ileri düzey konulara kadar geniş bir yelpazede içerik sunmaktadır.
            </Box>
            <Box sx={{ mb: 1 }}>
              Kurs sonunda, katılımcılar React ve TypeScript ile projeler geliştirme yetkinliğine sahip olacaklardır.
            </Box>
            <Box>
              Kurs, pratik uygulamalar ve projelerle desteklenmektedir, böylece katılımcılar öğrendiklerini gerçek dünya senaryolarında uygulayabileceklerdir.
            </Box>
          </Typography>

          <Box sx={{
            borderBottom: '2px solid #e0e0e0',
            marginTop: 3,
            }}>
          </Box>
          <SquareDashedBottomCode size={40} style={{ marginTop: '8px', color: '#bebebeff' }} />

        </Box>

      </Box>


    </Container>
    <Footer />
    </div>
  );
}

export default CoursePageReactTypescript;