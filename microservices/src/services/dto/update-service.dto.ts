import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateServiceDTO } from './create-service.dto';

export class UpdateServiceDTO extends PartialType(CreateServiceDTO) {
  @IsNotEmpty()
  id: number;
}
