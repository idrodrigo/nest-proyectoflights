import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flights } from './flights/flights.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'AppFlights',
      //buscar culquier archivo con terminacion
      //entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [Flights],
      synchronize: true,
    }),
    FlightsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
