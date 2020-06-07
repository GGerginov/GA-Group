package GA.demo.service.impl;

import GA.demo.domain.Car;
import GA.demo.domain.User;
import GA.demo.repository.CarRepository;
import GA.demo.repository.UserRepository;
import GA.demo.service.CarService;
import GA.demo.service.model.CarServiceModel;
import GA.demo.service.model.UserServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CarServiceImpl implements CarService {

    private final CarRepository carRepository;

    private final UserRepository userRepository;

    private final ModelMapper modelMapper;

    @Autowired
    public CarServiceImpl(CarRepository carRepository, UserRepository userRepository, ModelMapper modelMapper) {
        this.carRepository = carRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }


    @Override
    public void createCar(CarServiceModel carServiceModel,String username) {


        User user = this.userRepository.getUserByUsername(username);

        Car car = this.modelMapper.map(carServiceModel,Car.class);

        car.setUser(user);
        this.carRepository.saveAndFlush(car);


    }

    @Override
    public List<CarServiceModel> getAllCars() {

        List<CarServiceModel> carServiceModelList = new ArrayList<>();

        for (Car car : this.carRepository.findAll()) {

            carServiceModelList.add(modelMapper.map(car,CarServiceModel.class));
        }

        return carServiceModelList;
    }

    @Override
    public CarServiceModel getById(String id) {

        return this.modelMapper.map(this.carRepository.getOne(id),CarServiceModel.class);
    }

    @Override
    public List<CarServiceModel> getByUserUsername(String username) {


        User user = this.userRepository.getUserByUsername(username);

        List<Car> cars = this.carRepository.getAllByUser(user);

        return cars.stream().map(car -> this.modelMapper.map(car,CarServiceModel.class)).collect(Collectors.toList());
    }

    @Override
    public void deleteCarById(String id) {

        this.carRepository.deleteCarById(id);

    }
}
