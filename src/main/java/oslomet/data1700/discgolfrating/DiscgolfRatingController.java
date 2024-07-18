package oslomet.data1700.discgolfrating;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class DiscgolfRatingController {

    @GetMapping("/ekeberg")
    public ArrayList<Integer> ekeberg() {
        return ScraperEkeberg.ekeberg;
    }

    @GetMapping("/hvamMain")
    public ArrayList<Integer> hvamMain() {
        return ScraperHvamMain.hvamMain;
    }

    /*
    @GetMapping("/jessheim")
    public ArrayList<Integer> jessheim() {
        return ScraperJessheim.jessheim;
    }

    @GetMapping("/krokholBlue")
    public ArrayList<Integer> krokholBlue() {
        return ScraperKrokholBlue.krokholBlue;
    }

    @GetMapping("/krokholGold")
    public ArrayList<Integer> krokholGold() {
        return ScraperKrokholGold.krokholGold;
    }

    @GetMapping("/myrdammen")
    public ArrayList<Integer> myrdammen() {
        return ScraperMyrdammen.myrdammen;
    }

    @GetMapping("/nannestad18")
    public ArrayList<Integer> nannestad18() {
        return ScraperNannestad18.nannestad18;
    }

    @GetMapping("/nannestad23")
    public ArrayList<Integer> nannestad23() {
        return ScraperNannestad23.nannestad23;
    }

    @GetMapping("/radhusparken")
    public ArrayList<Integer> radhusparken() {
        return ScraperRadhusparken.radhusparken;
    }

    @GetMapping("/stovner")
    public ArrayList<Integer> stovner() {
        return ScraperStovner.stovner;
    }

    @GetMapping("/valstad")
    public ArrayList<Integer> valstad() {
        return ScraperValstad.valstad;
    } */
}
