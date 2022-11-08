Feature: articleCheck

    Scenario: Sprawdzenie poprawnosci otwarcia artykuu
        Given Uzytkownik znajduje sie na stronie glownej tvn24
        When Uzytkownik otwiera dowolny artykul
        Then Artykul poprawnie zaladowal sie
        When Uzytkownik uruchamia odtwarzacz
        And Manipuluje odtwarzaczem
        Then Uzytkownik moze obejrzec wideo