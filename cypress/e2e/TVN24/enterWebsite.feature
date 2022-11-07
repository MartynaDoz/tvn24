Feature: enterWebsite

    Scenario: Poprawne otwarcie strony tvn24.pl
        Given Uzytkownik znajduje sie na stronie glownej www.google.com
        When Uzytkownik otwiera strone https://www.tvn24.pl
        Then Poprawnie otwarta zostaje strona glowna