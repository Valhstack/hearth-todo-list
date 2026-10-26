import { Header } from "./Header"

export function TodayScreen() {
    let todayDate = new Date();
    let todayDay = todayDate.getDay();

    let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return <div id="today">
        <Header header={"Today"} subtext={weekday[todayDay] + ", " + todayDate.getDate() + " " + months[todayDate.getMonth()]} />
    </div>
}