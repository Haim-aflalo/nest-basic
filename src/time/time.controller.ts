import { Controller, Get } from '@nestjs/common';

@Controller('time')
export class TimeController {
  @Get()
  getHello(): string {
    return new Date().toISOString();
  }
}
