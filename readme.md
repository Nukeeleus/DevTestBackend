# Тестовое задание

Сделай форк данного репозитория. Убедись, что твой репозиторий открыт, чтобы мы могли ознакомиться с твоей работой.

Реализуйте закомментированные CRUD методы в файле *src/posts/posts.service.ts*

```typescript
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
```

# Как сдать задание

Когда ты закончишь, убедись, что твой форкнутый репозиторий открыт, и отправь нам ссылку на него. Мы ознакомимся с твоей работой и свяжемся с тобой для обратной связи.

Успехов!

# Руководство по локальному развертыванию проекта

Это руководство предназначено для пользователей Windows, которые хотят развернуть проект локально. Предполагается, что у вас уже установлен Node.js.

## Шаг 1: Установка Docker

1. Скачайте и установите Docker Desktop для Windows с официального сайта: [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop).
2. После установки запустите Docker Desktop и дождитесь, пока он будет готов к использованию.

## Шаг 2: Установка Git для Windows

1. Скачайте установщик Git для Windows с официального сайта: [https://git-scm.com/download/win](https://git-scm.com/download/win).
2. Запустите скачанный установщик и следуйте инструкциям на экране для завершения установки.
3. После установки откройте командную строку (CMD) или PowerShell и проверьте, что Git установлен, выполнив команду:

```bash
git --version
```
Если установка прошла успешно, вы увидите номер установленной версии Git.

## Шаг 3: Запуск проекта

1. Клонируйте репозиторий проекта на ваш локальный компьютер с помощью команды `git clone`, затем перейдите в каталог проекта.
2. Запустите Docker Desktop, если он ещё не запущен.
3. Откройте терминал в каталоге проекта и запустите следующие команды:

```bash
docker-compose up -d db # Запускает контейнер с базой данных
npm install # Устанавливает зависимости проекта
npm run start:dev # Запускает проект в режиме разработки
```

После запуска проект будет доступен по адресу http://localhost:3000, а swagger — по адресу http://localhost:3000/api.
