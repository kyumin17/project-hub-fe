export interface NotificationProps {
  id: string;
  type: string;
  post_id: string;
  post_type: string;
  post_title: string;
  tags: string[];
  is_read: boolean;
};