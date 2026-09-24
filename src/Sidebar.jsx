function Sidebar() {
    return <div className="sidebar" id="sidebar">
        <h1 className="sidebar-h1">Hearth</h1>
        <div className="sidebar-wrapper">
            <div className="sidebar-btns-wrapper">
                <button className="sidebar-btn selected" id="sidebar-inbox-btn">Inbox</button>
                <button className="sidebar-btn" id="sidebar-today-btn">Today</button>
                <button className="sidebar-btn" id="sidebar-upcoming-btn">Upcoming</button>
                <button className="sidebar-btn" id="sidebar-projects-btn">Projects</button>
                <hr className="solid"></hr>
                <button className="sidebar-secondary-btn" id="sidebar-notes-btn">Quick Notes</button>
                <button className="sidebar-secondary-btn" id="sidebat-settings-btn">Settings</button>
            </div>
        </div>
    </div>
}

export default Sidebar;