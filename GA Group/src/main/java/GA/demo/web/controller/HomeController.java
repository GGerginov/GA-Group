package GA.demo.web.controller;

import GA.demo.web.controller.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.security.Principal;

@Controller
public class HomeController extends BaseController {

    @GetMapping("/")
    public ModelAndView getIndex(Principal principal){

        if (principal != null){


            return redirect("/home");
        }
        return super.view("index");
    }


    @GetMapping("/home")
    public ModelAndView getHome(){

        return super.view("index");
    }
}
