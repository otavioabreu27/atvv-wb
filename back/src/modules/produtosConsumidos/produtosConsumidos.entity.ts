import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Produto } from '../produtos/produtos.entity';
import { Cliente } from '../cliente/cliente.entity';

@Entity({ name: 'produtosConsumidos' })
export class ProdutosConsumidos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataDaCompra: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.produtosConsumidos)
  cliente: Cliente;

  @ManyToOne(() => Produto, (produto) => produto.produtosConsumidos)
  produto: Produto;
}
