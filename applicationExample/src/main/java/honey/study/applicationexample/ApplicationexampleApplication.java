package honey.study.applicationexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApplicationexampleApplication {

    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(ApplicationexampleApplication.class);
        app.setWebApplicationType(WebApplicationType.NONE);
        app.addListeners(new SampleEventListener());
        app.run(args);
    }
}
