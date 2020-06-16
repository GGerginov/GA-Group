package GA.demo.repository;

import GA.demo.domain.Feature;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeatureRepository extends JpaRepository<Feature,String> {
}
