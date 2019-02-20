package honey.study.applicationexample;

import org.springframework.boot.context.event.ApplicationStartedEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

@Component
public class SampleEventListener implements ApplicationListener<ApplicationStartedEvent> {
    /*
        Listener sample
     */
    @Override
    public void onApplicationEvent(ApplicationStartedEvent applicationStartedEvent) {
        System.out.println("=============");
        System.out.println("Starting");
        System.out.println("=============");
    }
}
