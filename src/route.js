import {
    createBrowserRouter,
  } from "react-router-dom";
import Homepage from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Blog from "./routes/Blog";
import Support from "./routes/Support";
import Courses from "./routes/courses";
import CoursePage from "./routes/coursespage";
import { IndividualCourse } from "./routes/individualcourse";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
    },
    {
        path: "/abouts",
        element: <About />,
    },
    {
        path: "/contacts",
        element: <Contact />,
    },
    {
        path: "/blog",
        element: <Blog />,
    },
    {
        path: "/support",
        element: <Support />,
    },
    {
        path: "/courses",
        element: <Courses />,
        children: [
            {
                path: "/courses/allcourses",
                element: <CoursePage />,
            },
            {
                path: "/courses/:courseid",
                element: <
                IndividualCourse />,
            },
        ]
    },
]);

export default router;