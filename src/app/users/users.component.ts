import { Component, OnInit } from '@angular/core';
import {albumsDTO, userPhotosDTO, usersDTO} from './users.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: usersDTO[] = [];
  totalCount: number | undefined;
  albums:albumsDTO[]=[];
  userPhotos:userPhotosDTO[]=[];

  //in ngonit we will get photos of users from fake API will rely on first photo from first found album

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users: usersDTO[]) => {
      this.users = users;
      users.forEach( item => {
        console.log(item);
        this.usersService.getAlbums(item.id).subscribe((albums: albumsDTO[]) => {
         console.log(albums);
          
            this.usersService.getPhoto(albums[0].id).subscribe((userPhotos: userPhotosDTO[]) => {
              console.log(userPhotos[0].url);
              item.url=userPhotos[0].url;
              
          });
          console.log(albums[0].id);
        
        });
      });
      
      
      this.totalCount=users.length;
    });

  }
}
