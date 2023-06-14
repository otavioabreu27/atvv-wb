import { Controller, Get, Param, Body, Post } from '@nestjs/common';
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
  criaCliente(@Body() produto: Produto) {
    try {
      const resp = this.produtoService.criaProduto(produto);
      return resp;
    } catch (e) {
      return e;
    }
  }
}
