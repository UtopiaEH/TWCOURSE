import { notification } from 'antd'
import { flow } from 'mobx'
import { types } from 'mobx-state-tree'
import { AddContent } from '../models/AddContentModel.model'
import { ContentModel } from '../models/ContentModel.model'
import { contentMock, newsMockData } from '../../mock/content'
import { NewsModel } from '../models/NewsModel.model'

import { v4 as uuid } from 'uuid'

export const RootStore$ = types.model('RootStore$', {
    content$: types.array(ContentModel),
    news$: types.array(NewsModel),
    addContent$: types.maybe(AddContent),
    default_add_type: 'news'
})
    .actions((self) => ({
        setUpdateContent(conent) {
            self.content$ = conent
        },

        setUpdateType(conent) {
            console.log('>>log', conent)
            if (conent) {
                self.default_add_type = 'news'
            } else {
                self.default_add_type = 'content'
            }
        },

        setUpdateNews(conent) {
            self.news$ = conent
        },

        setInitialState() {
            self.content$ = contentMock
            self.news$ = newsMockData
        },

        setAddContntInitial() {
            self.addContent$ = {
                title: '',
                description: '',
                img: ''
            }
        },

        addContent(data) {
            console.log('>>data', data)
            if (self.default_add_type === 'news') {
                self.news$.push({
                    id: uuid(),
                    ...data
                })
            } else {
                self.content$.push({
                    id: uuid(),
                    ...data
                })
            }

            self.addContent$ = {}
        },

        showMessage: flow(function* () {
            setTimeout(() => {
                notification.success({ message: 'Functia async a fost executata' })
                console.log('>>Asyc function')
            }, 2000)
        })

    }))

    .views((self) => ({
        get contentSum() {
            return self.content$.length
        },

        get defaultAddType() {
            return self.default_add_type === 'news' ? true : false
        }
    }))

