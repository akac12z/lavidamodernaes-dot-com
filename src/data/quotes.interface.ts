import { z } from "astro:content";

export interface Tweets {
  id: number;
  tweet_url: string; // tweet url which will also act as a id
  content: string;
  author: string; // twitter account url
  seasson: number;
  episode: number;
  source: string;
}
export const Tweets = z.object({
  id: z.number(),
  tweet_url: z
    .string()
    .url()
    .refine(
      (url) =>
        url.startsWith("https://x.com/") ||
        url.startsWith("https://twitter.com/"),
      {
        message: "The URL must belong to X/Twitter",
      }
    ),
  content: z.string(),
  seasson: z.number().int(),
  episode: z.number().int(),
  source: z
    .string()
    .url()
    .refine((url) => url.startsWith("https://")),
});
