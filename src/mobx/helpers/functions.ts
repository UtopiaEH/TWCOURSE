import { IRequestData, ISnapshotContentGoogleModelIn, ISnapshotContentModelIn } from '../interfaces'

export function makeSnapshotIn(res: IRequestData[]): ISnapshotContentModelIn[] {

    return res.map((data) => {
        return {
            id: data.id,
            title: '',
            description: '',
            img: data.url
        }
    })

}


export function makeSnapshotInFromGoogle(res: any): ISnapshotContentGoogleModelIn[] {

    return res.data.results.map((res: ISnapshotContentGoogleModelIn) => {
        return {
            description: res.description,
            link: res.link,
            title: res.title
        }
    })

}