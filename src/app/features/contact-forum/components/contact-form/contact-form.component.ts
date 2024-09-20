import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { Post } from '../../domain/post.model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  message: string = '';
  author: string = 'Anonymous';
  posts$: Observable<Post[]>; // Variable para el observable

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts(); // Asignar el observable
  }

  onSubmit() {
    if (this.message.trim()) {
      this.postService.addPost(this.message, this.author);
      this.message = '';
    }
  }
}
