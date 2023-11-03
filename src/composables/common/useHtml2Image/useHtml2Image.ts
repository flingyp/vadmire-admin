import { useDownloadFile } from '@flypeng/tool/browser';
import { domToPng } from 'modern-screenshot';

export const useHtml2Image = async (element: Element, name: string) => {
  const width = element.scrollWidth;
  const height = element.scrollWidth;
  const imageUrl = await domToPng(element, {
    width,
    height,
    quality: 1,
    scale: 2,
  });
  const image = new Image(width, height);
  image.src = imageUrl;
  await useDownloadFile(imageUrl, name);
};
