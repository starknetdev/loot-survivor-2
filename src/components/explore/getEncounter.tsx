import { Encounter, EncounterPosition, Grid, Position } from "@/types";
import { getRandomInt } from "@/utils";

interface DetermineNextEncounterProps {
  grid: Grid;
  encounters: EncounterPosition[];
  columns: number;
}

export const determineNextEncounterRandom = ({
  grid,
  encounters,
  columns,
}: DetermineNextEncounterProps): Position => {
  // Assuming you have a last encounter to base your logic on
  const lastEncounter =
    encounters.length > 0 ? encounters[encounters.length - 1] : null;
  let options: Position[] = [];

  if (lastEncounter) {
    const { nextRow, nextCol } = lastEncounter;

    // Option to move left, if within bounds and the position is empty
    if (
      nextCol > 0 &&
      (!grid[nextRow] || grid[nextRow][nextCol - 1] === null)
    ) {
      options.push({ nextRow, nextCol: nextCol - 1 });
    }

    // Option to move right, if within bounds and the position is empty
    if (
      nextCol < columns - 1 &&
      (!grid[nextRow] || grid[nextRow][nextCol + 1] === null)
    ) {
      options.push({ nextRow, nextCol: nextCol + 1 });
    }

    // Always add the option to move down, ensuring we're staying in the same column
    // Check if there's a next row and if the current column in the next row is empty
    if (!grid[nextRow + 1] || grid[nextRow + 1][nextCol] === null) {
      options.push({ nextRow: nextRow + 1, nextCol }); // Move down directly below
    }
  } else {
    // If there are no encounters, start at the top left
    options.push({ nextRow: 0, nextCol: 0 });
  }

  // If options are available, randomly select one; otherwise, default to adding a new row below
  if (options.length > 0) {
    return options[getRandomInt(options.length)];
  } else {
    // This case should theoretically never be hit due to the above logic,
    // but it's a safe fallback to avoid errors
    return {
      nextRow: lastEncounter ? lastEncounter.nextRow + 1 : 0,
      nextCol: lastEncounter ? lastEncounter.nextCol : 0,
    };
  }
};

export const determineNextEncounter = ({
  grid,
  encounters,
  columns,
}: DetermineNextEncounterProps) => {
  // Assuming you have a last encounter to base your logic on
  const lastEncounter =
    encounters.length > 0 ? encounters[encounters.length - 1] : null;

  if (lastEncounter) {
    const { nextRow, nextCol } = lastEncounter;

    // Option to move left, if within bounds and the position is empty
    if (
      nextCol > 0 &&
      (!grid[nextRow] || grid[nextRow][nextCol - 1] === null)
    ) {
      return {
        nextRow: nextRow,
        nextCol: nextCol - 1,
      };
    }

    // Option to move right, if within bounds and the position is empty
    if (
      nextCol < columns - 1 &&
      (!grid[nextRow] || grid[nextRow][nextCol + 1] === null)
    ) {
      return {
        nextRow: nextRow,
        nextCol: nextCol + 1,
      };
    }

    // Always add the option to move down, ensuring we're staying in the same column
    // Check if there's a next row and if the current column in the next row is empty
    if (!grid[nextRow + 1] || grid[nextRow + 1][nextCol] === null) {
      return {
        nextRow: nextRow + 1,
        nextCol: nextCol,
      };
    } else {
      return {
        nextRow: nextRow + 1,
        nextCol: nextCol,
      };
    }
  } else {
    // If there are no encounters, start at the top left
    return {
      nextRow: 0,
      nextCol: 0,
    };
  }
};

const updateGridWithEncounter = (
  grid: Grid,
  encounters: EncounterPosition[]
): Grid => {
  // Clone the current grid to avoid direct mutations
  let newGrid: Grid = grid.map((row) => [...row]);

  // Process each encounter, ensuring the grid is updated accordingly
  encounters.forEach((encounter) => {
    const { nextRow, nextCol, value, animate } = encounter;

    // Check if we need to add a new row
    if (nextRow >= newGrid.length) {
      // Add new rows as needed to reach the desired nextRow
      while (newGrid.length <= nextRow) {
        newGrid.push(Array(3).fill(null)); // Assuming a fixed width of 3 columns for new rows
      }
    }

    // Update the specified cell with the new encounter
    // This assumes the grid has been expanded to accommodate the nextRow and nextCol
    if (!newGrid[nextRow]) newGrid[nextRow] = Array(3).fill(null); // Ensure the row exists
    newGrid[nextRow][nextCol] = { value, animate };
  });

  return newGrid;
};

interface AddEncounterProps {
  encounter: number;
  grid: Grid;
  setGrid: (value: Grid) => void;
  encounters: EncounterPosition[];
  setEncounters: (value: EncounterPosition[]) => void;
}

export const addEncounter = ({
  encounter,
  grid,
  setGrid,
  encounters,
  setEncounters,
}: AddEncounterProps): void => {
  const nextEncounterPosition = determineNextEncounter({
    grid,
    encounters,
    columns: 3,
  });
  let newEncounters = [
    ...encounters,
    { ...nextEncounterPosition, value: encounter, animate: true },
  ];
  let newGrid = updateGridWithEncounter(grid, newEncounters);
  setGrid(newGrid);
  setEncounters(newEncounters);
};
