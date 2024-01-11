import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TasksModule, PostsModule],
  controllers: [],
  providers: []
})
export class AppModule {}
