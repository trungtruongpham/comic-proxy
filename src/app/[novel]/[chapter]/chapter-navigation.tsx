// [novel]/chuong-[chapter]/chapter-navigation.tsx
"use client";

import Link from "next/link";
import { NavigationProps } from "@/types/chapter.types";

interface ChapterNavigationProps {
  novel: string;
  chapter: number;
  prevIcon: React.ReactNode;
  nextIcon: React.ReactNode;
  className?: string;
}

const NavigationButton = ({
  direction,
  novel,
  chapter,
  icon,
}: NavigationProps) => {
  const newChapter = direction === "next" ? chapter + 1 : chapter - 1;
  const isDisabled = direction === "prev" && chapter === 1;
  const label = direction === "next" ? "Next" : "Previous";

  return (
    <Link
      href={`/${novel}/chapter-${newChapter}`}
      className={`flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors
        ${isDisabled ? "pointer-events-none opacity-50" : ""}`}
      aria-disabled={isDisabled}
    >
      {direction === "prev" && icon}
      {label}
      {direction === "next" && icon}
    </Link>
  );
};

export function ChapterNavigation({
  novel,
  chapter,
  prevIcon,
  nextIcon,
  className,
}: ChapterNavigationProps) {
  return (
    <nav className={`flex justify-between mb-6 ${className}`}>
      <NavigationButton
        direction="prev"
        novel={novel}
        chapter={chapter}
        icon={prevIcon}
      />
      <NavigationButton
        direction="next"
        novel={novel}
        chapter={chapter}
        icon={nextIcon}
      />
    </nav>
  );
}
