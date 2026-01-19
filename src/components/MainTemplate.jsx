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

            <div className="main-content" style={{ width: '100%', padding: 0, margin: 0 }}>

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