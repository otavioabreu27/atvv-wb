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
}
