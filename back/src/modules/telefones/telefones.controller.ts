import { Body, Controller, Post } from '@nestjs/common';
import { TelefonesService } from './telefones.service';

@Controller('telefones')
export class TelefonesController {
  constructor(private readonly telefonesService: TelefonesService) {}

  @Post()
  async criaTelefone(@Body() telefone: any): Promise<any> {
    try {
      const resp = await this.telefonesService.criaTelefone(telefone.telefones);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
