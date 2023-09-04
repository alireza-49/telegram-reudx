export interface Chat {
  text: string;
  reactions: string;
  dataAndTime: Date;
  id: string;
  owner: number;
}
export interface Contact {
  name: string;
  id: string;
  chat: Chat[];
  avatar: string;
  isOnline: boolean;
  description: string;
  isFavorite: boolean;
  isActive: boolean;
}
export type Theme = "dark" | "light" | "sysDefault";
export interface Settings {
  theme: Theme;
  language: string;
  bgColor: string;
}
export interface userData {
  userName: string;
  id: string;
  avatar: string;
}
