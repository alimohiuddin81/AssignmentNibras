import { Component, OnInit } from '@angular/core';
import {HomeService} from './home.service';
import {blogsDTO} from './blogs.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  blogs: blogsDTO[] = [];
  totalCount: number | undefined;

  ngOnInit(): void {
    this.homeService.getBlogs().subscribe((blogs: blogsDTO[]) => {
      this.blogs = blogs;
      this.totalCount=blogs.length;
    });
  }
}
