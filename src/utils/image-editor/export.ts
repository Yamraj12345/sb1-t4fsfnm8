export async function copyCanvasToClipboard(canvas: HTMLCanvasElement): Promise<void> {
  try {
    const blob = await new Promise<Blob>((resolve) => 
      canvas.toBlob(blob => resolve(blob!))
    );
    await navigator.clipboard.write([
      new ClipboardItem({ 'image/png': blob })
    ]);
  } catch (err) {
    console.error('Failed to copy image:', err);
    throw err;
  }
}

export function downloadCanvas(canvas: HTMLCanvasElement, filename: string = 'edited-image.png'): void {
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png');
  link.click();
}