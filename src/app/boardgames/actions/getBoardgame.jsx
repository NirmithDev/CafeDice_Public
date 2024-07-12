export default async function getBoardgame() {
    const boardgamesRes = await fetch('/api/boardgames')
    const resJSON = await boardgamesRes.json()
    return resJSON.boardgamesRes
}