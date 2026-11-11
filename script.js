class Game{
    static gameArray = Game.resetGame();
    static round = 0;

    static winGame(tile) {
        console.log(`${tile.type} won!`);
        Game.resetGame();
    }
    
    static resetGame() {
        Game.round = 0;
        return Game.gameArray = [
            ["-","-","-"],
            ["-","-","-"],
            ["-","-","-"],
        ];
    }
}

class Tile{
    constructor(type,row,column) {
        this.type = type;
        this.row = row;
        this.column = column;
    }
}

function placeTile(row, column) {
    tileType = Game.round % 2 === 0 ? "X" : "O";
    const tile = new Tile(tileType, row, column);
    console.log(tile.type)
    if (Game.gameArray[tile.row][tile.column] !== "-") {
        Game.gameArray[tile.row][tile.column] = tile.type;
    }
    console.log(Game.gameArray)
    
    winCheck.allCheck(tile);
}


class winCheck {

    static allCheck(tile){

        if (winCheck.horizontalCheck(tile) || winCheck.verticalCheck(tile) || winCheck.leftDiagonalCheck(tile) || winCheck.rightDiagonalCheck(tile)) {
            Game.winGame(tile);
        }
    }

    static horizontalCheck(tile) {
        const oneRow = Game.gameArray[tile.row];

        for (const element of oneRow) {
            if (element === tile.type) {
                continue;
            }
            return false;
        }
        return true;
    }

    static verticalCheck(tile) {
        const oneCol = Game.gameArray.map(oneRow => oneRow[tile.column]);

        for (const element of oneCol) {
            if (element === tile.type) {
                continue;
            }
            return false;
        }
        return true;
    }

    static rightDiagonalCheck(tile) {
        const rightDiagonal = Game.gameArray.map((row,index) => row[index]);

        for (const element of rightDiagonal) {
            if (element === tile.type) {
                continue;
            }
            return false;
        }
        return true;
    }

    static leftDiagonalCheck(tile) {
        const leftDiagonal = Game.gameArray.map((row,index) => row[2 - index]);

        for (const element of leftDiagonal) {
            if (element === tile.type) {
                continue;
            }
            return false;
        }
        return true;
    }
}


// function playGame() {
//     Game.round += 1;

//     while (Game.round !== 0) {
//         Game.round += 1;
//         placeTile(Number(row), Number(column));

//         console.log(Game.gameArray);
//     }
// }

function alternate() {
    Game.round += 1;
    return Game.round % 2 === 0 ? "Images/x.svg" : "Images/o.svg";
}


const tileDivs = document.querySelectorAll("#board > div");

tileDivs.forEach((tile, index) => {
    tile.addEventListener('click', event => {
        const image = tile.querySelector("img");
        console.log(index);
        if (image.src === "") {
            image.src = alternate();
        }

        row = Math.floor(index/3)
        column = index - 3 * row
        placeTile(row, column)
    })
})