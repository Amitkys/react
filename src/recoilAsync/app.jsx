import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {  notificationAtom, totalNotificationSelector } from "./atom";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}
function MainApp() {
  // const [notifications, setNotifications] = useRecoilState(notificationAtom);
  const notifications = useRecoilValue(notificationAtom);
  const totalNotification = useRecoilValue(totalNotificationSelector);
  const setJob = useSetRecoilState(notificationAtom);

  function increaseJob() {
    setJob((prev) => ({
      ...prev,
      jobs: prev.jobs + 1,
    }))
  }

  console.log("I am from main app")

  return (
    <div>
       <button>Home </button>
      <button>Notification ({notifications.notifications})</button>
      <button>Message ({notifications.messages})</button>
      <button>Network ({notifications.networks})</button>
      <button>job ({notifications.jobs})</button>
      <button>Totoal Notification {totalNotification} </button>
      <button onClick={increaseJob}>increase job</button>
      
    </div>
  )
};


export default App;