import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './original/reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './act/santi/act_1/Layout';
import { HomePage } from './act/santi/act_1HomePage';
import { CoursesPage } from './act/santi/act_1CoursesPage';
import { CourseDetailPage } from './act/santi/act_1CourseDetailPage';
import { NotFoundPage } from './act/santi/act_1NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<HomePage />} />

                    <Route path="cursos" element={<CoursesPage />} />
                    <Route path="cursos/:courseId" element={<CourseDetailPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();