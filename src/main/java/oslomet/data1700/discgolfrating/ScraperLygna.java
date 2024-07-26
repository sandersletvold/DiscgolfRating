package oslomet.data1700.discgolfrating;

import jakarta.annotation.PostConstruct;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;

@Component
public class ScraperLygna {

    public static ArrayList<Integer> lygna;
    private boolean isInitialized = false;

    @PostConstruct
    public void initialize() {
        lygna = new ArrayList<>(Collections.nCopies(98, 0));
        for (int i = 0; i < 38; i++) {
            lygna.set(i, 0);
        }
    }

    public synchronized void ensureInitialized() {
        if (!isInitialized) {
            lygna();
            isInitialized = true;
        }
    }

    public void lygna() {
        String url = "https://discgolfmetrix.com/course/34312";
        int minIndex = 38;
        int maxIndex = 97;
        lygna = new ArrayList<>(Collections.nCopies(maxIndex - minIndex + 1, null));
        for (int i = 0; i < minIndex - 1; i++) {
            lygna.add(0);
        }
        lygna = new ArrayList<>(Collections.nCopies(maxIndex + 1, 0));
        for (int i = 0; i < minIndex; i++) {
            lygna.set(i, 0);
        }
        try {
            Document doc = Jsoup.connect(url).get();
            Element table = doc.select("table").first();
            if (table != null) {
                Elements rows = table.select("tr");
                for (Element row : rows) {
                    Elements columns = row.select("td");
                    for (int i = 0; i < columns.size(); i += 2) {
                        if (i + 1 < columns.size()) {
                            try {
                                String indexStr = columns.get(i).text().trim();
                                int index = Integer.parseInt(indexStr);
                                String valueStr = columns.get(i + 1).text().trim();
                                int value = Integer.parseInt(valueStr);
                                int listIndex = index;
                                if (listIndex >= 0 && listIndex < lygna.size()) {
                                    lygna.set(listIndex, value);
                                } else {
                                    System.out.println("Index " + index + " is out of the expected range.");
                                }
                            } catch (NumberFormatException e) {
                                System.out.println("Skipping invalid number format: " + e.getMessage());
                            }
                        }
                    }
                }
            } else {
                System.out.println("Table not found");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public ArrayList<Integer> getLygna() {
        ensureInitialized();
        return lygna;
    }
}