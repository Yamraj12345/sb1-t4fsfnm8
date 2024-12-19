import React, { useRef, useEffect } from 'react';
import { ImageAdjustments, ImageDimensions } from '../../types/image-editor';
import { applyCanvasFilters } from '../../utils/image-editor/filters';

interface CanvasProps {
  image: string | null;
  adjustments: ImageAdjustments;
  dimensions: ImageDimensions;
  onCanvasReady: (canvas: HTMLCanvasElement) => void;
}

export function Canvas({ image, adjustments, dimensions, onCanvasReady }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!image || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      canvas.width = dimensions.width;
      canvas.height = dimensions.height;
      
      // Clear previous content
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply filters
      applyCanvasFilters(ctx, adjustments);
      
      // Draw image maintaining aspect ratio
      const scale = Math.min(
        dimensions.width / img.width,
        dimensions.height / img.height
      );
      
      const x = (dimensions.width - img.width * scale) / 2;
      const y = (dimensions.height - img.height * scale) / 2;
      
      ctx.drawImage(
        img,
        x, y,
        img.width * scale,
        img.height * scale
      );
      
      onCanvasReady(canvas);
    };
    img.src = image;
  }, [image, dimensions, adjustments, onCanvasReady]);

  return (
    <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        className="max-w-full h-auto mx-auto"
        style={{ 
          maxHeight: '70vh',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}