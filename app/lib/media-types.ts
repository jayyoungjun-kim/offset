export type MediaImage = {
  id: string;
  url: string;
  name: string;
  size: number;
  width: number;
  height: number;
  createdAt: string;
  usedBy: string[];
};
export const MAX_IMAGE_BYTES = 500 * 1024;
export const MAX_IMAGE_EDGE = 1600;
export const mediaIdPattern = /^[a-f0-9-]{36}\.webp$/;
