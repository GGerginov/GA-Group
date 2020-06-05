package GA.demo.service.impl;

import GA.demo.domain.User;
import GA.demo.exeption.DuplicateUser;
import GA.demo.repository.UserRepository;
import GA.demo.service.RoleService;
import GA.demo.service.UserService;
import GA.demo.service.model.UserServiceModel;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final RoleService roleService;
    private final ModelMapper modelMapper;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    public UserServiceImpl(UserRepository userRepository, RoleService roleService,
                           ModelMapper modelMapper, BCryptPasswordEncoder bCryptPasswordEncoder) {

        this.userRepository = userRepository;
        this.roleService = roleService;
        this.modelMapper = modelMapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }



    @Override
    public UserServiceModel registerUser(UserServiceModel userServiceModel) throws Exception {


        for (User user : this.userRepository.findAll()) {

            if (userServiceModel.getEmail().equals(user.getEmail())){

                throw new DuplicateUser("This user already exist");

            }

        }

        this.roleService.seedRolesInDb();
        if (this.userRepository.count() == 0) {
            userServiceModel.setAuthorities(this.roleService.findAllRoles());
        } else {
            userServiceModel.setAuthorities(new LinkedHashSet<>());

            userServiceModel.getAuthorities().add(this.roleService.findByAuthority("ROLE_USER"));
        }


        User user = this.modelMapper.map(userServiceModel, User.class);
        user.setPassword(this.bCryptPasswordEncoder.encode(userServiceModel.getPassword()));


        return this.modelMapper.map(this.userRepository.saveAndFlush(user), UserServiceModel.class);
    }

    @Override
    public UserDetails loadUserByUsername(String username) {
        return this.userRepository
                .getUserByEmail(username);

    }

    @Override
    public UserServiceModel findUserByUserName(String username) {
        return this.modelMapper.map(this.userRepository.getUserByUsername(username), UserServiceModel.class);
    }

    @Override
    public UserServiceModel findUserById(String id) {
        return this.modelMapper.map(this.userRepository.getUserById(id), UserServiceModel.class);

    }

    @Override
    public UserServiceModel editUserProfile(UserServiceModel userServiceModel, String oldPassword) {
        User user = this.userRepository.getUserByUsername(userServiceModel.getUsername());


        user.setPassword(!"".equals(userServiceModel.getPassword()) ?
                this.bCryptPasswordEncoder.encode(userServiceModel.getPassword()) :
                user.getPassword());
        user.setEmail(userServiceModel.getEmail());


        return this.modelMapper.map(this.userRepository.saveAndFlush(user), UserServiceModel.class);
    }

    @Override
    public List<UserServiceModel> findAllUsers() {
        return this.userRepository.findAll()
                .stream()
                .map(u -> this.modelMapper.map(u, UserServiceModel.class))
                .collect(Collectors.toList());
    }

    @Override
    public void deleteUser(String id) {
        User user = this.userRepository.getUserById(id);

        this.userRepository.delete(user);
    }

    @Override
    public void makeAdmin(String id) {
        User user = this.userRepository.getUserById(id);

        UserServiceModel userServiceModel = this.modelMapper.map(user, UserServiceModel.class);
        userServiceModel.getAuthorities().clear();

        userServiceModel.getAuthorities().add(this.roleService.findByAuthority("ROLE_USER"));
        userServiceModel.getAuthorities().add(this.roleService.findByAuthority("ROLE_ADMIN"));

        this.userRepository.saveAndFlush(this.modelMapper.map(userServiceModel, User.class));
    }

    @Override
    public void makeUser(String id) {
        User user = this.userRepository.getUserById(id);

        UserServiceModel userServiceModel = this.modelMapper.map(user, UserServiceModel.class);
        userServiceModel.getAuthorities().clear();

        userServiceModel.getAuthorities().add(this.roleService.findByAuthority("ROLE_USER"));


        this.userRepository.saveAndFlush(this.modelMapper.map(userServiceModel, User.class));
    }

    @Override
    public void updateUserUsername(String username, String id) {

    }



}
