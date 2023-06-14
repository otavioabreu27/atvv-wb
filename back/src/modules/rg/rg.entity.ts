import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';

@Entity({ name: 'rgs' })
export class Rg {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 12 })
  valorRg: string;

  @Column({ length: 20 })
  orgaoEmissor: string;

  @Column()
  dataEmissao: Date;

  @ManyToOne(() => Cliente, (cliente) => cliente.rg)
  cliente: Cliente;
}
