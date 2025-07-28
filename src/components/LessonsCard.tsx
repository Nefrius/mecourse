import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

type DescType = {
  courseName: string;
  courseDesc: string;
  courseImg?: any;
  courseUrl?: any;
};

type Props = {
  Desc: DescType;
};

function LessonsCard({ Desc }: Props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: "auto", mt: 5, mb: 5 }}>
        <CardMedia
          component="img"
          height="140"
          image={Desc.courseImg}
          alt="Rastgele Görsel"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Desc.courseName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Desc.courseDesc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Paylaş</Button>
          <Button size="small" component={Link} to={Desc.courseUrl}>Detay</Button>
        </CardActions>
      </Card>
    </div>
    

  );
}

export default LessonsCard;
