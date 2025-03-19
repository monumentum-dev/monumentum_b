export interface ImageData {
    src: string;
    title?: string;
    description?: string;
    top: boolean;
  }
  
  export interface GalleryData {
    gridTitle?: string;
    images: ImageData[];
  }

  export interface PageResponse {
    _id: string;
    title: string;
    description: string;
    keywords: string[];
    author: string;
    content?: Array<
    | {
          _type: "block";
          children: Array<{ text: string }>;
      }
    | {
          _type: "image";
          url: string;
      }
>;
    ogImage: {
        asset: {
            url: string;
        };
    };
    name: string;
}