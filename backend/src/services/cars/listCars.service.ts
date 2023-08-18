import { Repository } from "typeorm";
import { Car } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TCarArray } from "../../interfaces/car.interfaces";
import { carsSchemaResponse } from "../../schemas/cars.schemas";

const listCarsServices = async (): Promise<any> => {

  const carRepository: Repository<Car> = AppDataSource.getRepository(Car);
    
  const cars: Car[] = await carRepository.find({
    relations: {
      user: true
    }
});
  const returnCars: TCarArray = carsSchemaResponse.parse(cars);
  return returnCars;

}

export default listCarsServices;
