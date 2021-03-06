package GA.demo.repository;

import GA.demo.domain.Car;
import GA.demo.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends JpaRepository<Car,String> {

    List<Car> getAllByUser(User user);

    void deleteCarById(String id);


}
