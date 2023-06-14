import { Controller, Get, Param, Body, Post, Delete } from '@nestjs/common';
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
  async deletaProduto(@Param('id') id: string): Promise<string> {
    try {
      const resp = await this.produtoService.deletaProduto(id);
      if (resp.affected != 0) {
        return 'Deletado';
      } else {
        return 'Nenhuma linha afetada';
      }
    } catch (e) {
      return e;
    }
  }
}
