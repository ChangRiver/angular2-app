/**
 * Created by opop on 2016/11/13.
 */
export class ArticleListConfig {
  type: string = 'all';

  filters: {
    tag?: string,
    author?: string,
    favorited?: string,
    limit?: number,
    offset?: number
  } = {};
}
