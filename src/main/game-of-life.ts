export function generateLife(currentGenGrid: number[][]) {
  const endAllLife = [[0,0,0],
                    [0,0,0],
                    [0,0,0]];

  const omega = currentGenGrid[1][1];
  const nextGenGrid = evaluateGenGrid(currentGenGrid);
  const aliveNeighbours = findAllAliveNeighbours(currentGenGrid)
  if(omega === 0 && aliveNeighbours.length === 3) {
    const nextGenGrid = currentGenGrid;
    nextGenGrid[1][1] = 1;
    return nextGenGrid;
  };
  if(aliveNeighbours.length < 2 || aliveNeighbours.length > 3) return endAllLife;
  if(aliveNeighbours.length === 2 || aliveNeighbours.length === 3) return currentGenGrid;
}

function findAllAliveNeighbours(grid: number[][]) {
  const allNeighbours =  [grid[0][0], grid[0][1], grid[0][2], grid[1][0], grid[1][2], grid[2][0], grid[2][1], grid[2][2]];
  return allNeighbours.filter(cell => cell === 1);
}

function evaluateGenGrid(currentGenGrid: number[][]) {

}