export interface Post{
  id: number,
  createdAt: Date,
  title: string,
  preview: string,
  image?: string,
  description: string
}