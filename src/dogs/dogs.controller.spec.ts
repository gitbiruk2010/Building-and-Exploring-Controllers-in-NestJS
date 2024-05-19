import { Test, TestingModule } from '@nestjs/testing';
import { DogsController } from './dogs.controller';

describe('DogsController', () => {
  let controller: DogsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DogsController],
    }).compile();

    controller = module.get<DogsController>(DogsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a dog', () => {
    const newDog = { name: 'Rex', age: 2 };
    const createdDog = controller.createDog(newDog);
    expect(createdDog).toEqual({
      id: expect.any(Number),
      name: 'Rex',
      age: 2,
    });
  });

  it('should return all dogs', () => {
    expect(controller.getAllDogs()).toEqual(expect.any(Array));
  });

  it('should return a dog by ID', () => {
    const newDog = { name: 'Rex', age: 2 };
    const createdDog = controller.createDog(newDog);
    expect(controller.getDogById(createdDog.id.toString())).toEqual(createdDog);
  });

  it('should update a dog by ID', () => {
    const newDog = { name: 'Rex', age: 2 };
    const createdDog = controller.createDog(newDog);
    const updatedDog = { name: 'Max', age: 3 };
    const updatedResult = controller.updateDog(createdDog.id.toString(), updatedDog);
    expect(updatedResult).toEqual({
      id: createdDog.id,
      name: 'Max',
      age: 3,
    });
  });

  it('should delete a dog by ID', () => {
    const newDog = { name: 'Rex', age: 2 };
    const createdDog = controller.createDog(newDog);
    const deleteResult = controller.deleteDog(createdDog.id.toString());
    expect(deleteResult).toEqual({
      message: 'Dog deleted',
      deletedDog: [createdDog],
    });
  });

  it('should throw an exception if dog not found', () => {
    try {
      controller.getDogById('999');
    } catch (e) {
      expect(e.response).toBe('Dog not found');
      expect(e.status).toBe(404);
    }
  });
});
