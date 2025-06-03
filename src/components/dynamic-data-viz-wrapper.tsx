
"use client";

import dynamic from 'next/dynamic';
import SaturnLoader from '@/components/ui/saturn-loader';

const DataVisualizationSectionComponent = dynamic(
  () => import('@/components/sections/data-visualization-section'),
  {
    loading: () => (
      <div className="py-16 md:py-24 bg-neutral-800 flex justify-center items-center min-h-[400px]">
        <SaturnLoader message="Carregando visualizações..." size={48} />
      </div>
    ),
    ssr: false,
  }
);

export default function DynamicDataVizWrapper() {
  return <DataVisualizationSectionComponent />;
}
