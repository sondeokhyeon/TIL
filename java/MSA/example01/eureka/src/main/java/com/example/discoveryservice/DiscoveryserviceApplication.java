package com.example.discoveryservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer // 해당 어노테이션을 사용하면 스프링 클라우드 컨테이너에서 실행되는 애플리케이션이 유레카 서버로 등록된다.
public class DiscoveryserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DiscoveryserviceApplication.class, args);
	}

}
