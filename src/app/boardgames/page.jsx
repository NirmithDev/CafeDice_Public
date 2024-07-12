"use client"

import {useState, useEffect} from "react"
import getBoardgame from "./actions/getBoardgame"
import BoardgameItem from "./components/boardgameItem"
export default function BoardgamePage() {
  const [boardgames, setBoardgames] = useState([])
  useEffect(() => {
    getBoardgame().then((boardgames) => setBoardgames(boardgames)).catch((e) => console.log(e))
  }, [])
  return (
    <div className="flex flex-col space-y-5 px-3 mb-5 mt-40 h-full w-full overflow-y-auto overscroll-none ">
      <h2 className="flex justify-center font-semibold text-3xl my-3">Available Boardgames</h2>
      <p className="flex text-sm justify-center">{"*Please contact our staff if there is something you couldn't found here!"}</p>
      {boardgames.map((boardgame, index) => (
        <BoardgameItem key={index} boardgame={boardgame} />
      )
      
    )}
    </div>
  )
}

