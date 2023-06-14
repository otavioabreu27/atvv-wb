import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Delete,
  Res,
  Put,
} from '@nestjs/common';
import { Response } from 'express';
import { ProdutoService } from './produtos.service';
import { Produto } from './produtos.entity';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Get()
  async listaTodos(): Promise<Produto[]> {
    try {
      const resp = await this.produtoService.listaTodos();
      return resp;
    } catch (e) {
      return e;
    }
  }

  @Get(':id')
  async listaId(@Param('id') id: string): Promise<Produto> {
    try {
      const resp = await this.produtoService.listaId(id);
      return resp;
    } catch (e) {
      return e;
    }
  }

  @Post()
  criaProduto(@Body() produto: Produto) {
    try {
      const resp = this.produtoService.criaProduto(produto);
      return resp;
    } catch (e) {
      return e;
    }
  }

  @Delete(':id')
  async deletaProduto(
    @Param('id') id: string,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const resp = await this.produtoService.deletaProduto(id);
      resp ? res.status(200).send('OK') : res.status(404).send('Not found');
    } catch (e) {
      res.send(400).send(`Error: ${e}`);
    }
  }

  @Put(':id')
  async alteraProduto(
    @Param('id') id: string,
    @Body() produto: Produto,
  ): Promise<Produto> {
    try {
      const resp = await this.produtoService.alteraProduto(id, produto);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
