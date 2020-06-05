package GA.demo.web.model;

import org.springframework.web.multipart.MultipartFile;

public class SearchCarBindingModel {

    private String manufacturer;

    private String model;

    private String euroStandard;

    private String engineType;

    private String transmission;

    private Integer year;

    private String region;

    private String town;

    public SearchCarBindingModel() {
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



    public String getEuroStandard() {
        return euroStandard;
    }

    public void setEuroStandard(String euroStandard) {
        this.euroStandard = euroStandard;
    }

    public String getEngineType() {
        return engineType;
    }

    public void setEngineType(String engineType) {
        this.engineType = engineType;
    }

    public String getTransmission() {
        return transmission;
    }

    public void setTransmission(String transmission) {
        this.transmission = transmission;
    }


    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }



    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }



}