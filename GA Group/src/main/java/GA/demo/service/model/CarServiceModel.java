package GA.demo.service.model;

import GA.demo.domain.enums.EngineType;
import GA.demo.domain.enums.Transmision;


public class CarServiceModel {

    private String manufacturer;

    private String model;

    private Integer price;

    private Integer horsePower;

    private Transmision transmision;

    private EngineType engineType;

    private Integer millage;

    private String color;

    private String location;

    private String euroStandard;

    public CarServiceModel(String manufacturer, String model, Integer price, Integer horsePower, Transmision transmision, EngineType engineType, Integer millage, String color, String location, String euroStandard) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.price = price;
        this.horsePower = horsePower;
        this.transmision = transmision;
        this.engineType = engineType;
        this.millage = millage;
        this.color = color;
        this.location = location;
        this.euroStandard = euroStandard;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getHorsePower() {
        return horsePower;
    }

    public void setHorsePower(Integer horsePower) {
        this.horsePower = horsePower;
    }

    public Transmision getTransmision() {
        return transmision;
    }

    public void setTransmision(Transmision transmision) {
        this.transmision = transmision;
    }

    public EngineType getEngineType() {
        return engineType;
    }

    public void setEngineType(EngineType engineType) {
        this.engineType = engineType;
    }

    public Integer getMillage() {
        return millage;
    }

    public void setMillage(Integer millage) {
        this.millage = millage;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getEuroStandard() {
        return euroStandard;
    }

    public void setEuroStandard(String euroStandard) {
        this.euroStandard = euroStandard;
    }
}
