import { types } from "mobx-state-tree";
import { ContentModel } from "../models/ContentModel.model";
import { contentMock } from "../../mock/content";

export const RootStore$ = types.model('RootStore$', {
    content$: types.array(ContentModel)
})
    .actions((self) => ({
        setUpdateContent(conent) {
            self.content$ = conent
        },
        setInitialState() {
            self.content$ = contentMock
        }

    }))
