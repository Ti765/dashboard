import React from 'react';

interface GradientDisplayProps {
  startColor: string;
  endColor: string;
  angle?: number;
  children?: React.ReactNode;
  className?: string;
}

export default function GradientDisplay({ 
  startColor, 
  endColor, 
  angle = 135, 
  children,
  className 
}: GradientDisplayProps) {
  const gradientStyle = {
    background: `linear-gradient(${angle}deg, ${startColor}, ${endColor})`,
  };

  return (
    <div 
      className={`p-6 rounded-lg shadow-lg ${className}`} 
      style={gradientStyle}
    >
      {children || (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white font-display">Exemplo de Gradiente</h3>
          <p className="text-neutral-200 mt-2">
            Este card usa um gradiente dinâmico de {startColor} para {endColor}.
          </p>
        </div>
      )}
    </div>
  );
}
