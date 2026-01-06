import React from "react";

import Footer from "./Footer/Footer.jsx";
import Header from "./Header/Header.jsx";

function MainTemplate({ children, footerCourse, footerCourseLink, navItems, logo}) {
    return (
        <>
            <Header
                navItems={navItems}
                logo={logo}
            />

            <div className="main-content">

                {children}

            </div>

            <Footer
                courseName={footerCourse}
                courseLink={footerCourseLink}
                navItems={navItems}
            />
        </>
    )
}

export default MainTemplate;