package GA.demo.web.controller;

import GA.demo.web.controller.base.BaseController;
import GA.demo.web.model.CarCreateBindingModel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/cars")
public class CarController extends BaseController {



    @GetMapping("/search")
    public ModelAndView listCars(){

        return super.view("index");
    }

    @GetMapping("/create")
    public ModelAndView getCreate(){

        return super.view("createACar");

    }

    @PostMapping("/create")
    public ModelAndView postCreate(@ModelAttribute CarCreateBindingModel model){


        System.out.println();
        return redirect("/");

    }
}
