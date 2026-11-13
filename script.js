class TileManager {
    static placeTile(tile) {
    
        if (Game.gameArray[tile.row][tile.column] === "-") {
            Game.gameArray[tile.row][tile.column] = tile.type;
        }
        
        
        
        Game.round += 1;
        const tileType = TileManager.alternate();
        Game.changeText(`Round ${Game.round}: ${tileType} turn`);

        winCheck.allCheck(tile);
    }

    static makeTile(index) {
        const row = Number(Math.floor(index/3));
        const column = Number(index - 3 * row);

        const tileType = TileManager.alternate();
        const tile = new Tile(tileType, row, column);

        return tile;
    }

    static alternate() {
        return Game.round % 2 === 0 ? "X" : "O";
    }

    static tileReset() {
        const tileDivs = document.querySelectorAll("#board > div");

        tileDivs.forEach((tile, index) => {
            const image = tile.querySelector("img");

            image.removeAttribute("src")

            tile.addEventListener('click', event => {

                if (image.src === "") {
                    const imageSource = TileManager.alternate();
                    image.src = imageSource === "X" ? "Images/x.svg" : "Images/o.svg";
                }

                const tileObj = TileManager.makeTile(index);
                TileManager.placeTile(tileObj);
            })
        })
    }
}

class Game{
    static gameArray = Game.resetGame();
    static round = 0;

    static winGame(tile) {
        Game.changeText(`${tile.type} won!`);
        // Game.resetGame();
        // ^^ Reset with a button later
    }
    
    static resetGame() {
        Game.round = 0;

        TileManager.tileReset()

        return Game.gameArray = [
            ["-","-","-"],
            ["-","-","-"],
            ["-","-","-"],
        ];
    }

    static changeText(text) {
        const result = document.querySelector("#result");
        result.textContent = text;
    }
}

class Tile{
    constructor(type,row,column) {
        this.type = type;
        this.row = row;
        this.column = column;
    }
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


