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

            <div className="my-5">

                {children}

            </div>
            <Footer
                course={footerCourse}
                courseLink={footerCourseLink}
                navItems = {navItems}
            />

        </>
    )
}

export default MainTemplate;