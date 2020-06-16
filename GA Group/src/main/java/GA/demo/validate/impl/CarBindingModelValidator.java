package GA.demo.validate.impl;

import GA.demo.validate.CarValidator;
import GA.demo.web.model.CarCreateBindingModel;
import org.springframework.stereotype.Component;

@Component
public class CarBindingModelValidator implements CarValidator {

    public CarBindingModelValidator() {
    }

    @Override
    public boolean isValidCreateBindingModel(CarCreateBindingModel model){

        if (model.getManufacturer().equals("")){
            return false;
        }
        else {
            model.setManufacturer(model.getManufacturer().trim());
        }

        if (model.getModel().equals("")){
            return false;
        }
        else {
            model.setModel(model.getModel().trim());
        }

        if (model.getEuroStandard().equals("")){
            return false;
        }
        else {
            model.setEuroStandard(model.getEuroStandard().trim());
        }

        if (model.getEngineType().equals("")){

            return false;
        }
        else {
            model.setEngineType(model.getEngineType().trim());
        }

        if (model.getImage().length == 0){
            return false;
        }

        if (model.getDescription().equals("")){

            return false;
        }

        if (model.getHorsePower() <=1 || model.getHorsePower() == null){
            return false;
        }

        if (model.getPrice() <=1 || model.getPrice() == null){
            return false;
        }



        return true;
    }


}
