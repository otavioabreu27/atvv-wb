import { Controller, Get } from '@nestjs/common';
import { CpfService } from './cpf.service';

@Controller()
export class CpfController {
  constructor(private readonly cpfService: CpfService) {}

  @Get()
  async listaIdCliente(): Promise<any> {
    const resp = await this.cpfService.listaIdCliente();
    return resp;
  }
}
