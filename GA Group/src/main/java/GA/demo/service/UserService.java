package GA.demo.service;

import GA.demo.service.model.UserServiceModel;
import GA.demo.web.model.UserRegisterBindingModel;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {

    UserServiceModel registerUser(UserServiceModel userServiceModel) throws Exception;

    UserServiceModel findUserByUserName(String username);

    UserServiceModel findUserById(String id);

    UserServiceModel editUserProfile(UserServiceModel userServiceModel, String oldPassword);

    List<UserServiceModel> findAllUsers();

    void deleteUser(String id);

    void makeAdmin(String id);

    void makeUser(String id);

    void updateUserUsername(String username,String id);

}