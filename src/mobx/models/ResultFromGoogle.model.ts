import { types } from 'mobx-state-tree'


export const ResultFromGoogleModel = types.model('ResultFromGoogleModel', {
    description: '',
    link: '',
    title: '',
})