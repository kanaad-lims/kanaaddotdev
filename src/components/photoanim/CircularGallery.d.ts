declare module "@/components/photoanim/CircularGallery" {
  import type { ComponentType } from "react";

  interface CircularGalleryItem {
    image: string;
    text: string;
  }

  interface CircularGalleryProps {
    items?: CircularGalleryItem[];
    bend?: number;
    textColor?: string;
    borderRadius?: number;
    scrollEase?: number;
    font?: string;
    scrollSpeed?: number;
    scrollDirection?: "left" | "right";
    interactive?: boolean;
    fontUrl?: string;
  }

  const CircularGallery: ComponentType<CircularGalleryProps>;
  export default CircularGallery;
}
