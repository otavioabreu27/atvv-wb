import { Produto } from './produtos.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private readonly Produto: Repository<Produto>,
  ) {}

  async listaTodos(): Promise<Produto[]> {
    return await this.Produto.find();
  }

  async listaId(id: string): Promise<Produto> {
    return await this.Produto.findOne({
      where: {
        id: parseInt(id),
      },
    });
  }

  async criaProduto(produto: Produto): Promise<Produto> {
    return this.Produto.save(produto);
  }

  async deletaProduto(id: string): Promise<boolean> {
    const resp = await this.Produto.delete(parseInt(id));
    return resp.affected ? true : false;
  }

  async alteraProduto(id: string, produto: Produto): Promise<Produto> {
    await this.Produto.update(parseInt(id), produto);
    const produtoAlterado = await this.Produto.findOne({
      where: { id: parseInt(id) },
    });
    return produtoAlterado;
  }
}
