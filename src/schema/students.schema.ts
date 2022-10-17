import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose';

@Schema()
export class Student{
    @Prop()
    name: string;
    @Prop()
    roleNumber: number;
    @Prop()
    class:Number;
    @Prop()
    gender: string;
    @Prop()
    marks: number;
}

export const StudentSchema = SchemaFactory.createForClass(Student)