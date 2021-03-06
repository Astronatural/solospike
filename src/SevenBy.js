import React, { useEffect, useState } from 'react';
import './SevenBy.css';

function SevenBy() {

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
    
    //  affect G1->G7 *** 42-48
    function moveRow7R(grid) {
        for (let i = 42; i < 49; i++) {
            if ((grid[i].position) > 41) {
                grid[i].position += 1;
            } if (grid[i].position > 48) {
                grid[i].position = 42;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect G1->G7 *** 42-48
    function moveRow7L(grid) {
        for (let i = 42; i < 49; i++) {
            if ((grid[i].position) > 41) {
                grid[i].position -= 1;
            } if (grid[i].position < 42) {
                grid[i].position = 48;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }
    
    //  affect F1->F7 GTG 35-41
    function moveRow6R(grid) {
        for (let i = 35; i < 42; i++) {
            if ((grid[i].position) > 34) {
                grid[i].position += 1;
            } if (grid[i].position > 41) {
                grid[i].position = 35;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect F1->F7 GTG 35-41
    function moveRow6L(grid) {
        for (let i = 35; i < 42; i++) {
            if ((grid[i].position) > 34) {
                grid[i].position -= 1;
            } if (grid[i].position < 35) {
                grid[i].position = 41;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect E1->E7 GTG 28-34
        function moveRow5R(grid) {
        for (let i = 0; i < 35; i++) {
            if ((grid[i].position) > 27) {
                grid[i].position += 1;
            } if (grid[i].position > 34) {
                grid[i].position = 28;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect E1->E7 GTG 28-34
       function moveRow5L(grid) {
        for (let i = 28; i < 35; i++) {
            if ((grid[i].position) > 27) {
                grid[i].position -= 1;
            } if (grid[i].position < 28) {
                grid[i].position = 34;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect C1->C7 GTG 14-20
    function moveRow3R(grid) {
        for (let i = 14; i < 21; i++) {
            if ((grid[i].position) > 13) {
                grid[i].position += 1;
            } if (grid[i].position > 20) {
                grid[i].position = 14;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect C1->C7 GTG 14-20
    function moveRow3L(grid) {
        for (let i = 14; i < 21; i++) {
            if ((grid[i].position) > 13) {
                grid[i].position -= 1;
            } if (grid[i].position < 14) {
                grid[i].position = 20;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect B1->B7 GTG 7-13
    function moveRow2R(grid) {
        for (let i = 7; i < 14; i++) {
            if ((grid[i].position) > 6) {
                grid[i].position += 1;
            } if (grid[i].position > 13) {
                grid[i].position = 7;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect B1->B7 GTG 7-13
    function moveRow2L(grid) {
        for (let i = 7; i < 14; i++) {
            if ((grid[i].position) > 6) {
                grid[i].position -= 1;
            } if (grid[i].position < 7) {
                grid[i].position = 13;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A1->A7 GTG 0-6
    function moveRow1R(grid) {
        for (let i = 0; i < 7; i++) {
            if ((grid[i].position) < 7) {
                grid[i].position += 1;
            } if (grid[i].position > 6) {
                grid[i].position = 0;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A1->A7 GTG 0-6
    function moveRow1L(grid) {
        for (let i = 0; i < 7; i++) {
            if ((grid[i].position) < 7) {
                grid[i].position -= 1;
            } if (grid[i].position < 0) {
                grid[i].position = 6;
            }
        }
        console.log('at end 1R', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A7->G7 GTG  6->48
    function moveCol7Up(grid) {
        for (let i = 0; i < 49; i++) {
            if ((grid[i].position +1) % 7 === 0) {
                grid[i].position -= 7;
            } if ((grid[i].position) < 0) {
                grid[i].position = 48;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A7->G7 GTG  6->48
    function moveCol7Dn(grid) {
        for (let i = 0; i < 49; i++) {
            if ((grid[i].position +1) % 7 === 0) {
                grid[i].position += 7;
            } if ((grid[i].position) > 48) {
                grid[i].position = 6;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A6->G6  GTG  5->47
    function moveCol6Up(grid) {
        for (let i = 0; i < 48; i++) {
            if ((grid[i].position - 5) % 7 === 0) {
                grid[i].position -= 7;
            } if ((grid[i].position) < 0) {
                grid[i].position = 47;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A6->G6 GTG  5->47
    function moveCol6Dn(grid) {
        for (let i = 0; i < 48; i++) {
            if ((grid[i].position - 5) % 7 === 0) {
                grid[i].position += 7;
            } if ((grid[i].position) > 47) {
                grid[i].position = 5;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A5->G5  GTG  4->46
    function moveCol5Up(grid) {
        for (let i = 0; i < 47; i++) {
            if ((grid[i].position - 4) % 7 === 0) {
                grid[i].position -= 7;
            } if ((grid[i].position) < 0) {
                grid[i].position = 46;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A5->G5 GTG  4->46
    function moveCol5Dn(grid) {
        for (let i = 0; i < 46; i++) {
            if ((grid[i].position - 4) % 7 === 0) {
                grid[i].position += 7;
            } if ((grid[i].position) > 45) {
                grid[i].position = 4;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A3->G3  GTG
    function moveCol3Up(grid) {
        for (let i = 0; i < 45; i++) {
            if ((grid[i].position -2) % 7 === 0) {
                grid[i].position -= 7;
            } if ((grid[i].position) < 0) {
                grid[i].position = 44;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    
    //  affect A3->G3 GTG
    function moveCol3Dn(grid) {
        for (let i = 0; i < 45; i++) {
            if ((grid[i].position - 2) % 7 === 0) {
                grid[i].position += 7;
            } if ((grid[i].position) > 44) {
                grid[i].position = 2;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }


    //  affect A2->G2  GTG
    function moveCol2Up(grid) {
        for (let i = 0; i < 44; i++) {
            if ((grid[i].position - 1) % 7 === 0) {
                grid[i].position -= 7;
            } if ((grid[i].position) < 0) {
                grid[i].position = 43;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }


    //  affect A2->G2  GTG
    function moveCol2Dn(grid) {
        for (let i = 0; i < 44; i++) {
            if ((grid[i].position - 1) % 7 === 0) {
                grid[i].position += 7;
            } if ((grid[i].position) > 43) {
                grid[i].position = 1;
            }
        }
        console.log('at end', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A1->G1  GTG
    function moveCol1Up(grid) {
        for (let i = 0; i < Object.keys(grid).length; i++) {
            if ((grid[i].position) % 7 === 0) {
                grid[i].position -= 7;
            } if ((grid[i].position) < 0) {
                grid[i].position = 42;
            }
        }
        console.log('at end 1up', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

    //  affect A1->G1  GTG
    function moveCol1Dn(grid) {
        console.log(Object.keys(grid).length);
        for (let i = 0; i < 42; i++) {
            if ((grid[i].position) % 7 === 0 || (grid[i].position) === 0) {
                grid[i].position += 7;
            } if ((grid[i].position) >= 42) {
                grid[i].position = 0;
            }
        }
        console.log('at end 1Dn', grid);
        grid.sort(function (a, b) {
            return a.position - b.position;
        });
        setGrid([...grid]);
    }

 

    return (
        <>
            <p>Bear Conveyor Park</p>
            <div className="button-container">
                <button onClick={() => moveCol1Up(grid)}>moveCol1Up</button>
                <button onClick={() => moveCol1Dn(grid)}>moveCol1Dn</button>

                <button onClick={() => moveCol2Up(grid)}>moveCol2Up</button>
                <button onClick={() => moveCol2Dn(grid)}>moveCol2Dn</button>

                <button onClick={() => moveCol3Up(grid)}>moveCol3Up</button>
                <button onClick={() => moveCol3Dn(grid)}>moveCol3Dn</button>



                <button onClick={() => moveCol5Up(grid)}>moveCol5Up</button>
                <button onClick={() => moveCol5Dn(grid)}>moveCol5Dn</button>

                <button onClick={() => moveCol6Up(grid)}>moveCol6Up</button>
                <button onClick={() => moveCol6Dn(grid)}>moveCol6Dn</button>

                <button onClick={() => moveCol7Up(grid)}>moveCol7Up</button>
                <button onClick={() => moveCol7Dn(grid)}>moveCol7Dn</button>



                 <button onClick={() => moveRow1R(grid)}>moveRow1R</button>
                <button onClick={() => moveRow1L(grid)}>moveRow1L</button>

                <button onClick={() => moveRow2R(grid)}>moveRow2R</button>
                <button onClick={() => moveRow2L(grid)}>moveRow2L</button>

                 <button onClick={() => moveRow3R(grid)}>moveRow3R</button>
                <button onClick={() => moveRow3L(grid)}>moveRow3L</button>



                <button onClick={() => moveRow5R(grid)}>moveRow5R</button>
                <button onClick={() => moveRow5L(grid)}>moveRow5L</button>

                <button onClick={() => moveRow6R(grid)}>moveRow6R</button>
                <button onClick={() => moveRow6L(grid)}>moveRow6L</button>

                 <button onClick={() => moveRow7R(grid)}>moveRow7R</button>
                <button onClick={() => moveRow7L(grid)}>moveRow7L</button>

            </div>

            <div className="bear-container">
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