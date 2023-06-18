import { Body, Controller, Post, Get, Param } from '@nestjs/common';
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

  @Get(':id')
  async getRg(@Param('id') id: string): Promise<any> {
    try {
      const resp = await this.rgService.listaRg(id);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
