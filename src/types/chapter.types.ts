// types/chapter.types.ts
export interface ChapterContent {
  title: string;
  content: string;
}

export interface ChapterParams {
  novel: string;
  chapter: string;
}

export interface NavigationProps {
  direction: "prev" | "next";
  novel: string;
  chapter: number;
  icon: React.ReactNode;
}

export interface ChapterData {
  title: string;
  content: string;
  chapter: number;
  novel: string;
}
