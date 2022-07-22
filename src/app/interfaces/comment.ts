export interface CommentsResult {
  data: Comments[];
 
}

export interface Meta {
  page: number;
}

export interface Comments {
  Comments_id: number;
  Comment_Title: string;
  Comment_Text: string;
  Comment_Own: string;
  posts_id: number;
}