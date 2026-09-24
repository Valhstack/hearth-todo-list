function Sidebar() {
    return <div className="sidebar" id="sidebar">
        <h1 className="sidebar-h1">Hearth</h1>
        <div className="sidebar-wrapper">
            <div className="sidebar-btns-wrapper">
                <button className="sidebar-btn selected" id="sidebar-inbox-btn">Inbox</button>
                <button className="sidebar-btn" id="sidebar-today-btn">Today</button>
                <button className="sidebar-btn" id="sidebar-upcoming-btn">Upcoming</button>
            </div>
        </div>
    </div>
}

export default Sidebar;