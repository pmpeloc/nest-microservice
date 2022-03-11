/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Logger, ValidationPipe } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateServiceDTO } from './dto/create-service.dto';
import { DeleteServiceDTO } from './dto/delete-service.dto';
import { KafkaServiceDTO } from './dto/kafka-service.dto';
import { UpdateServiceDTO } from './dto/update-service.dto';

@Controller()
export class ServicesController {
  constructor(private eventEmitter: EventEmitter2) {}

  @EventPattern('services')
  serviceEvent(@Payload(new ValidationPipe()) { value }: KafkaServiceDTO) {
    Logger.debug(value, 'ServicesController - serviceEvent');
    this.eventEmitter.emit(value.eventType, value);
  }

  @OnEvent('ServiceCreated')
  handleServiceCreatedEvent(createServiceDTO: CreateServiceDTO) {
    Logger.debug(
      createServiceDTO,
      'ServicesController - handleServiceCreatedEvent',
    );
  }

  @OnEvent('ServiceUpdated')
  handleServiceUpdatedEvent(updateServiceDTO: UpdateServiceDTO) {
    Logger.debug(
      updateServiceDTO,
      'ServicesController - handleServiceUpdatedEvent',
    );
  }

  @OnEvent('ServiceDeleted')
  handleServiceDeletedEvent(deletedServiceDTO: DeleteServiceDTO) {
    Logger.debug(
      deletedServiceDTO,
      'ServicesController - handleServiceDeletedEvent',
    );
  }
}
