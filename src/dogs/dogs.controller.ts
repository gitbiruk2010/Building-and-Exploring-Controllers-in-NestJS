import { Controller, Get, Post, Param, Body, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';

interface Dog {
  id: number;
  name: string;
  age: number;
}

@Controller('dogs')
export class DogsController {
  private dogs: Dog[] = [];

  @Get()
  getAllDogs() {
    return this.dogs;
  }

  @Post()
  createDog(@Body() body: { name: string; age: number }) {
    const newDog: Dog = { id: Date.now(), ...body };
    this.dogs.push(newDog);
    return newDog;
  }

  @Get(':id')
  getDogById(@Param('id') id: string) {
    const dog = this.dogs.find(d => d.id === parseInt(id));
    if (!dog) {
      throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
    }
    return dog;
  }

  @Put(':id')
  updateDog(@Param('id') id: string, @Body() body: { name?: string; age?: number }) {
    const dogIndex = this.dogs.findIndex(d => d.id === parseInt(id));
    if (dogIndex === -1) {
      throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
    }
    const updatedDog = { ...this.dogs[dogIndex], ...body };
    this.dogs[dogIndex] = updatedDog;
    return updatedDog;
  }

  @Delete(':id')
  deleteDog(@Param('id') id: string) {
    const dogIndex = this.dogs.findIndex(d => d.id === parseInt(id));
    if (dogIndex === -1) {
      throw new HttpException('Dog not found', HttpStatus.NOT_FOUND);
    }
    const deletedDog = this.dogs.splice(dogIndex, 1);
    return { message: 'Dog deleted', deletedDog };
  }
}
