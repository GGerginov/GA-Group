package GA.demo.domain;

import GA.demo.domain.enums.EngineType;
import GA.demo.domain.enums.Transmision;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Car extends BaseEntity{

    @Column(nullable = false)
    private String manufacturer;

    @Column(nullable = false)
    private String model;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = false)
    private Integer horsePower;

    @Column(nullable = false)
    private Integer year;

    @Enumerated(EnumType.STRING)
    @Column
    private Transmision transmision;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private EngineType engineType;

    @Column(nullable = false)
    private Integer millage;

    @Column(nullable = false)
    private String town;

    @Column(nullable = false)
    private String region;

    private String description;

    @Column()
    private String euroStandard;

    private List<Photo> photos;

    private List<Feature> features;

    private List<Comfort> comforts;

    private User user;


    public Car() {
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

    public void setMillage(Integer range) {
        this.millage = range;
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

    @Lob
    @Column(length = 1024)
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getEuroStandard() {
        return euroStandard;
    }

    public void setEuroStandard(String euroStandard) {
        this.euroStandard = euroStandard;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    @ManyToOne(targetEntity = User.class,cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @OneToMany(mappedBy = "car",cascade = CascadeType.ALL)
    public List<Photo> getPhotos() {
        return photos;
    }

    public void setPhotos(List<Photo> photos) {
        this.photos = photos;
    }

    @OneToMany(mappedBy = "car",cascade = CascadeType.ALL)
    public List<Feature> getFeatures() {
        return features;
    }

    public void setFeatures(List<Feature> features) {
        this.features = features;
    }

    @OneToMany(mappedBy = "car",cascade = CascadeType.ALL)
    public List<Comfort> getComforts() {
        return comforts;
    }

    public void setComforts(List<Comfort> comforts) {
        this.comforts = comforts;
    }
}
