import SaturnIcon from '@/components/icons/saturn-icon';

interface SaturnLoaderProps {
  size?: number;
  message?: string;
}

export default function SaturnLoader({ size = 64, message }: SaturnLoaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-4">
      <SaturnIcon
        className="text-primary animate-spin"
        style={{
          animationDuration: '2s',
          width: `clamp(30px, ${size}px, 80px)`,
          height: `clamp(30px, ${size}px, 80px)`
        }}
      />
      {message && <p className="text-neutral-300 text-sm">{message}</p>}
    </div>
  );
}
