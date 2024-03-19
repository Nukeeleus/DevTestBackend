// src/posts/posts.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/post/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async create(post: Post) {
    // Создание поста
  }

  async findAll() {
    // Получение всех постов
  }

  async findOne(id: number) {
    // Получение поста по id
  }

  async update(id: number, post: Partial<Post>) {
    // Обновление поста
  }

  async remove(id: number): Promise<void> {
    // Удаление поста
  }
}
