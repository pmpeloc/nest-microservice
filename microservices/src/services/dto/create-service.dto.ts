import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { EventDTO } from './event.dto';

export class CreateServiceDTO extends PartialType(EventDTO) {
  @MaxLength(64)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  description: string;

  tags: string[];
}
