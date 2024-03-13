import { useContext } from 'react';
import { GridContext } from './Grid';
import PropTypes from 'prop-types';

function Cell({ index }) {
  const { cells, toggleCell } = useContext(GridContext);
  const isOn = cells[index];
  const style = {
    width: '100px',
    height: '100px',
    border: '1px solid grey',
    backgroundColor: isOn ? 'black' : 'white',
  };

  Cell.propTypes = {
    index: PropTypes.number.isRequired,
  };

  return <div style={style} onClick={() => toggleCell(index)}></div>;
}

export default Cell;