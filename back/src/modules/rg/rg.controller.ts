import { Body, Controller, Post } from '@nestjs/common';
import { RgService } from './rg.service';

@Controller('rg')
export class RgController {
  constructor(private readonly rgService: RgService) {}

  @Post()
  async criaRg(@Body() rgs: any): Promise<any> {
    try {
      const resp = await this.rgService.criaRg(rgs.rgs);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
