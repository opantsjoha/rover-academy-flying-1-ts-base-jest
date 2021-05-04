import { generateLife } from "../main/game-of-life";

describe('Game of Life', ()=>{

  // 1 => <2 || >3 => 0
  // 1 => 2 || 3 => 1
  // 0 => 3 => 1

  // gen 0 - evaluate
  // [1][0][0]
  // [0][0][0]
  // [1][1][1]


  describe('when surrounded by fewer than 2 alive neighbours',()=>{
    it('middle cell should die', ()=>{
      const life = generateLife([[0,0,0],[0,1,0],[0,0,0]]);
      const expectedLifeResult = [[0,0,0],[0,0,0],[0,0,0]];
      expect(life).toEqual(expectedLifeResult);
    })
    it('top left cell should die', ()=>{
      const life = generateLife([[1,0,0],[0,0,0],[1,1,1]]);
      const expectedLifeResult = [[0,0,0],[0,0,0],[0,1,0]];
      expect(life).toEqual(expectedLifeResult);
    })
  })

  it('should die if surrounded by more than 3 alive neighbours',()=>{
    const life = generateLife([[0,0,1],[1,1,1],[1,0,0]]);
    const expectedLifeResult = [[0,0,0],[0,0,0],[0,0,0]];
    expect(life).toEqual(expectedLifeResult);
  })

  it('should stay alive if surrounded by 2 alive neighbours',()=>{
    const life = generateLife([[0,0,0],[1,1,1],[0,0,0]]);
    const expectedLifeResult = [[0,0,0],[1,1,1],[0,0,0]];
    expect(life).toEqual(expectedLifeResult);
  })

  it('should stay alive if surrounded by 3 alive neighbours',()=>{
    const life = generateLife([[0,0,0],[1,1,1],[1,0,0]]);
    const expectedLifeResult = [[0,0,0],[1,1,1],[1,0,0]];
    expect(life).toEqual(expectedLifeResult);
  })

  it('should come to life if surrounded by 3 alive neighbours',()=>{
    const life = generateLife([[0,0,0],[1,0,1],[1,0,0]]);
    const expectedLifeResult = [[0,0,0],[1,1,1],[1,0,0]];
    expect(life).toEqual(expectedLifeResult);
  })
})
