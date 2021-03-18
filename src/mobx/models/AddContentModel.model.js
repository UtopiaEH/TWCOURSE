import { types } from "mobx-state-tree";


export const AddContent = types.model('AddContent', {
    title: '',
    description: '',
    img: ''
})

    .actions((self) => ({
        updateField(key, value) {
            self[key] = value
        }
    }))