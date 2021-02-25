import React, { useEffect, useState } from 'react';
import 'SevenBy.css';

function SevenBy () {

    useEffect(() => {
    }, []);

    let [grid, setGrid] = useState([
        { name: "A1", position: 0 }, { name: "A2", position: 1 }, { name: "A3", position: 2 }, { name: "A4", position: 3 }, { name: "A5", position: 4 }, { name: "A6", position: 5 }, { name: "A7", position: 6 }, 
        { name: "B1", position: 7 }, { name: "B2", position: 8 }, { name: "B3", position: 9 }, { name: "B4", position: 10 }, { name: "B5", position: 11 }, { name: "B6", position: 12 }, { name: "B7", position: 13 },
        { name: "C1", position: 14 }, { name: "C2", position: 15 }, { name: "C3", position: 16 }, { name: "C4", position: 17 }, { name: "C5", position: 18 }, { name: "C6", position: 19 }, { name: "C7", position: 20 },
        { name: "D1", position: 21 }, { name: "D2", position: 22 }, { name: "D3", position: 23 }, { name: "D4", position: 24 }, { name: "D5", position: 25 }, { name: "D6", position: 26 }, { name: "D7", position: 27 },
        { name: "E1", position: 28 }, { name: "E2", position: 29 }, { name: "E3", position: 30 }, { name: "E4", position: 31 }, { name: "E5", position: 32 }, { name: "E6", position: 33 }, { name: "E7", position: 34 },
        { name: "F1", position: 35 }, { name: "F2", position: 36 }, { name: "F3", position: 37 }, { name: "F4", position: 38 }, { name: "F5", position: 39 }, { name: "F6", position: 40 }, { name: "F7", position: 41 },
        { name: "G1", position: 42 }, { name: "G2", position: 43 }, { name: "G3", position: 44 }, { name: "G4", position: 45 }, { name: "G5", position: 46 }, { name: "G6", position: 47 }, { name: "G7", position: 48 }
    ]);

    return (
        <>
            <p>Gridland Conveyor Park</p>
            <div className="button-container">
                {/* <button onClick={() => moveCol1Dn(grid)}>moveCol1Dn</button>
                <button onClick={() => moveCol1Up(grid)}>moveCol1Up</button>

                <button onClick={() => moveCol2Dn(grid)}>moveCol1Dn</button>
                <button onClick={() => moveCol2Up(grid)}>moveCol1Up</button>

                <button onClick={() => moveCol3Dn(grid)}>moveCol3Dn</button>
                <button onClick={() => moveCol3Up(grid)}>moveCol3Up</button>


                <button onClick={() => moveCol5Dn(grid)}>moveCol1Dn</button>
                <button onClick={() => moveCol5Up(grid)}>moveCol1Up</button>

                <button onClick={() => moveCol6Dn(grid)}>moveCol1Dn</button>
                <button onClick={() => moveCol6Up(grid)}>moveCol1Up</button>

                <button onClick={() => moveCol7Dn(grid)}>moveCol1Dn</button>
                <button onClick={() => moveCol7Up(grid)}>moveCol1Up</button>

                

                <button onClick={() => moveRow1R(grid)}>moveRow1R</button>
                <button onClick={() => moveRow1L(grid)}>moveRow1L</button>

                <button onClick={() => moveRow2R(grid)}>moveRow1R</button>
                <button onClick={() => moveRow2L(grid)}>moveRow1L</button>

                <button onClick={() => moveRow3R(grid)}>moveRow3R</button>
                <button onClick={() => moveRow3L(grid)}>moveRow3L</button>



                <button onClick={() => moveRow5R(grid)}>moveRow1R</button>
                <button onClick={() => moveRow5L(grid)}>moveRow1L</button>

                <button onClick={() => moveRow6R(grid)}>moveRow1R</button>
                <button onClick={() => moveRow6L(grid)}>moveRow1L</button>

                <button onClick={() => moveRow7R(grid)}>moveRow1R</button>
                <button onClick={() => moveRow7L(grid)}>moveRow1L</button> */}

            </div>

            <div className="grid-container">
                {grid.map(tile => {
                    return (
                        <div key={tile.position}>{tile.name}</div>
                    )
                })}
            </div>
        </>
    )
}

export default SevenBy;