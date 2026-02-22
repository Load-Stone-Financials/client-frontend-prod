export interface BlogPost {
  id: string;
  coverImageURL: string;
  title: string;
  subtitle: string;
  slug: string;
  excerpt: string;
  tags: Array<string>;
  createdAt: Date;
  updatedAt: Date;
  content: string;
}
