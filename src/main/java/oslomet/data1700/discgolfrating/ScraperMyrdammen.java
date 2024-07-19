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
public class ScraperMyrdammen {

    public static ArrayList<Integer> myrdammen;
    private boolean isInitialized = false;

    @PostConstruct
    public void initialize() {
        myrdammen = new ArrayList<>(Collections.nCopies(93, 0));
        for (int i = 0; i < 33; i++) {
            myrdammen.set(i, 0);
        }
    }

    public synchronized void ensureInitialized() {
        if (!isInitialized) {
            myrdammen();
            isInitialized = true;
        }
    }

    public void myrdammen() {
        String url = "https://discgolfmetrix.com/course/23475";
        int minIndex = 33;
        int maxIndex = 92;
        myrdammen = new ArrayList<>(Collections.nCopies(maxIndex - minIndex + 1, null));
        for (int i = 0; i < minIndex - 1; i++) {
            myrdammen.add(0);
        }
        myrdammen = new ArrayList<>(Collections.nCopies(maxIndex + 1, 0));
        for (int i = 0; i < minIndex; i++) {
            myrdammen.set(i, 0);
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
                                if (listIndex >= 0 && listIndex < myrdammen.size()) {
                                    myrdammen.set(listIndex, value);
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
    public ArrayList<Integer> getMyrdammen() {
        ensureInitialized();
        return myrdammen;
    }
}