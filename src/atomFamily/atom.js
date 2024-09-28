import { atomFamily } from "recoil";
import { TODO } from "./delete.js";
export const todoFamily = atomFamily({
    key: 'todoFamily',
    default: id => {
        return TODO.find((x) => x.id == id);
    }
})