import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { Flights } from './flights.entity';
import { Flight } from './flight.model';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flights)
    private readonly flightsRepository: Repository<Flights>,
  ) {}

  // async createflight(flight) {
  //   const newFlight = this.flightsRepository.create(flight);
  //   return this.flightsRepository.save(newFlight);
  // }

  async create(flight: Flight): Promise<any> {
    return await this.flightsRepository.save(flight);
  }

  async findAll(): Promise<Flights[]> {
    return this.flightsRepository.find();
  }

  async findOne(id: number): Promise<any> {
    return this.flightsRepository.findOne({
      where: {
        id,
      },
    });
  }

  async query(orig: string, dest: string): Promise<any> {
    return await this.flightsRepository.findBy({
      origin: orig,
      destination: dest,
    });
  }

  async getFlightOrigins(): Promise<string[]> {
    return this.flightsRepository.query('Select DISTINCT origin from flights');
  }

  async getFlightDestinations(): Promise<string[]> {
    return this.flightsRepository.query(
      'Select DISTINCT destination from flights',
    );
  }
  async update(flight: Flight): Promise<UpdateResult> {
    return await this.flightsRepository.update(flight.id, flight);
  }

  async delete(id: number): Promise<any> {
    return this.flightsRepository.delete(id);
  }
}
