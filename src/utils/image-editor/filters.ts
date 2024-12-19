import { ImageAdjustments } from '../../types/image-editor';

export function applyCanvasFilters(ctx: CanvasRenderingContext2D, adjustments: ImageAdjustments): void {
  ctx.filter = `
    brightness(${adjustments.brightness}%)
    contrast(${adjustments.contrast}%)
    saturate(${adjustments.saturation}%)
    blur(${adjustments.blur}px)
    opacity(${adjustments.opacity}%)
  `;
}