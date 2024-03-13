import { useState, createContext } from 'react';
import Cell from './Cell';

export const GridContext = createContext();

function Grid() {
  const [cells, setCells] = useState([false, false, false, false]);
  
  const toggleCell = index => {
    const newCells = [...cells];
    newCells[index] = !newCells[index];
    setCells(newCells);
  };

  return (
    <GridContext.Provider value={{ cells, toggleCell }}>
      <div style={{ fontWeight: 'bold' }}>
        Count: {cells.filter(c => c).length}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '204px' }}>
        {cells.map((_, index) => (
          <Cell key={index} index={index} />
        ))}
      </div>
    </GridContext.Provider>
  );
}

export default Grid;
