export interface PostResult {
  data: Posts[];
  meta: Meta;
}

export interface Meta {
  page: number;
}

export interface Posts {
  posts_id: number;
  Title: string;
  text_description: string;
  tags_Us: string;
  own_User: string;
  Day: number;
  Month: string;
}
