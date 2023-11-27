import { IsEmail, IsNotEmpty, IsNumber, IsString, IsStrongPassword, MaxLength, MinLength } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export default class UserEntity {
        @IsNotEmpty()
        @MinLength(2)
        @MaxLength(20)
        public firstName: string;

        @IsNotEmpty()
        @MinLength(2)
        @MaxLength(20)
        @IsString()
        public lastName: string;

        @IsNotEmpty()
        @IsEmail()
        @IsString()
        public email: string;

        @IsStrongPassword()
        @IsString()
        public password: string;

        @IsNumber()
        public age: number;
}
