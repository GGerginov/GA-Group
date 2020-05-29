package GA.demo.web.controller;

import GA.demo.web.controller.base.BaseController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController extends BaseController {

    @GetMapping("/login")
    public ModelAndView login(){

        return super.view("login");
    }

}
