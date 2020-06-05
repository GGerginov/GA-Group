package GA.demo.repository;

import GA.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {

    User getUserByEmail(String email);


    User getUserByEmailAndPassword(String email,String password);


    User getUserByUsername(String username);

    User getUserById(String id);


}
