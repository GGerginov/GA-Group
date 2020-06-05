package GA.demo.validate;

import GA.demo.web.model.CarCreateBindingModel;

public interface CarValidator {

    boolean isValidCreateBindingModel(CarCreateBindingModel model);
}
