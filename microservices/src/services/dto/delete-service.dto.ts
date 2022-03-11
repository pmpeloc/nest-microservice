import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { EventDTO } from './event.dto';

export class DeleteServiceDTO extends PartialType(EventDTO) {
  @IsNotEmpty()
  id: number;
}
