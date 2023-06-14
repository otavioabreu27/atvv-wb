import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Delete,
  Put,
  Res,
} from '@nestjs/common';
import { ServicoService } from './servicos.service';
import { Servico } from './servicos.entity';
import { Response } from 'express';

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
  criaServico(@Body() servico: Servico): Promise<Servico> {
    try {
      const resp = this.servicoService.criaServico(servico);
      return resp;
    } catch (e) {
      return e;
    }
  }

  @Delete(':id')
  async deletaServico(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<any> {
    try {
      const resp = await this.servicoService.deletaServico(id);
      resp ? res.status(200).send('OK') : res.status(404).send('Not found');
    } catch (e) {
      res.send(400).send(`Error: ${e}`);
    }
  }

  @Put(':id')
  async alteraServico(@Body() servico: Servico, @Param('id') id: string) {
    try {
      const resp = await this.servicoService.alteraServico(id, servico);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
