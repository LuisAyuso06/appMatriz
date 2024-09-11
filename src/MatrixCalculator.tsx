import React, { useState } from 'react';
import MatrixInput from './MatrixInput';

const createEmptyMatrix = (size: number) => {
  return Array.from({ length: size }, () => Array(size).fill(0));
};

const addMatrices = (matrixA: number[][], matrixB: number[][]) => {
  return matrixA.map((row, i) => row.map((val, j) => val + matrixB[i][j]));
};

const subtractMatrices = (matrixA: number[][], matrixB: number[][]) => {
  return matrixA.map((row, i) => row.map((val, j) => val - matrixB[i][j]));
};

const multiplyMatrices = (matrixA: number[][], matrixB: number[][]) => {
  const size = matrixA.length;
  const result = createEmptyMatrix(size);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return result;
};

const MatrixCalculator: React.FC = () => {
  const [size, setSize] = useState(3);
  const [matrixA, setMatrixA] = useState(createEmptyMatrix(size));
  const [matrixB, setMatrixB] = useState(createEmptyMatrix(size));
  const [resultMatrix, setResultMatrix] = useState(createEmptyMatrix(size));

  const handleSizeChange = (newSize: number) => {
    setSize(newSize);
    setMatrixA(createEmptyMatrix(newSize));
    setMatrixB(createEmptyMatrix(newSize));
    setResultMatrix(createEmptyMatrix(newSize));
  };

  const handleAddition = () => setResultMatrix(addMatrices(matrixA, matrixB));
  const handleSubtraction = () => setResultMatrix(subtractMatrices(matrixA, matrixB));
  const handleMultiplication = () => setResultMatrix(multiplyMatrices(matrixA, matrixB));

  return (
    <div>
      <h1>Calculadora de Matrices</h1>

      <div>
        <label>Tamaño de Matriz:</label>
        <select value={size} onChange={(e) => handleSizeChange(Number(e.target.value))}>
          <option value={1}>1x1</option>
          <option value={2}>2x2</option>
          <option value={3}>3x3</option>
        </select>
      </div>

      <div>
        <h3>Matriz A</h3>
        <MatrixInput matrix={matrixA} setMatrix={setMatrixA} size={size} />
      </div>

      <div>
        <h3>Matriz B</h3>
        <MatrixInput matrix={matrixB} setMatrix={setMatrixB} size={size} />
      </div>

      <div>
        <button onClick={handleAddition}>A + B</button>
        <button onClick={handleSubtraction}>A - B</button>
        <button onClick={handleMultiplication}>A × B</button>
      </div>

      <div>
        <h3>Resultado</h3>
        {resultMatrix.map((row, i) => (
          <div key={i}>
            {row.map((val, j) => (
              <span key={j}>{val} </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatrixCalculator;
