package honey.study.applicationexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApplicationexampleApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(ApplicationexampleApplication.class);
        app.run(args);
    }
}
