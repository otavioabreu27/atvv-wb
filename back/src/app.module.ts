import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './modules/cliente/cliente.module';
import { ProdutoModule } from './modules/produtos/produtos.module';
import { ServicoModule } from './modules/servicos/servico.module';
import { ProdutosConsumidosModule } from './modules/produtosConsumidos/produtosConsumidos.module';
import { ServicosConsumidosModule } from './modules/servicosConsumidos/servicosConsumidos.module';
import { TelefonesModule } from './modules/telefones/telefones.module';
import { RgModule } from './modules/rg/rg.module';
import { CpfModule } from './modules/cpf/cpf.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'fatec',
      database: 'atvv-wb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ClienteModule,
    ProdutoModule,
    ServicoModule,
    ProdutosConsumidosModule,
    ServicosConsumidosModule,
    TelefonesModule,
    RgModule,
    CpfModule,
  ],
})
export class AppModule {}
