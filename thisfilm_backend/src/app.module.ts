import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [UserModule, MovieModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}