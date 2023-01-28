export interface IItemMusicList {
    id: number | string
    title: string
    singer: string
    thumb: string
    onPlay?: (id: string | number) => void
    onDelete?: (id: string | number) => void
}
