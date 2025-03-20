class Grid2D {
  /**
   * Creates a new 2D grid
   * @param {number} rows - Number of rows
   * @param {number} cols - Number of columns
   * @param {*} defaultValue - Default value for grid cells (optional)
   */
  constructor(rows, cols, defaultValue = null) {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array(rows).fill().map(() => Array(cols).fill(defaultValue));
  }

  /**
   * Checks if coordinates are valid
   * @param {number} row - Row index
   * @param {number} col - Column index
   * @returns {boolean} - Whether coordinates are valid
   */
  isValidPosition(row, col) {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  /**
   * Gets value at specified position
   * @param {number} row - Row index
   * @param {number} col - Column index
   * @returns {*} - Value at position or undefined if invalid
   */
  get(row, col) {
    if (!this.isValidPosition(row, col)) return undefined;
    return this.grid[row][col];
  }

  /**
   * Sets value at specified position
   * @param {number} row - Row index
   * @param {number} col - Column index
   * @param {*} value - Value to set
   * @returns {boolean} - Whether operation was successful
   */
  set(row, col, value) {
    if (!this.isValidPosition(row, col)) return false;
    this.grid[row][col] = value;
    return true;
  }

  /**
   * Gets all neighbors of a cell (orthogonal and diagonal)
   * @param {number} row - Row index
   * @param {number} col - Column index
   * @param {boolean} includeDiagonals - Whether to include diagonal neighbors
   * @returns {Array} - Array of [row, col, value] for each neighbor
   */
  getNeighbors(row, col, includeDiagonals = false) {
    const neighbors = [];
    const directions = [
      [-1, 0], [1, 0], [0, -1], [0, 1] // Up, Down, Left, Right
    ];

    if (includeDiagonals) {
      directions.push([-1, -1], [-1, 1], [1, -1], [1, 1]); // Diagonals
    }

    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;

      if (this.isValidPosition(newRow, newCol)) {
        neighbors.push([newRow, newCol, this.grid[newRow][newCol]]);
      }
    }

    return neighbors;
  }

  /**
   * Fills the entire grid with a value
   * @param {*} value - Value to fill the grid with
   */
  fill(value) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.grid[row][col] = value;
      }
    }
  }

  /**
   * Creates a string representation of the grid
   * @returns {string} - String representation
   */
  toString() {
    return this.grid.map(row => row.join(' ')).join('\n');
  }

  /**
   * Applies a function to each cell in the grid
   * @param {Function} callback - Function to apply (receives value, row, col)
   */
  forEach(callback) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        callback(this.grid[row][col], row, col);
      }
    }
  }

  /**
   * Creates a new grid by applying a function to each cell
   * @param {Function} callback - Function to apply (receives value, row, col)
   * @returns {Grid2D} - New transformed grid
   */
  map(callback) {
    const newGrid = new Grid2D(this.rows, this.cols);
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        newGrid.grid[row][col] = callback(this.grid[row][col], row, col);
      }
    }
    return newGrid;
  }

    /**
   * Draws the grid as nested divs in a container element
   * @param {string|HTMLElement} container - Container element or its ID
   * @param {Function} cellRenderer - Optional function to customize cell content (receives value, row, col)
   * @param {Object} options - Optional rendering options
   * @param {string} options.gridClass - CSS class for the grid container (default: 'grid-container')
   * @param {string} options.cellClass - CSS class for each cell (default: 'grid-cell')
   * @param {number} options.cellSize - Size of each cell in pixels (default: 40)
   */
  draw(container, cellRenderer = null, options = {}) {
    // Default options
    const {
      gridClass = 'grid-container',
      cellClass = 'grid-cell',
      cellSize = 40
    } = options;

    // Get container element
    const containerElement = typeof container === 'string' 
      ? document.getElementById(container) 
      : container;

    if (!containerElement) {
      console.error('Container element not found');
      return;
    }

    // Clear container
    containerElement.innerHTML = '';

    // Create grid container
    const gridElement = document.createElement('div');
    gridElement.className = gridClass;
    gridElement.style.display = 'grid';
    gridElement.style.gridTemplateRows = `repeat(${this.rows}, ${cellSize}px)`;
    gridElement.style.gridTemplateColumns = `repeat(${this.cols}, ${cellSize}px)`;
    gridElement.style.gap = '2px';

    // Create cells
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        const cellValue = this.grid[row][col];
        const cellElement = document.createElement('div');

        // Set cell properties
        cellElement.id = `grid-${row}-${col}`;
        cellElement.className = cellClass;
        cellElement.style.width = '100%';
        cellElement.style.height = '100%';
        cellElement.dataset.row = row;
        cellElement.dataset.col = col;

        // Apply custom cell rendering if provided
        if (cellRenderer && typeof cellRenderer === 'function') {
          const content = cellRenderer(cellValue, row, col);
          if (typeof content === 'string') {
            cellElement.innerHTML = content;
          } else if (content instanceof HTMLElement) {
            cellElement.appendChild(content);
          }
        } else {
          // Default rendering
          cellElement.textContent = cellValue !== null ? cellValue : '';
        }

        // Add cell to grid
        gridElement.appendChild(cellElement);
      }
    }

    // Add grid to container
    containerElement.appendChild(gridElement);

    return gridElement;
  }

}
