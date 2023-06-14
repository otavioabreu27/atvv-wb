import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Servico } from '../servicos/servicos.entity';
import { Cliente } from '../cliente/cliente.entity';

@Entity({ name: 'servicosConsumidos' })
export class ServicosConsumidos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dataDaCompra: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.servicosConsumidos)
  cliente: Cliente;

  @ManyToOne(() => Servico, (servico) => servico.servicosConsumidos)
  servico: Servico;
}
