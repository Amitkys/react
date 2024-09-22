import { atom } from "recoil"

export const todoAtom = atom({
    key: "todoAtom",
    default: [{
        title: 'demo title',
        description: 'demo description'
    }]
});

