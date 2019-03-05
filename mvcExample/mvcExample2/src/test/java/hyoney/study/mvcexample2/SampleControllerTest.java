package hyoney.study.mvcexample2;

import com.gargoylesoftware.htmlunit.WebClient;
import com.gargoylesoftware.htmlunit.html.HtmlHeading1;
import com.gargoylesoftware.htmlunit.html.HtmlPage;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@WebMvcTest(SampleController.class)
public class SampleControllerTest {

    @Autowired
    WebClient webClient;
    //MockMvc mockMvc;

    @Test
    public void hello() throws Exception {

        HtmlPage page = webClient.getPage("/hello1");
        HtmlHeading1 h1 = page.getFirstByXPath("//h1");
        assertThat(h1.getTextContent()).isEqualToIgnoringCase("hyeony1");

        /*
        mockMvc.perform(get("/hello1"))
                .andExpect(status().isOk())
                .andDo(print())
                .andExpect(view().name("hello1"))
                .andExpect(model().attribute("name", is("hyeony")))
                .andExpect(content().string(containsString("hyeony")));
        */
    }

}
