import { IsEmail, IsLowercase, IsNotEmpty, IsNumber, IsString, IsStrongPassword, MaxLength, MinLength } from 'class-validator';
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
        @IsLowercase()
        public email: string;

        @IsNotEmpty()
        @MinLength(3)
        @MaxLength(20)
        @IsString()
        public username: string;

        @IsStrongPassword()
        @IsString()
        public password: string;

        @IsNumber()
        public age: number;
}
