import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const tweetsCollection = defineCollection({
  // loader: glob({ pattern: "**/*.json", base: "./src/content/data" }),
  // loader: glob({ pattern: "**/*.json", base: "./src/second-data" }),
  loader: file("src/data/seasons.json"),
  // loader: file("src/seasons/secondSeasons.json"),
  schema: z.object({
    id: z.number(),
    tweet_url: z
      .string()
      .url()
      .refine(
        (url) =>
          url.startsWith("https://x.com/") ||
          url.startsWith("https://twitter.com/") ||
          url.startsWith("https://youtube.com/"),
        {
          message: "The URL must belong to X/Twitter.",
        }
      ),
    author: z.string().startsWith("@"),
    quote: z.string(),
    season: z.number().int(),
    episode: z.number().int(),
    source: z
      .string()
      .url()
      .refine((url) => url.startsWith("https://")),
  }),
});

export const collections = {
  tweets: tweetsCollection,
};
