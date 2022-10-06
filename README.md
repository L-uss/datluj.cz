# datluj.cz
Komponenta Wordbox musí nějakým způsobem informovat svého rodiče o tom, že uživatel správně napsal zadané slovo. Za tímto účelem přidejte do props v komponentě Wordbox callback onFinish.
V posluchači události keyup zařiďte, že pokud uživatel napsal správně poslední písmenko, místo nastavení stavu zavoláte rovnou funkci onFinish.
V komponentě Stage vyrobte funkci handleFinish, která nastaví stav words na prázdné pole. Předejte tuto funkci komponentě Wordbox. Takto zajistíme unmount komponenty po správném napsání slova.
Místo nastavování stavu na prázdné pole můžeme rovnou vygenerovat nové slovo – pomocí připravené funkce generateWord. Vygenerujte slovo délky 6. Dejte však pozor, že do stavu je vždy potřeba nastavit pole, tedy v tomto případě pole o jednom prvku.
Vyzkoušejte, že po napsání slova ihned přiskočí další.