export interface BookData {
  title: string;
  description?: string;
  read: boolean;
  pagesRead: number;
  notes?: Array<string>;
}
