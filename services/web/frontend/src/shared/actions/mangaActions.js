const select_manga = 'select_manga';

const selectManga = manga => {
    return {
        type: select_manga,
        manga
    }
}

export { selectManga, select_manga };