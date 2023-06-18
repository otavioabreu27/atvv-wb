import { Module } from '@nestjs/common';
import { CpfController } from './cpf.controller';
import { CpfService } from './cpf.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from '../cliente/cliente.entity';
import { Cpf } from './cpf.entity';

@Module({
  controllers: [CpfController],
  providers: [CpfService],
  imports: [TypeOrmModule.forFeature([Cliente, Cpf])],
})
export class CpfModule {}
