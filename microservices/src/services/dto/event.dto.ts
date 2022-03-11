import { IsNotEmpty, IsString } from 'class-validator';

export class EventDTO {
  @IsString()
  @IsNotEmpty()
  eventType: string;
}
