import { User } from "./User";

export interface AnteprimaInbox {
  altroUtente: User;
  timeAgo: string;
  lastMessage: string;
  prodottoCorrelato: string;
}
