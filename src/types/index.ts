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

export interface ContactInfo {
  phone: string;
  email: string;
  facebook: string;
}

export interface Member {
  name: string;
  slug: string;
  academicTitle?: string;
  photoUrl: string;
  bio: string;
  researchAreas?: string[];
  contactEmail?: string;
  publications?: string[];
  socialLinks?: { platform: string; url: string }[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}