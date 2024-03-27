import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    // Устанавливаем значение completed в true по умолчанию, если оно не было указано
    const completed =
      createTaskDto.completed !== undefined ? createTaskDto.completed : false;

    // Создаем новый экземпляр задачи, передавая указанный title и значение completed
    const task = new Task();
    task.title = createTaskDto.title;
    task.completed = completed;

    // Сохраняем задачу в репозитории и возвращаем ее
    return await this.taskRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return await this.taskRepository.find();
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    await this.taskRepository.update(id, updateTaskDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
  }
}
