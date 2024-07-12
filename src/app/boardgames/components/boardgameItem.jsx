export default function BoardgameItem({ boardgame }) {
    return <div className="grid grid-cols-10 border relative border-solid px-4 border-transparent">
        <div className="flex col-span-3">{boardgame.title}</div>
<div className="flex col-span-2">
  {boardgame.minPlayers ? `${boardgame.minPlayers}${boardgame.maxPlayers ? ` - ${boardgame.maxPlayers}` : ''}` : "Will be updated soon!"}
</div>
        <div className="flex col-span-5">{ boardgame.description ?? "Will be updated soon!"}</div></div>
}