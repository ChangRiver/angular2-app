/**
 * Created by opop on 2016/11/12.
 */
import { Profile } from './profile.model';

export class Article {
  slug: string;
  title: string = '';
  description: string = '';
  body: string = '';
  tagList: Array<string> = [];
  createAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
}
