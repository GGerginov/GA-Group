package GA.demo.domain;

import javax.persistence.*;

@Entity
@Table
public class Comfort extends BaseEntity{


    @Column(nullable = false)
    private String name;

    private Car car;


    public Comfort() {
    }

    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne(targetEntity = Car.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id", nullable = false)
    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

}
