import { useQueries, useQuery, UseQueryResult } from "@tanstack/react-query"
import { Article } from '../types/article';
import { fetchArticleDetail, fetchArticleIds } from "../services/articleService";
import ArticleItem from "./ArticleItem";
import { useMemo } from "react";

const TopArticles = () => {
  const { isLoading: isArticleIdsLoading, data: articleIds, error } = useQuery<number[], Error>({
    queryKey: ['articles'],
    queryFn: fetchArticleIds,
  });

  const topArticles = useMemo(() => articleIds ? articleIds.slice(0, 10) : [], [articleIds]);

  const articleDetailQueries: UseQueryResult<Article, Error>[] = useQueries({
    queries: articleIds && articleIds.length > 0
      ? topArticles.map(articleId => ({
        queryKey: ['articleDetails', articleId],
        queryFn: () => fetchArticleDetail(articleId),
        enabled: articleIds && articleIds.length > 0
      }))
      : []
  });

  const isAnyArticleDetailsLoading = articleDetailQueries.some(query => query.isLoading);

  if (isArticleIdsLoading || isAnyArticleDetailsLoading) return 'Loading top 10 articles...';

  if (error) return 'Oops! Failed to fetch top 10 articles';

  return (
    <div className="list-container">
      {topArticles.slice(0, 10)?.map((articleId: number, index: number) => {
        const { data: article } = articleDetailQueries[index];

        return <ArticleItem key={articleId} article={article!} />;
      })}
    </div>
  )
}

export default TopArticles;
