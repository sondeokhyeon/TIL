package hyeony.study.testexample;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//@AutoConfigureMockMvc
public class SampleControllerTest {

    //  @Autowired
    //  MockMvc mockMvc;
    /*
    @Test
    public void hello() throws Exception {
        mockMvc.perform(get("/hello"))
                .andExpect(status().isOk())
                .andExpect(content().string("Hello hyeony"))
                .andDo(print());
    }
    */

    //@Autowired
    //TestRestTemplate testRestTemplate;

    @Autowired
    WebTestClient webTestClient;

    @MockBean
    SampleService mockSampleService;

    @Test
    public void hello() throws Exception {
        when(mockSampleService.getName())
                .thenReturn("hyeony");

        webTestClient.get().uri("/hello").exchange()
                        .expectStatus().isOk()
                        .expectBody(String.class).isEqualTo("Hello hyeony");

        /*
        String result = testRestTemplate.getForObject("/hello", String.class);
        assertThat(result).isEqualTo("Hello hyeony");
        */
    }

}
