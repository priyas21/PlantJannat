import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { PlantsFilterContext } from "../contexts/PlantsFilterContext";

function PlantToolbar() {
    const {setTheme, theme} = useContext(ThemeContext);
    const {
        showCareGuide, setShowCareGuide,
        setSearchQuery,
    } = useContext(PlantsFilterContext);
    
    return(
        <div className="toolbar dark-theme-header">
            <div className="container">
                <div className="justify-content-between">
                    <ul className="toolrow d-flex flex-column flex-lg-row">
                        <li className="d-flex flex-column flex-md-row">
                            <b>Show Care Guide&nbsp;&nbsp;</b>
                            <label className="fav">
                                <input
                                type="checkbox"
                                checked={showCareGuide}
                                onChange={(event) => setShowCareGuide(event.target.checked)}
                                />
                                <span className="switch"></span>
                            </label>
                        </li>
                        <li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
                            <strong>Theme</strong>
                            <label className="dropdown">
                                <select className="form-control theme" value={theme} onChange={(event) => setTheme(event.target.value)}>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </label>
                        </li>
                        <li>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search..."
                                       onChange={(event) => {
                                           setSearchQuery(event.target.value);
                                       }}
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"/>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlantToolbar;