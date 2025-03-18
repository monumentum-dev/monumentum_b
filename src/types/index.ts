interface ImageData {
    src: string;
    title: string;
    description: string;
    top: boolean;
  }
  
  export interface GalleryData {
    gridTitle?: string;
    images: ImageData[];
  }