import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashBoard from './DashBoard';
import Menu from '../../Pages/Menu/Menu';
import MyCourses from '../../Pages/My-Courses/MyCourses';
import CourseMaterials from '../../Pages/Course-Materials/CourseMaterials';
import VideoTutorial from '../../Pages/Video-Tutorial/VideoTutorial';
import Assignments from '../../Pages/Assignments/Assignments';
import CourseQuiz from '../../Pages/Course-Quiz/CourseQuiz';
import CourseProgress from '../../Pages/Course-Progress/CourseProgress';
import CourseCalendar from '../../Pages/Course-Calendar/CourseCalendar';
import Chatroom from '../../Pages/Chatroom/Chatroom';
import AddaCourse from '../../Pages/Add-a-Course/AddaCourse';
import App from '../../App';
import reportWebVitals from '../../reportWebVitals';

function MenuBarRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="menu" element={<Menu />} />
      <Route path="my-courses" element={<MyCourses />} />
      <Route path="course-materials" element={<CourseMaterials />} />
      <Route path="video-tutorial" element={<VideoTutorial />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="course-quiz" element={<CourseQuiz />} />
      <Route path="course-progress" element={<CourseProgress />} />
      <Route path="course-calendar" element={<CourseCalendar />} />
      <Route path="chatroom" element={<Chatroom />} />
      <Route path="add-a-course" element={<AddaCourse />} />
    </Routes>
  );
}

export default MenuBarRoutes;