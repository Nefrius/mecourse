  import { Card, CardContent, Typography } from "@mui/material";

  function LandPageCard() {
    return (
      <Card
        sx={{
          width: { xs: '100%', sm: 400, md: 300, lg: 500 },
          height: 250,
          mt: 2,
          mr: { xs: 10, sm: 2, md: 2, lg: 20, xl: 40 },
          background: "linear-gradient(135deg, #859bffff 0%, #590ba8ff 100%)",
          borderRadius: 5,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',

        }}
      >
      <CardContent
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", 
          height: "100%",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "600", color: "#fff" }}>
          Birbirinden Farklı Kurslar
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "300", color: "#fff" }}>
          Aylık / 99,9 TL
        </Typography>
        <Typography variant="body2" sx={{ mt: 2, ml: 2, mr: 2, color: "rgba(255,255,255,0.8)" }}>
          Ücretsiz erişim ile başlayın. Otomatik aylık ödeme ile kurslarınızı sürekli güncel tutun.
        </Typography>
      </CardContent>
    </Card>
  );
}

  export default LandPageCard;
