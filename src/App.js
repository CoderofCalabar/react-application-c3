import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Homepage from './routes/Home'
import CoursePage from './routes/coursespage'
import { IndividualCourse } from './routes/individualcourse'
import Courses from './routes/courses'
import About from './routes/About'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="courses">
            <Route index element={<Courses />} />
            <Route path=":courseid" element={<IndividualCourse />} />
            <Route path="allcourses" element={<CoursePage />} />
        </Route>
        <Route path='/abouts' element={<About />} />
    </Routes>
  )
}

export default App