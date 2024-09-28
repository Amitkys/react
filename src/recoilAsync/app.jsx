import { RecoilRoot, useRecoilValue } from "recoil";
import {  notificationAtom, totalNotificationSelector } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}
function MainApp() {
  const notifications = useRecoilValue(notificationAtom);
  // const totalNotification = useRecoilValue(notificationSelector)
  const totalNotification = useRecoilValue(totalNotificationSelector);
  return (
    <div>
       <button>Home </button>
      <button>Notification ({notifications.notifications})</button>
      <button>Message ({notifications.messages})</button>
      <button>Network ({notifications.networks})</button>
      <button>job ({notifications.jobs})</button>
      {/* <button>me ({totalNotification})</button>  */}
      <button>Totoal Notification {totalNotification} </button>
      
    </div>
  )
}
export default App;