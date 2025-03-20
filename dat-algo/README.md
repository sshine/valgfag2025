# Datastrukturer og algoritmer sat i spil

Se kursusbeskrivelsen på [katalog.kea.dk][katalog].

Se slideshowet, [slides.html](./slides.html) som er lavet med Vue.js.

[katalog]: https://katalog.kea.dk/course/3050401/2024-2025

## Spørgsmål fra studerende

Hvis dit spørgsmål ikke er besvaret nedenfor, så send en mail til sish@kea.dk.

### Hvordan er eksamen?

Mindst fem afleveringsopgaver skal være afleveret.

Et midtvejsprojekt skal være afleveret, præsenteret og godkendt.

Kombineret skriftlig og mundtlig prøve. Individuel mundtlig eksamen baseret på projekt og rapport udarbejdet enten individuelt eller i grupper.  Gruppestørrelsen må maksimalt være 3.

Til eksamen skal der udvikles en visualisering af en algoritme med tilhørende datastruktur – for eksempel et spil, eller en animation. Dertil en kort skriftlig dokumentation.

### Hvordan er afleveringsopgaverne?

Godt spørgsmål.

Jeg kan give nogle eksempler på tidligere opgaver:

- Binær søgning (søgning ved halvering af søgerummet)
- Linkede lister og dobbelt-linkede lister
- Grids (2D arrays) til Snake og [Game of Life][gol]
- Generere og finde vej igennem labyrinter
- En regnemaskine der kan regne med parenteser

[gol]: https://www.youtube.com/watch?v=R9Plq-D1gEk

### Er Datastrukturer og Algoritmer godt at kombinere med andre valgfag?

Datastrukturer og algoritmer egner sig at kombinere med alle programmeringsfag.

Som noget særligt, så må du gerne aflevere dine opgaver i et hvilket som helst sprog, som du har som valgfag. Så hvis du fx har valgt Python eller C, så kan du aflevere dine opgaver i det sprog i stedet, og så får du hjælp til at forstå datastrukturerne i det sprog specifikt. Det er ikke nødvendigvis lettere, end hvis du bare afleverer i Java eller JavaScript. Men det kan være, du har lyst til at blive god til et andet sprog, og gerne vil have flere lejligheder til at bruge det.

### Hvorfor skal man vælge Datastrukturer og Algoritmer som valgfag?

Datastrukturer og algoritmer er fundamentale for at programmere.

Man lærer på datamatiker-uddannelsen meget lidt om dem.

Man behøver ikke at være ekspert i algoritmer: Lidt viden gavner også.

Efter man har valg og gennemført Datastrukturer og Algoritmer, kan man pege på et stykke kode og sige...

- "Det ville gå hurtigere, hvis man brugte et HashMap!"
- "Fordi jeg har sorteret min ArrayList først, kan jeg meget nemt finde svaret."
- "Man kunne også bruge en stak, men i stedet kalder funktionen bare sig selv."
- "Min funktion har køretid O(n · log(n)), så den går ikke i stykker når vi får mange kunder."
- "Det stykke kode har køretid O(n³), så det er derfor blæseren går amok på din computer."

### Lærer man at lave computerspil?

Nej, ikke rigtige spil.

Det er ikke et spiludviklingsfag.

Vi bruger bare små spil fordi det er nemt at visualisere, hvad der foregår.

Men det er de samme problemstillinger, der opstår når man laver almindelige applikationer.

Tænk derfor ikke "Jeg har ingen interesse i computerspil, så derfor er datastrukturer og algoritmer ikke noget for mig."

### Er det et svært fag? Er der meget matematik?

Ja, det er lidt svært.

Og nej, der er ikke ret meget matematik.

Jeg viste et billede til valgfagspræsentationen, som er en illustration af "Big O", som er den matematik man bruger til at afgøre, hvor meget tid og plads en algoritme bruger, når man udfører den. Og der skal man lære en lille smule om matematiske mængder, og om hvordan en funktion vokser, hvis man tegner den som en graf.

Forhåbentligt, så er meget af det svære ved algoritmer gjort mere forståeligt ved at vi visualiserer problemstillinger

Man skal altså ikke løse en masse lange ligninger. Man skal kigge på noget kode, og forestille sig en matematisk funktion, der vokser lige så hurtigt som koden tager tid. Resten af tiden programmerer vi bare.

![Big O](./bigo.jpg)