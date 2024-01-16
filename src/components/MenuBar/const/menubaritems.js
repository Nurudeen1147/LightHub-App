import MenuBookIcon from '@mui/icons-material/MenuBook';
import CategoryIcon from '@mui/icons-material/Category';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import QuizIcon from '@mui/icons-material/Quiz';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import PostAddIcon from '@mui/icons-material/PostAdd';
import HomeIcon from '@mui/icons-material/Home'; 

export const menubaritemlists = [
    
    //     id: 'Menu',
    //     label: 'Menu',
    //     route: 'menu1',
    //     children: [
        
    {
        id: 0,
        icon: <MenuBookIcon />,
        label: 'My Courses',
        route: 'my-courses',
    },

    {
        id: 1,
        icon: <CategoryIcon />,
        label: 'Course Materials',
        route: 'course-materials',
    },

    {
        id: 2,
        icon: <VideoLabelIcon />,
        label: 'Video Tutorial',
        route: 'video-tutorial',
    },

    {
        id: 3,
        icon: <AssignmentTurnedInIcon/>,
        label: 'Assignments',
        route: 'assignments',
    },

    {
        id: 4,
        icon: <QuizIcon />,
        label: 'Course Quiz',
        route: 'course-quiz',
    },

    {
        id: 5,
        icon: <AutoGraphIcon />,
        label: 'Course Progress',
        route: 'course-progress',
    },

    {
        id: 6,
        icon: <CalendarMonthIcon />,
        label: 'Course Calendar',
        route: 'course-calendar',
    },
        
    {
        id: 7,
        icon: <ChatIcon />,
        label: 'Chatroom',
        route: 'chatroom',
    },

    {
        id: 8,
        icon: <PostAddIcon />,
        label: 'Add a Course',
        route: 'add-a-course',
    },
]

// export const children = menubaritemlists[0].children;
// export const id = menubaritemlists[0].id;
// export const icon = children.map((child) => child.icon);
// export const label = children.map((child) => child.label);
// export const route = children.map((child) => child.route);

export default menubaritemlists;