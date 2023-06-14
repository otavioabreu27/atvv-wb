import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from '../cliente/cliente.entity';
import { Produto } from '../produtos/produtos.entity';
import { ProdutosConsumidos } from './produtosConsumidos.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProdutosConsumidosService {
  constructor(
    @InjectRepository(ProdutosConsumidos)
    private readonly ProdutosConsumidos: Repository<ProdutosConsumidos>,
    @InjectRepository(Cliente)
    private readonly Cliente: Repository<Cliente>,
    @InjectRepository(Produto)
    private readonly Produto: Repository<Produto>,
  ) {}

  async criaProdutosConsumidos(produtosConsumidos: any): Promise<boolean> {
    const existeCliente = await this.Cliente.exist({
      where: { id: produtosConsumidos.cliente },
    });
    const existeProduto = await this.Produto.exist({
      where: { id: produtosConsumidos.produto },
    });

    if (existeCliente && existeProduto) {
      await this.ProdutosConsumidos.save(produtosConsumidos);
      return true;
    } else {
      return false;
    }
  }
}
