import todayLogo from "../assets/imgs/compass-rose.svg";
import upcomingLogo from "../assets/imgs/calendar-blank-outline.svg";
import allTasksLogo from "../assets/imgs/format-list-bulleted.svg";
import allNotesLogo from "../assets/imgs/file-document-outline.svg";
import meetingsLogo from "../assets/imgs/account-multiple-outline.svg";
import toProcessLogo from "../assets/imgs/inbox.svg";
import settingsLogo from "../assets/imgs/white-balance-sunny.svg";


function Sidebar() {
    return <div className="sidebar" id="sidebar">
        <h1 className="sidebar-h1">Hearth</h1>

        <div className="sidebar-top-wrapper">
            <button id="sidebar-task-btn" className="sidebar-top-btn">+ Task T</button>
            <button id="sidebar-note-btn" className="sidebar-top-btn">+ Note N</button>
        </div>

        <p className="tasks-label" id="tasks-label">Tasks</p>
        <div className="sidebar-tasks-wrapper">
            <button className="sidebar-tasks-btn selected" id="sidebar-today-btn"><img src={todayLogo} className="logo-image-svg"></img> Today</button>
            <button className="sidebar-tasks-btn" id="sidebar-upcoming-btn"><img src={upcomingLogo} className="logo-image-svg"></img> Upcoming</button>
            <button className="sidebar-tasks-btn" id="sidebar-projects-btn"><img src={allTasksLogo} className="logo-image-svg"></img> All tasks</button>
        </div>

        <p className="projects-label" id="projects-label">Projects</p>
        <div className="sidebar-projects-wrapper"> { /* will be defined automatically eventually, but hardcoding one entry for example */}
            <button className="sidebar-project-btn">Q4 Reporting</button>
        </div>

        <p className="notes-label" id="notes-label">Notes</p>
        <div className="sidebar-notes-wrapper">
            <button className="sidebar-notes-btn" id="all-notes-btn"><img src={allNotesLogo} className="logo-image-svg"></img> All notes</button>
            <button className="sidebar-notes-btn" id="meetings-btn"><img src={meetingsLogo} className="logo-image-svg"></img> Meetings</button>
            <button className="sidebar-notes-btn" id="to-process-btn"><img src={toProcessLogo} className="logo-image-svg"></img> To process</button>
        </div>

        <button className="sidebar-settings-btn" id="settings-btn"><img src={settingsLogo} className="logo-image-svg"></img> Settings</button>
    </div>
}

export default Sidebar;