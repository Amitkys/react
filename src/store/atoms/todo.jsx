import { atom, selector } from "recoil"

export const todoAtom = atom({
    key: "todoAtom",
    default: [{
        title: 'demo title',
        description: 'demo description'
    }]
});

export const filterTodo = selector({
    key: "filterTodo",
    get: 
})

