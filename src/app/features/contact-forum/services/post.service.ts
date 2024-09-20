import { Injectable } from '@angular/core';
import { Post } from '../domain/post.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private postsSubject: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  getPosts(): Observable<Post[]> {
    return this.postsSubject.asObservable(); // Asegúrate de retornar un Observable
  }

  addPost(content: string, author: string): void {
    const newPost: Post = {
      id: uuidv4(),
      content,
      author,
      date: new Date()
    };
    this.posts.push(newPost);
    this.postsSubject.next(this.posts);
  }
}
