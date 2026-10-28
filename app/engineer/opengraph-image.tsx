import { ogImage, OG_SIZE } from '@/lib/og';

export const size = OG_SIZE;
export const contentType = 'image/png';
export const alt = 'Jack Shields: I build the web, and I break it.';

export default function Image() {
  return ogImage('engineer');
}
