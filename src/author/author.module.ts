import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';

// @Module({
//   controllers: [AuthorController],
//   providers: [AuthorService],
// })
// export class AuthorModule {}
@Module({
  imports: [TypeOrmModule.forFeature([Author])], // Убедитесь, что здесь указаны все необходимые сущности для TypeOrmModule
  providers: [AuthorService],
  controllers: [AuthorController],
})
export class AuthorModule {}
