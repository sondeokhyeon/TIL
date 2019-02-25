package hyoney.study.configexample2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Configexample2Application {

    public static void main(String[] args) {
        //SpringApplication.run(Configexample2Application.class, args);
        SpringApplication app = new SpringApplication(Configexample2Application.class);
        app.setWebApplicationType(WebApplicationType.NONE);
        app.run(args);
    }

}
