// lets nestjs know that we are creating a class that will
// serve as a controller in our application
// Handles incoming requests
import { Controller, Get } from '@nestjs/common';
@Controller('/app') //decorator
export class AppController {
  @Get('/aga')
  getRootRoute() {
    return 'Hi there';
  }

  @Get('/bye')
  getByeThere() {
    return 'buy here';
  }
}
