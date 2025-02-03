import { NotificationProps } from "./notification";
import { PostProps } from "./post";

export interface UserProps {
  id: string;
  name: string;
  email: string;
  school_mail: string;
  notifications: NotificationProps[];
  tech: string[];
  join: PostProps[];
  write: PostProps[];
}