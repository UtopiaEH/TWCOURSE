import { contentMock } from "../mock/content";

export function setInitialStateToLocalStorage() {
    localStorage.setItem('initialState', JSON.stringify(contentMock))
}

export function getStateByKey(key) {
    return JSON.parse(localStorage.getItem(key))
}