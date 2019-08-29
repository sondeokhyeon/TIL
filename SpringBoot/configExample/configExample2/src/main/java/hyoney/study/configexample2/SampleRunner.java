package hyoney.study.configexample2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class SampleRunner implements ApplicationRunner {

    @Autowired
    hyeonyProperties hyeonyProperties;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        System.out.println("================");
        System.out.println(hyeonyProperties.getName());
        System.out.println(hyeonyProperties.getAge());
        System.out.println("================");
    }
}
