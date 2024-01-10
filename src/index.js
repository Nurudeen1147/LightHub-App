import React from 'react';
import './index.css';
import App from './App';
import Menu from './Pages/Menu/Menu';
import MyCourses from './Pages/My-Courses/MyCourses';
import CourseMaterials from './Pages/Course-Materials/CourseMaterials';
import VideoTutorial from './Pages/Video-Tutorial/VideoTutorial';
import Assignments from './Pages/Assignments/Assignments';
import CourseQuiz from './Pages/Course-Quiz/CourseQuiz';
import CourseProgress from './Pages/Course-Progress/CourseProgress';
import CourseCalendar from './Pages/Course-Calendar/CourseCalendar';
import Chatroom from './Pages/Chatroom/Chatroom';
// import Annoucements from './Pages/Announcements/Announcements';
// import Profile from './Pages/Profile/Profile';
import AddaCourse from './Pages/Add-a-Course/AddaCourse';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="menu" element={<Menu />} />
        <Route path="my-courses" element={<MyCourses />} />
        <Route path="course-materials" element={<CourseMaterials />} />
        <Route path="video-tutorial" element={<VideoTutorial />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="course-quiz" element={<CourseQuiz />} />
        <Route path="course-progress" element={<CourseProgress />} />
        <Route path="course-calendar" element={<CourseCalendar />} />
        <Route path="chatroom" element={<Chatroom />} />
        {/* <Route path="announcements" element={<Annoucements />} /> */}
        {/* <Route path="profile" element={<Profile />} /> */}
        <Route path="add-a-course" element={<AddaCourse />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
