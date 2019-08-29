package hyeony.study.profileexample.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Profile("prod")
@Configuration
public class BeanConfiguration {

    @Bean
    public String Hello() {
        return "hello";

    }
}
