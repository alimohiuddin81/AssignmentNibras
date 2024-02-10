export interface usersDTO
{
  id: number;
  name: string;
  email: string;
  username: string;
  url:string;
}

export interface albumsDTO
{
  userId: number;
  id: number;
  title: string;
}
export interface userPhotosDTO
{
  albumId: number;
  id: number;
  title: string;
  url : string;
}

