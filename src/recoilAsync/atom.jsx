import axios from "axios";
import { atom, selector } from "recoil";

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: selector({
        key: 'fetchNotificationSelector',
        get: async() => {
            const res = await axios.get('https://backend-ddtz.onrender.com/notification');
            return res.data;
        }
    })
});

export const totalNotificationSelector = selector( {
    key: 'totalNotificationSelector',
    get: ({get}) => {
        const data = get(notificationAtom);
        return data.notifications + data.jobs + data.networks + data.messages;
    }
})