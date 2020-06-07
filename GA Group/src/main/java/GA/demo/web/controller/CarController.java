package GA.demo.web.controller;

import GA.demo.domain.enums.EngineType;
import GA.demo.domain.enums.Transmision;
import GA.demo.service.CarService;
import GA.demo.service.CloudinaryService;
import GA.demo.service.model.CarServiceModel;
import GA.demo.service.model.PhotoServiceModel;
import GA.demo.service.model.UserServiceModel;
import GA.demo.validate.CarBindingModelValidator;
import GA.demo.web.controller.base.BaseController;
import GA.demo.web.model.CarCreateBindingModel;
import GA.demo.web.model.SearchCarBindingModel;
import org.dom4j.rule.Mode;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import java.io.IOException;
import java.security.Principal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/cars")
public class CarController extends BaseController {


    private final ModelMapper modelMapper;

    private final CloudinaryService cloudinaryService;

    private final CarService carService;

    private final CarBindingModelValidator carBindingModelValidator;

    @Autowired
    public CarController(ModelMapper modelMapper, CloudinaryService cloudinaryService, CarService carService, CarBindingModelValidator carBindingModelValidator) {
        this.modelMapper = modelMapper;
        this.cloudinaryService = cloudinaryService;
        this.carService = carService;
        this.carBindingModelValidator = carBindingModelValidator;
    }


    @GetMapping("/search")
    public ModelAndView listCars(){


        return super.view("search");
    }

    @PostMapping("/search")
    public ModelAndView listCarsPost(@ModelAttribute SearchCarBindingModel model){


        List<CarServiceModel> allCars = this.carService.getAllCars();

        ModelAndView view = new ModelAndView();

        view.setViewName("search");

        view.addObject("cars",allCars);

        return view;
    }


    @GetMapping("/create")
    @PreAuthorize("isAuthenticated()")
    public ModelAndView getCreate(){

        return super.view("createACar");

    }

    @PostMapping("/create")
    @PreAuthorize("isAuthenticated()")
    public ModelAndView postCreate(@ModelAttribute CarCreateBindingModel model, Principal principal) throws IOException {



        CarServiceModel carServiceModel = this.modelMapper.map(model, CarServiceModel.class);


        carServiceModel.setEngineType(EngineType.valueOf(model.getEngineType().toUpperCase()));

        carServiceModel.setTransmision(Transmision.valueOf(model.getTransmission().toUpperCase()));


        ArrayList<MultipartFile> images = new ArrayList<>(Arrays.asList(model.getImage()));

        images.remove(images.size()-1);

        for (MultipartFile multipartFile : images) {

            PhotoServiceModel photoServiceModel = new PhotoServiceModel();
            photoServiceModel.setCar(carServiceModel);
            photoServiceModel.setUrl(this.cloudinaryService.uploadImage(multipartFile));
            carServiceModel.addPhoto(photoServiceModel);
        }

        this.carService.createCar(carServiceModel,principal.getName());


        return redirect("/home");

    }


    @GetMapping("/details/{id}")
    public ModelAndView getDetails(@PathVariable String id){


        ModelAndView view = new ModelAndView();

        view.setViewName("carDetails");



        view.addObject("car",this.carService.getById(id));

        return view;
    }


    @GetMapping("/my-cars")
    @PreAuthorize("isAuthenticated()")
    public ModelAndView getMyCars(Principal principal){

        List<CarServiceModel> cars = this.carService.getByUserUsername(principal.getName());


        ModelAndView view = new ModelAndView();

        view.setViewName("mycars");

        view.addObject("cars",cars);

        return view;
    }



    @PostMapping("/delete/{id}")
    public ModelAndView deleteCar(@PathVariable String id){

        this.carService.deleteCarById(id);

        return redirect("/home");
    }


}
