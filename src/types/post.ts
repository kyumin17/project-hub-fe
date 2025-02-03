export interface CommentProps {
  id: string;
  author: string;
  content: string;
};

export interface PostProps {
  id: string;
  type: '프로젝트' | '스터디';
  title: string;
  author: string;
  author_id: string;
  tags: string[];
  total_recruit: number;
  content: string;
  comments: CommentProps[];
};