class Game{
    constructor() {
        this.gameArray = this.resetGame();
    }

    winGame(tile) {
        console.log(`${tile.type} won!`);
        this.resetGame();
    }
    
    resetGame = () => {
        return this.gameArray = [
            ["-","-","-"],
            ["-","-","-"],
            ["-","-","-"],
        ];
    }
}

class Tile{
    constructor(type,row,column) {
        this.type = type
        this.row = row
        this.column = column
    }
}

function placeTile(tileType, row, column) {
    tile = new Tile(tileType, row, column);

    newGame.gameArray[tile.row][tile.column] = tile.type;

    winCheck.allCheck(tile)
}


class winCheck {

    static allCheck(tile){

        if (winCheck.horizontalCheck(tile) || winCheck.verticalCheck(tile) || winCheck.leftDiagonalCheck(tile) || winCheck.rightDiagonalCheck(tile)) {
            newGame.winGame(tile)
        }
    }

    static horizontalCheck(tile) {
        const oneRow = newGame.gameArray[tile.row]

        for (const element of oneRow) {
            if (element === tile.type) {
                continue
            }
            return false
        }
        return true
    }

    static verticalCheck(tile) {
        const oneCol = newGame.gameArray.map(oneRow => oneRow[tile.column])

        for (const element of oneCol) {
            if (element === tile.type) {
                continue
            }
            return false
        }
        return true
    }

    static rightDiagonalCheck(tile) {
        const rightDiagonal = newGame.gameArray.map((row,index) => row[index]);

        for (const element of rightDiagonal) {
            if (element === tile.type) {
                continue
            }
            return false
        }
        return true
    }

    static leftDiagonalCheck(tile) {
        const leftDiagonal = newGame.gameArray.map((row,index) => row[2 - index]);

        for (const element of leftDiagonal) {
            if (element === tile.type) {
                continue
            }
            return false
        }
        return true
    }
}



newGame = new Game();
console.log("HI");

placeTile("O",0,0);
placeTile("O",2,0);
placeTile("O",1,0);

console.log(newGame.gameArray)

