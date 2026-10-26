export function Header({ header, subtext }) {
    return <div className="header-wrapper" id="header">
        <h1 className="header-h1">
            {header}
        </h1>
        <p className="header-subtext">
            {subtext}
        </p>
    </div>
}