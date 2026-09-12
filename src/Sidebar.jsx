function Sidebar() {
    return <div className="sidebar" id="sidebar">
        <h1 className="sidebar-h1">Hearth</h1>
        <div className="sidebar-wrapper">
            <div className="sidebar-btns-wrapper">
                <button className="sidebar-btn selected" id="sidebar-inbox-btn">Inbox</button>
                <button className="sidebar-btn" id="sidebar-today-btn">Today</button>
                <button className="sidebar-btn" id="sidebar-upcoming-btn">Upcoming</button>
            </div>
            <div className="sidebar-projects-wrapper">
                <h4 className="sidebar-h4">Projects</h4>
                {/* here I will add <Projects /> to list all the projects in the future */}
            </div>
        </div>
    </div>
}

export default Sidebar;