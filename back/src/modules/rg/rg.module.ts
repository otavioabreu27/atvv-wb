import { Module } from '@nestjs/common';
import { Cliente } from '../cliente/cliente.entity';
import { Rg } from './rg.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RgController } from './rg.controller';
import { RgService } from './rg.service';

@Module({
  controllers: [RgController],
  providers: [RgService],
  imports: [TypeOrmModule.forFeature([Cliente, Rg])],
})
export class RgModule {}
