import { useContext } from "react";
import { ThemeContext } from "./App";

function Header() {
    const { theme } = useContext(ThemeContext);
    return(
        <div className="padT4 padB4">
            <div className="container mobile-container">
                <div className="d-flex justify-content-between">
                    <div>
                        <img
                            alt="Plant Jannat Home page"
                            src="/images/logo.jpg"
                            width="50"
                            height="50"
                        />
                    </div>
                    <div className="light">
                        <h4 className={theme === "light" ? "header-title" : "dark-theme-header"}>
                            Plant Jannat
                        </h4>
                    </div>
                    <div className={theme === "light" ? "" : "text-info"}>
                        Hello! Priya &nbsp;
                        <span>
                            <a href="#">sign-out</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;