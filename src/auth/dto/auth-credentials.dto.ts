import { IsString, MaxLength, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(32)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(32)
  password: string;
}
