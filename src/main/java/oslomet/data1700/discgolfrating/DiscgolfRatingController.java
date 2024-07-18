package oslomet.data1700.discgolfrating;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class DiscgolfRatingController {

    @GetMapping("/hvamMain")
    public ArrayList<Integer> hvamMain() {
        return DiscgolfScraper.hvamMain;
    }
}
