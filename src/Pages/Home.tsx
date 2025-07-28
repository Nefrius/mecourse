import { Box } from '@mui/material';
import LessonsTypography from '../components/LessonsTypography';
import LessonsCard from '../components/LessonsCard';
import LandPageExample from '../components/LandPageExample';
import LandPageCourseExp from '../components/LandPageCourseExp';
import Footer from '../components/Footer';

const TypeScriptImg = "/Assets/typescript.png";
const NextJsImg = "/Assets/nextjs.png";
const VueImg = "/Assets/vue.png";
const TypeScriptUrl = '/course-react-typescript'

const courseInfo = {
  courseName: "React + TypeScript",
  courseDesc: "Bu kurs React ve TypeScript'in temel kullanımını anlatır.",
  courseImg: TypeScriptImg,
  courseUrl: TypeScriptUrl
};

const courseInfo1 = {
  courseName: "Nextjs + TypeScript",
  courseDesc: "Bu kurs Next.js ve TypeScript'in temel kullanımını anlatır.",
  courseImg: NextJsImg,
  courseUrl: '/course-nextjs-typescript'
};

const courseInfo2 = {
  courseName: "React + Vue",
  courseDesc: "Bu kurs React ve Vue'nin temel kullanımını anlatır.",
  courseImg: VueImg,
  courseUrl: '/course-react-vue'
};

function Home() {
  return (
    <div>
      <LessonsTypography />
      <LandPageExample />
      <LandPageCourseExp />
      <Box
        sx={{
          display: 'flex',
          gap: 5,
          justifyContent: 'center',
          flexWrap: 'wrap',
          mt: 5
        }}
      >
        <Box sx={{ maxWidth: 345 }}>
          <LessonsCard Desc={courseInfo} />
        </Box>
        <Box sx={{ maxWidth: 345 }}>
          <LessonsCard Desc={courseInfo1} />
        </Box>
        <Box sx={{ maxWidth: 345 }}>
          <LessonsCard Desc={courseInfo2} />
        </Box>
      </Box>
      
      <Footer />
    </div>
  );
}

export default Home;
