package GA.demo.web.controller;

import GA.demo.service.UserService;
import GA.demo.service.model.UserServiceModel;
import GA.demo.web.controller.base.BaseController;
import GA.demo.web.model.UserLoginBindingModel;
import GA.demo.web.model.UserRegisterBindingModel;
import org.dom4j.rule.Mode;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController extends BaseController {

    private final UserService userService;
    private final ModelMapper modelMapper;

    @Autowired
    public UserController(UserService userService, ModelMapper modelMapper) {
        this.userService = userService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/login")
    @PreAuthorize("isAnonymous()")
    public ModelAndView login(){

        return super.view("login");
    }

    @GetMapping("/register")
    @PreAuthorize("isAnonymous()")
    public ModelAndView register(){

        return super.view("register");
    }


    @PostMapping("/register")
    @PreAuthorize("isAnonymous()")
    public ModelAndView signUp(@ModelAttribute UserRegisterBindingModel model) throws Exception {


        this.userService.registerUser(this.modelMapper.map(model, UserServiceModel.class));


        return redirect("/login");
    }


    @InitBinder
    private void initBinder(WebDataBinder webDataBinder) {
        webDataBinder.registerCustomEditor(String.class, new StringTrimmerEditor(true));
    }


}
