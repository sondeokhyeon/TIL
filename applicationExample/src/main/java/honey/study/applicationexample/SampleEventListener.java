package honey.study.applicationexample;

import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.boot.context.event.ApplicationStartingEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

//@Component
public class SampleEventListener implements ApplicationListener<ApplicationStartingEvent> {
     // Listener sample
     // https://docs.spring.io/spring-boot/docs/current/reference/html/boot-features-spring-application.html#boot-features-application-events-and-listeners

    @Override
    public void onApplicationEvent(ApplicationStartingEvent applicationStartingEvent) {
        System.out.println("=============");
        System.out.println("Starting");
        System.out.println("=============");
    }
}

@Component
 class StatedEventListener implements ApplicationListener<ApplicationStartedEvent> {

    @Override
    public void onApplicationEvent(ApplicationStartedEvent applicationStartedEvent) {
        System.out.println("=============");
        System.out.println("Started");
        System.out.println("=============");
    }
}