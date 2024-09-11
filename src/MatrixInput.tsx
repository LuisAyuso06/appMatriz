import React from 'react';

interface MatrixInputProps {
  matrix: number[][];
  setMatrix: React.Dispatch<React.SetStateAction<number[][]>>;
  size: number;
}

const MatrixInput: React.FC<MatrixInputProps> = ({ matrix, setMatrix, size }) => {
  const handleInputChange = (row: number, col: number, value: string) => {
    const newMatrix = matrix.map((r, i) => 
      r.map((c, j) => (i === row && j === col ? Number(value) : c))
    );
    setMatrix(newMatrix);
  };

  return (
    <div>
      {Array.from({ length: size }).map((_, row) => (
        <div key={row}>
          {Array.from({ length: size }).map((_, col) => (
            <input
              key={col}
              type="number"
              value={matrix[row][col]}
              onChange={(e) => handleInputChange(row, col, e.target.value)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MatrixInput;
