/**
 * Created by opop on 2016/11/13.
 */
import { Profile } from './profile.model';

export class Comment {
  id: number;
  body: string;
  createAt: string;
  author: Profile;
}
