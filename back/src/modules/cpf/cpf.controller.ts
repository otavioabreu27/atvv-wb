import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CpfService } from './cpf.service';

@Controller('cpf')
export class CpfController {
  constructor(private readonly cpfService: CpfService) {}

  @Post()
  async criaCpf(@Body() cpf: any, @Res() res: Response): Promise<any> {
    try {
      const resp = await this.cpfService.criaCpf(cpf);
      resp ? res.status(201).send(resp) : res.status(404).send('Not Found');
    } catch (e) {
      return e;
    }
  }

  @Get(':id')
  async listaCpf(@Param('id') id: string): Promise<any> {
    try {
      const resp = await this.cpfService.listaCpf(id);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
