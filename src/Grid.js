import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import './Grid.css';


function Grid() {

    useEffect(() => {
    }, []);

    let [grid, setGrid] = useState([
        { name: "A", position: 0 }, { name: "B", position: 1 }, { name: "C", position: 2 },
        { name: "D", position: 3 }, { name: "E", position: 4 }, { name: "F", position: 5 },
        { name: "G", position: 6 }, { name: "H", position: 7 }, { name: "I", position: 8 }
    ]);

// let [turnCount, setTurnCount] = useState(Number);
//     setTurnCount(turnCount + 1);
//     <p>{turnCount}</p>

    let tileArray = [
        { name: "A", position: 0 }, { name: "B", position: 1 }, { name: "C", position: 2 },
        { name: "D", position: 3 }, { name: "E", position: 4 }, { name: "F", position: 5 },
        { name: "G", position: 6 }, { name: "H", position: 7 }, { name: "I", position: 8 }
    ];

    //  affect 2,5,8
    function moveCol3Dn(grid) {
        console.log(Object.keys(grid).length);
        for (let i = 0; i < Object.keys(grid).length; i++) {
            if ((grid[i].position + 1) % 3 === 0) {
                grid[i].position += 3;
            } if ((grid[i].position + 1) > 9) {
                grid[i].position = 2;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect 0,3,6
    function moveCol1Dn(grid) {
        console.log(Object.keys(grid).length);
        for (let i = 0; i < Object.keys(grid).length; i++) {
            if ((grid[i].position) % 3 === 0 || (grid[i].position) === 0) {
                grid[i].position += 3;
            } if ((grid[i].position) === 9) {
                grid[i].position = 0;
            }
        }
        console.log('at end 1Dn', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }


    //  affect 2,5,8
    function moveCol3Up(grid) {
        console.log('at start', grid);
        console.log(Object.keys(grid).length);
        for (let i = 0; i < Object.keys(grid).length; i++) {
            if ((grid[i].position+1) % 3 === 0) {
                grid[i].position -= 3;
            } if ((grid[i].position+1) === 0) {
                grid[i].position = 8;
            }
        }
        console.log('at end 3up', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect 0,3,6
    function moveCol1Up(grid) {
        console.log('at start', grid);
        console.log(Object.keys(grid).length);
        for (let i = 0; i < Object.keys(grid).length; i++) {
            if ((grid[i].position) % 3 === 0) {
                grid[i].position -= 3;
            } if ((grid[i].position) < 0) {
                grid[i].position = 6;
            }
        }
        console.log('at end 1up', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

 

    return (
        <>
            <p>Gridland Conveyor Park</p>
           
            <button onClick={() => moveCol3Dn(grid)}>moveCol3Dn</button>
            <button onClick={() => moveCol3Up(grid)}>moveCol3Up</button>

            <button onClick={() => moveCol1Dn(grid)}>moveCol1Dn</button>
            <button onClick={() => moveCol1Up(grid)}>moveCol1Up</button>


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

export default Grid;

/*
    function moveCol3Up(grid) {
        console.log('at start',grid);
        console.log(Object.keys(grid).length);

        for (let i = 0; i < Object.keys(grid).length; i++) {

            if (grid[i].position % 3 === 0) {
                grid[i].position -= 3;
            } if (grid[i].position = 0) {
                grid[i].position = 9;
            }
        }
        grid.sort(grid.position);
        console.log('at end', grid);
        return
    }

numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

// [1, 2, 3, 4, 5]
className='zone1'
className='zone2'
className='zone3'
className='zone4'
className='zone5'
className='zone6'
className='zone7'
className='zone8'
className='zone9'

      <p>Gridland Conveyor Park</p>
            <div className="grid-container">
                <div style={{ gridArea: 1/1/1/1 }} id='tile1'>1</div>
                <div style={{ gridArea: 1/2/1/2 }} id='tile2'>2</div>
                <div style={{ gridArea: 1/3/1/3 }} id='tile3'>3</div>
                <div style={{ gridArea: 2/1/2/1 }} id='tile4'>4</div>
                <div style={{ gridArea: 2/2/2/2 }} id='tile5'>5</div>
                <div style={{ gridArea: 2/3/2/3 }} id='tile6'>6</div>
                <div style={{ gridArea: 3/1/3/1 }} id='tile7'>7</div>
                <div style={{ gridArea: 3/2/3/2 }} id='tile8'>8</div>
                <div style={{ gridArea: 3/3/3/3 }} id='tile9'>9</div>
            </div>


    const zone1 = "zone1";
    const zone2 = "zone2";
    const zone3 = "zone3";
    const zone4 = "zone4";
    const zone5 = "zone5";
    const zone6 = "zone6";
    const zone7 = "zone7";
    const zone8 = "zone8";
    const zone9 = "zone9";



    const zone1 = { gridArea: 1 / 1 / 1 / 1 };
    const zone2 = { gridArea: 2 / 1 / 2 / 1 };
    const zone3 = { gridArea: 3 / 1 / 3 / 1 };
    const zone4 = { gridArea: 1 / 2 / 1 / 2 };
    const zone5 = { gridArea: 2 / 2 / 2 / 2 };
    const zone6 = { gridArea: 3 / 2 / 3 / 2 };
    const zone7 = { gridArea: 1 / 1 / 3 / 1 };
    const zone8 = { gridArea: 2 / 2 / 3 / 2 };
    const zone9 = { gridArea: 3 / 3 / 3 / 3 };
*/