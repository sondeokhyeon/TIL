package hyeony.study.mvcexample1.user;

import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @GetMapping("/hello")
    public String hello() {
        return "hello1";
    }

    @PostMapping("/users/create")
    public User create(@RequestBody User user) {
        return user;
    }

}
