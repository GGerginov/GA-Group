package GA.demo.domain;

import javax.persistence.*;

@Table
@Entity
public class Photo extends BaseEntity{

    private Car car;

    @Column(nullable = false)
    private String url;

    public Photo() {
    }

    @ManyToOne(targetEntity = Car.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id", nullable = false)
    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
