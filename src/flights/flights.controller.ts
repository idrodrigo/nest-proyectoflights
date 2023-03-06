import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';
import { Flight } from './flight.model';
import { identity } from 'rxjs';

@Controller('flights')
export class FlightsController {
  constructor(private flightService: FlightsService) {}

  @Get()
  findAll(): Promise<Flights[]> {
    return this.flightService.findAll();
  }

  // // READ ONE
  // @Get(":id")
  // async findOne(@Param() param): Promise<Flight> {
  //   return this.flightService.findOne(param.id);
  // }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Flight> {
    return this.flightService.findOne(id);
  }

  //  CREATE
  @Post()
  async create(@Body() flight: Flight): Promise<Flights[]> {
    return this.flightService.create(flight);
  }

  // @Post()
  // async createflight(@Body() newFlight: Flight): Promise<Flights[]> {
  //   return this.flightService.createflight(newFlight);
  // }

  //update post
  @Post(':id/update')
  async update(@Param('id') id, @Body() flight: Flight): Promise<any> {
    flight.id = Number(id);
    return this.flightService.update(flight);
  }

  // QUERY
  @Get('query/:orig/:dest')
  async query(@Param('orig') orig, @Param('dest') dest): Promise<any> {
    return this.flightService.query(orig, dest);
  }

  @Get('cities/origins')
  getOrigins(): Promise<string[]> {
    return this.flightService.getFlightOrigins();
  }

  @Get('cities/destinations')
  getDestinations(): Promise<string[]> {
    return this.flightService.getFlightDestinations();
  }

  // UPDATE patch
  // @Patch(':id/update')
  // async update(@Param('id') id, @Body() flight: Flight): Promise<any> {
  //   flight.id = Number(id);
  //   return this.flightService.update(flight);
  // }

  // DELETE @deletw
  // @Delete(':id/delete')
  // async delete(@Param('id') id): Promise<any> {
  //   return this.flightService.delete(id);
  // }

  // DELETE
  @Post(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.flightService.delete(id);
  }
}
