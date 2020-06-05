package GA.demo.service.model;

import GA.demo.domain.Car;

public class PhotoServiceModel {

    private CarServiceModel car;

    private String url;

    public PhotoServiceModel() {
    }

    public CarServiceModel getCar() {
        return car;
    }

    public void setCar(CarServiceModel car) {
        this.car = car;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
