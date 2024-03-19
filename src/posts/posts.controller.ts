import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post as PostMethod,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from 'src/post/post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @PostMethod()
  create(@Body() post: Post) {
    return this.postsService.create(post);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() post: Partial<Post>) {
    return this.postsService.update(+id, post);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.postsService.remove(+id);
  }
}
