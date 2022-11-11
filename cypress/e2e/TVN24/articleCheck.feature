Feature: articleCheck

    Scenario: Sprawdzenie poprawnosci otwarcia artykuu
        Given Uzytkownik znajduje sie na stronie glownej tvn24
        When Uzytkownik otwiera najswiezszy artykul
        Then Artykul poprawnie zaladowal sie
        When Uzytkownik pauzuje odtwarzanie
        And Uzytkownik wznawia odtwarzanie
        Then Uzytkownik moze obejrzec wideo