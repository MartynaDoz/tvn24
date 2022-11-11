Feature: articleCheck

    Scenario: Sprawdzenie poprawnosci otwarcia artykuu
        Given Uzytkownik znajduje sie na stronie glownej tvn24
        When Uzytkownik otwiera najswiezszy artykul
        Then Artykul poprawnie zaladowal sie
        And Uzytkownik manipuluje odtwarzaczem