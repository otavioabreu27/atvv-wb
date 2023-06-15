import { Module } from '@nestjs/common';
import { TelefonesController } from './telefones.controller';
import { TelefonesService } from './telefones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telefone } from './telefones.entity';
import { Cliente } from '../cliente/cliente.entity';

@Module({
  controllers: [TelefonesController],
  providers: [TelefonesService],
  imports: [TypeOrmModule.forFeature([Telefone, Cliente])],
})
export class TelefonesModule {}
