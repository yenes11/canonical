export interface Post {
  id: number;
  featured_media: string;
  title: Title;
  date: Date;
  link: string;
  _embedded: Embedded;
}

interface Title {
  rendered: string;
}

interface Embedded {
  author: Author[];
}

export interface Author {
  name: string;
  link: string;
}