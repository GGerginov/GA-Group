package GA.demo.exeption;

public class DuplicateUser extends Exception{


    public DuplicateUser(String message) {
        super(message);
    }
}
