package hyoney.study.mvcexample2;

import org.springframework.hateoas.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

@RestController
public class SampleController2 {

    @GetMapping("/hello3")
    public Resource<Hello> hello3() {
        Hello hello = new Hello();
        hello.setPrefix("hey, ");
        hello.setName("hyeony");

        Resource<Hello> helloResource = new Resource<>(hello);
        helloResource.add(linkTo(methodOn(SampleController2.class).hello3()).withSelfRel());

        return  helloResource;
    }

}
