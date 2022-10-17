import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentSchema } from './schema/students.schema'
import { StudentService } from './student/student.service';
import { StudentController } from './student/student.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', { dbName: 'blog' }),
    MongooseModule.forFeature([{name: 'Student', schema:StudentSchema}])
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule { }
