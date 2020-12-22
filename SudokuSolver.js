const b = null

const board_1 = [
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b]
]
const board_sample1 = [
             [1, b, b, b, b, b, b, b, 3],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, 8, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, 4, b, b],
             [b, b, b, b, b, b, b, b, b],
             [b, 3, b, b, b, b, b, b, b],
             [b, b, b, b, b, b, b, b, 9]
]

const board_sample2 = [
             [1, 2, 3, 4, 5, 6, 7, 8, b],
             [b, b, b, b, b, b, b, b, 1],
             [b, b, b, b, b, b, b, b, 2],
             [b, b, b, b, b, b, b, b, 3],
             [b, b, b, b, b, b, b, b, 4],
             [b, b, b, b, b, b, b, b, 5],
             [b, b, b, b, b, b, b, b, 6],
             [b, b, b, b, b, b, b, b, 7],
             [b, b, b, b, b, b, b, b, 8]
]


const board_impossible = [
             [1, 2, 3, 4, 5, 6, 7, 8, b],
             [b, b, b, b, b, b, b, b, 2],
             [b, b, b, b, b, b, b, b, 3],
             [b, b, b, b, b, b, b, b, 4],
             [b, b, b, b, b, b, b, b, 5],
             [b, b, b, b, b, b, b, b, 6],
             [b, b, b, b, b, b, b, b, 7],
             [b, b, b, b, b, b, b, b, 8],
             [b, b, b, b, b, b, b, b, 9]
]

function solve_board(){
  if(solved(board){
    return board;
  } 
  else{
    const possibilities = nextBoards(boards)
    const validBoards = keepOnlyValid(possibilities)
    return searchForSolution(validBoards)
  }
}

function searchForSolution(boards){
  if(boards.length< 1){
    return false
  } 
  else{
    var first = boards.shift()
    const tryPath = solveFirst(first)
    if(tryPath){
      return tryPath
    } 
    else{
      return searchForSolution(boards)
    }
  }
}

function solved(board){
  for(var i = 0; i<9; i++){
    for(var j = 0; j<9; j++){
      if(board[i][j] == null){
        return false
      }
    }
  }
  return true
}

function nextBoards(board){
  var res = []
  const firstEmpty = findEmptySquare(board)
  if(firstEmpty != undefined){
    const y = firstEmpty[0]
    const x = firstEmpty[1]
    for(var i = 1; i<=9; i++){
      var newBoard = [...board]
      var row = [...newBoard[y]]
      row[x] = i
      newBoard[y] = row
      res.push(newBoard)
    }
        
  }
  return res
}



function findEmptySquare(board){
  for(var i=0; i<9; i++){
    for(var j=0; j<9; j++){
      if(board[i][j] == null){
        return [i, j]
      }
    }
  }
}

function keepOnlyValid(boards){
  return boards.filter((b)=>validBoards(b))
}


function validBoard(board){
  return rowGood(board) && columnGood(board) && boxGood(board)
}

function rowGood(board){
  
}



