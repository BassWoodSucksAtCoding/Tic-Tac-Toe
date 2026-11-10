class Game{
    constructor() {
        this.gameArray = this.resetGame();
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
    console.log(winCheck.horizontalCheck(tile))
}

class winCheck {
    static horizontalCheck(tile) {
        const oneRow = newGame.gameArray[tile.row]

        for (const column of oneRow) {
            if (column === tile.type) {
                continue
            }
            return false
        }
        return true
    }
}


newGame = new Game();
console.log("HI");

placeTile("O",1,1);
placeTile("X",1,2);
placeTile("O",1,2);
placeTile("X",2,2);
placeTile("O", 1,0);

console.log(newGame.gameArray)

