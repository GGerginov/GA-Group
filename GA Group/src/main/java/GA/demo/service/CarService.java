package GA.demo.service;


import GA.demo.service.model.CarServiceModel;

import java.util.List;

public interface CarService{


    void createCar(CarServiceModel carServiceModel,String username);

    List<CarServiceModel> getAllCars();

    CarServiceModel getById(String id);


}
