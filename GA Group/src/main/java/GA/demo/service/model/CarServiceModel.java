package GA.demo.service.model;

import GA.demo.domain.enums.EngineType;
import GA.demo.domain.enums.Transmision;
import GA.demo.service.ComfortService;

import java.util.ArrayList;
import java.util.List;


public class CarServiceModel {

    private String id;

    private UserServiceModel user;

    private String manufacturer;

    private String model;

    private Integer price;

    private String year;

    private Integer horsePower;

    private Transmision transmision;

    private EngineType engineType;

    private Integer millage;

    private String color;

    private String town;

    private String region;

    private String euroStandard;

    private String description;

    private List<FeatureServiceModel> features;

    private List<ComfortServiceModel> comforts;

    private List<PhotoServiceModel> photos;


    public CarServiceModel() {
        this.photos = new ArrayList<>();
    }

    public void addPhoto(PhotoServiceModel photoServiceModel){
        this.photos.add(photoServiceModel);
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
        return town;
    }

    public void setLocation(String location) {
        this.town = location;
    }

    public String getEuroStandard() {
        return euroStandard;
    }

    public void setEuroStandard(String euroStandard) {
        this.euroStandard = euroStandard;
    }

    public List<PhotoServiceModel> getPhotos() {
        return photos;
    }

    public void setPhotos(List<PhotoServiceModel> photos) {
        this.photos = photos;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public UserServiceModel getUser() {
        return user;
    }

    public void setUser(UserServiceModel user) {
        this.user = user;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }


    public List<FeatureServiceModel> getFeatures() {
        return features;
    }

    public void setFeatures(List<FeatureServiceModel> features) {
        this.features = features;
    }


    public List<ComfortServiceModel> getComforts() {
        return comforts;
    }

    public void setComforts(List<ComfortServiceModel> comforts) {
        this.comforts = comforts;
    }
}
