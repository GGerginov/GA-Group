package GA.demo.service.model;

public class FeatureServiceModel {

    private String name;

    private CarServiceModel carServiceModel;

    public FeatureServiceModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public CarServiceModel getCarServiceModel() {
        return carServiceModel;
    }

    public void setCarServiceModel(CarServiceModel carServiceModel) {
        this.carServiceModel = carServiceModel;
    }
}
