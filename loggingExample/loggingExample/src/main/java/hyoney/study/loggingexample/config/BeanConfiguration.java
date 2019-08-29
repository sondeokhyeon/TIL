package hyoney.study.loggingexample.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BeanConfiguration {

    @Bean
    public String Hello() {
        return "hello World";
    }

}
