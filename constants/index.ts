import { GalleryIcon, HeartIcon, AlbumsIcon } from '@/svgs/icons';

export const sidebarLinks = [
  {
    id: 1,
    label: 'Gallery',
    route: '/gallery',
    icon: GalleryIcon,
  },

  {
    id: 2,
    label: 'Albums',
    route: '/albums',
    icon: AlbumsIcon,
  },
  {
    id: 3,
    label: 'Favorites',
    route: '/favorites',
    icon: HeartIcon,
  },
];

export const editButtons = [
  {
    id: 1,
    name: 'generative-fill',
  },

  {
    id: 2,
    name: 'blur',
  },

  {
    id: 3,
    name: 'grayscale',
  },

  {
    id: 4,
    name: 'pixelate',
  },
];
