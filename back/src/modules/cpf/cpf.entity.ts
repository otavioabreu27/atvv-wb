import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';

@Entity({ name: 'cpf' })
export class Cpf {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 14, unique: true })
  numeroCpf: string;

  @Column()
  dataEmissao: Date;

  @OneToOne(() => Cliente, (cliente) => cliente.cpf)
  @JoinColumn()
  cliente: Cliente;
}
