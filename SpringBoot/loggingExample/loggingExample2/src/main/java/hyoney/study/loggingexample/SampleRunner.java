package hyoney.study.loggingexample;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class SampleRunner implements ApplicationRunner {

    private Logger logger = LoggerFactory.getLogger(SampleRunner.class);

    @Autowired
    SampleProperties properties;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        logger.info("================");
        logger.info(properties.getName());
        logger.info("================");
    }
}
