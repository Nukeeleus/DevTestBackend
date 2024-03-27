export class CreateTaskDto {
  readonly title: string;
  readonly completed?: boolean; // Сделаем completed необязательным
}
