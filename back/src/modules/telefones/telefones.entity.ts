import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';

@Entity({ name: 'telefones' })
export class Telefone {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  ddd: string;

  @Column()
  numero: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.telefones)
  cliente: Cliente;
}
