package hyeony.study.configexample;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.core.env.Environment;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@TestPropertySource(properties = "auth.name=deokhyeon2")
@SpringBootTest
public class ConfigexampleApplicationTests {

    @Autowired
    Environment environment;

    @Test
    public void contextLoads() {
        assertThat(environment.getProperty("auth.name"))
                .isEqualTo("deokhyeon2");
    }

}
