'use client';
import React, { useState } from 'react';

const CalculoImc: React.FC = () => {
  const [peso, setPeso] = useState<string>('');
  const [altura, setAltura] = useState<string>('');
  const [resultado, setResultado] = useState<string | null>(null);

  const calcularImc = () => {
    if (!peso || !altura) {
      alert('Por favor, insira seu peso e altura.');
      return;
    }
    const pesoKg: number = parseFloat(peso);
    const alturaMt: number = parseFloat(altura) / 100;

    const imc = pesoKg / (alturaMt * alturaMt);
    setResultado(imc.toFixed(2));
  };

  return (
    <div>
      <h1>Cálculo IMC</h1>
      <div>
        <label>Peso (KG):{peso}</label>
        <input
          type="number"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <div>
        <label>Altura (MT):{altura}</label>
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <button onClick={calcularImc}>Calcular</button>
      {resultado && <p>Seu IMC é: {resultado}</p>}
    </div>
  );
};

export default CalculoImc;
