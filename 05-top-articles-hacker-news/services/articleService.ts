import { Article } from "../types/article"

export const fetchArticleIds = (): Promise<number[]> =>
  fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty').then(r => r.json())

export const fetchArticleDetail = (articleId: number): Promise<Article> =>
  fetch(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json?print=pretty`).then(r => r.json())

