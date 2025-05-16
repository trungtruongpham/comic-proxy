// services/chapter.service.ts
import { JSDOM } from "jsdom";
import { ChapterContent } from "@/types/chapter.types";

export class ChapterService {
  static async fetchChapter(novel: string, chapter: string): Promise<Response> {
    console.log("novel: ", novel);
    console.log("chapter: ", chapter);

    return fetch(`https://truyenfull.vision/${novel}/chuong-${chapter}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });
  }

  static parseContent(html: string): ChapterContent {
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // Remove unwanted elements
    const scriptsToRemove = document.getElementsByTagName("script");
    const adsToRemove = document.getElementsByClassName("ads");

    Array.from(scriptsToRemove).forEach((script) => script.remove());
    Array.from(adsToRemove).forEach((ad) => ad.remove());

    const titleElement = document.querySelector(".chapter-title");
    const contentElement = document.querySelector(".chapter-c");

    const title = titleElement?.textContent?.trim() || "";
    const rawContent = contentElement?.innerHTML || "";

    const cleanContent = rawContent
      .replace(/<p>\s*<\/p>/g, "")
      .replace(/\s+/g, " ")
      .trim();

    return { title, content: cleanContent };
  }
}
