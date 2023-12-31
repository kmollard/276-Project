import React from 'react';
import propTypes from 'prop-types';

import {SelectionGrid} from '../components';
import {useNewGridColors} from '../utils/hooks/';
import {shipGridLegend} from '../utils/grid_legends';

const ShipGrid = (props) => {
  const playerShipGrid = props.playerShipGrid;
  const enemyBattleGrid = props.enemyBattleGrid;
  const settings = props.settings;

  useNewGridColors(settings);

  const mergeGrids = React.useCallback((onTop, onBottom) => {
    const mergedGrid = JSON.parse(JSON.stringify(onBottom));
    for (let i = 0; i < onTop.length; i++) {
      for (let j = 0; j < onTop[i].length; j++) {
        if (onTop[i][j] !== null) {
          mergedGrid[i][j] = onTop[i][j];
        }
      }
    }
    return mergedGrid;
  }, []);

  return (
    <>
      <SelectionGrid
        grid={mergeGrids(enemyBattleGrid, playerShipGrid)}
        legend={shipGridLegend}
        squareSize={2}
        squareSpacing={0.5}
        disableGridMarkers={false}
        disableClick={true}
        onClick={() => {}}
      />
    </>
  )
};

ShipGrid.propTypes = {
  playerShipGrid: propTypes.array.isRequired,
  enemyBattleGrid: propTypes.array.isRequired,
  settings: propTypes.object.isRequired,
};

export default ShipGrid;