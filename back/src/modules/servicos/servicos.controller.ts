import { Body, Controller, Param, Get, Post } from '@nestjs/common';
import { ServicoService } from './servicos.service';
import { Servico } from './servicos.entity';

@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Get()
  async listaTodos(): Promise<Servico[]> {
    const resp = await this.servicoService.listaTodos();
    return resp;
  }

  @Get(':id')
  async listaId(@Param('id') id: string): Promise<Servico> {
    try {
      const resp = await this.servicoService.listaId(id);
      return resp;
    } catch (e) {
      return e;
    }
  }

  @Post()
  criaServico(@Body() servico: Servico) {
    try {
      const resp = this.servicoService.criaServico(servico);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
