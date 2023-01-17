import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

// Class decorator
@Controller('messages')
export class MessagesController {
  // method decorator
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  listMessages() {}
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
  }
}
