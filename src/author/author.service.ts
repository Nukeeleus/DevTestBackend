import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  // create(createAuthorDto: CreateAuthorDto) {
  //   return 'This action adds a new author';
  // }
  async create(authorData: CreateAuthorDto): Promise<Author> {
    return await this.authorRepository.save(authorData);
  }

  // findAll() {
  //   return `This action returns all author`;
  // }
  async findAll(): Promise<Author[]> {
    return await this.authorRepository.find();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} author`;
  // }
  async findOne(id: number): Promise<Author> {
    const author = await this.authorRepository.findOne({ where: { id } });
    if (!author) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return author;
  }

  // update(id: number, updateAuthorDto: UpdateAuthorDto) {
  //   return `This action updates a #${id} author`;
  // }
  async update(id: number, authorData: UpdateAuthorDto): Promise<Author> {
    await this.authorRepository.update(id, authorData);
    return this.findOne(id);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} author`;
  // }
  async remove(id: number): Promise<void> {
    const result = await this.authorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
  }
}
