import { Article } from "../types/article";

const ArticleItem = ({ article }: { article: Article }) => (
  <div className="card">
    <div className="card-body">
      <h4 className="card-title"><a href={article.url}>{article.title}</a></h4>
      <div className="text-primary">
        +{article.score} by {article.by}
      </div>
    </div>
  </div>
)

export default ArticleItem;
