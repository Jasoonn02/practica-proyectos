import { Square } from "./Square";

// eslint-disable-next-line react/prop-types
export function Board ({board, updateBoard}){
    return(
        <div>
            <section className="game">
        {board.map((square, index) => {
          return (
            <Square
             key={index}
             index={index}
             updateBoard={updateBoard}
             >
              {square}
            </Square>
          );
        })}
      </section>
        </div>
    )
}