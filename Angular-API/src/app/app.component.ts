import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-API';
  posts: any;

  constructor(private post: PostService){

}

ngOnInit(){
  this.post.getPosts().subscribe(responce => {
    this.posts = responce;
    console.log(this.posts);
  })
}
}