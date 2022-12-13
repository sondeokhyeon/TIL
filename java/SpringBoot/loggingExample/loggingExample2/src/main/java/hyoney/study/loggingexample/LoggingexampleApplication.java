package hyoney.study.loggingexample;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LoggingexampleApplication {

    public static void main(String[] args) {
        SpringApplication application = new SpringApplication(LoggingexampleApplication.class);
        application.run(args);
    }

}
