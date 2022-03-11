import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { CreateServiceDTO } from './create-service.dto';
import { DeleteServiceDTO } from './delete-service.dto';
import { EventDTO } from './event.dto';
import { UpdateServiceDTO } from './update-service.dto';

export class KafkaServiceDTO {
  @Type(() => EventDTO, {
    discriminator: {
      property: 'eventType',
      subTypes: [
        { value: CreateServiceDTO, name: 'ServiceCreated' },
        { value: UpdateServiceDTO, name: 'ServiceUpdated' },
        { value: DeleteServiceDTO, name: 'ServiceDeleted' },
      ],
    },
    keepDiscriminatorProperty: true,
  })
  @ValidateNested()
  @IsNotEmpty()
  value: CreateServiceDTO | UpdateServiceDTO | DeleteServiceDTO;
}
