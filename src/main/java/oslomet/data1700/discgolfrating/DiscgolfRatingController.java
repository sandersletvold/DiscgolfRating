package oslomet.data1700.discgolfrating;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class DiscgolfRatingController {

    @Autowired
    private ScraperEkeberg scraperEkeberg;

    @GetMapping("/ekeberg")
    public ArrayList<Integer> ekeberg() {
        return scraperEkeberg.getEkeberg();
    }

    @Autowired
    private ScraperHvamMain scraperHvamMain;

    @GetMapping("/hvamMain")
    public ArrayList<Integer> hvamMain() {
        return scraperHvamMain.getHvamMain();
    }

    @Autowired
    private ScraperJessheim scraperJessheim;

    @GetMapping("/jessheim")
    public ArrayList<Integer> jessheim() {
        return scraperJessheim.getJessheim();
    }

    @Autowired
    private ScraperKrokholBlue scraperKrokholBlue;

    @GetMapping("/krokholBlue")
    public ArrayList<Integer> krokholBlue() {
        return scraperKrokholBlue.getKrokholBlue();
    }

    @Autowired
    private ScraperKrokholGold scraperKrokholGold;

    @GetMapping("/krokholGold")
    public ArrayList<Integer> krokholGold() {
        return scraperKrokholGold.getKrokholGold();
    }

    @Autowired
    private ScraperMyrdammen scraperMyrdammen;

    @GetMapping("/myrdammen")
    public ArrayList<Integer> myrdammen() {
        return scraperMyrdammen.getMyrdammen();
    }

    @Autowired
    private ScraperNannestad18 scraperNannestad18;

    @GetMapping("/nannestad18")
    public ArrayList<Integer> nannestad18() {
        return scraperNannestad18.getNannestad18();
    }

    @Autowired
    private ScraperNannestad23 scraperNannestad23;

    @GetMapping("/nannestad23")
    public ArrayList<Integer> nannestad23() {
        return scraperNannestad23.getNannestad23();
    }

    @Autowired
    private ScraperRadhusparken scraperRadhusparken;

    @GetMapping("/radhusparken")
    public ArrayList<Integer> radhusparken() {
        return scraperRadhusparken.getRadhusparken();
    }

    @Autowired
    private ScraperStovner scraperStovner;

    @GetMapping("/stovner")
    public ArrayList<Integer> stovner() {
        return scraperStovner.getStovner();
    }

    @Autowired
    private ScraperValstad scraperValstad;

    @GetMapping("/valstad")
    public ArrayList<Integer> valstad() {
        return scraperValstad.getValstad();
    }
}
