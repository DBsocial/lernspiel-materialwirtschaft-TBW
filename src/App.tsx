<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Materialwirtschaft & Logistik Lernseite</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #f0f4f8;
            color: #333;
        }
        .container {
            max-width: 1200px;
        }
        .section-title {
            color: #2c3e50;
            font-weight: bold;
            border-bottom: 2px solid #3498db;
            padding-bottom: 8px;
            margin-bottom: 24px;
        }
        .card {
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 24px;
            transition: transform 0.2s;
            display: none; /* Initially hide all content sections */
        }
        .card.active {
            display: block; /* Show active section */
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .nav-link {
            transition: color 0.2s, background-color 0.2s;
        }
        .nav-link.active {
            background-color: #3498db;
            color: #ffffff;
            font-weight: bold;
        }
        .nav-link:hover {
            color: #3498db;
            background-color: #e0f2f7;
        }
        .math-formula {
            background-color: #ecf0f1;
            border-left: 4px solid #3498db;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 8px;
            font-size: 1.1em;
            overflow-x: auto;
        }
        .table-container {
            overflow-x: auto;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 1rem;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
            white-space: nowrap;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        .example-block {
            background-color: #f8f8f8;
            border: 1px dashed #ccc;
            padding: 15px;
            border-radius: 8px;
            margin-top: 15px;
            margin-bottom: 15px;
        }
    </style>
    <!-- MathJax for rendering LaTeX formulas -->
    <script type="text/javascript" id="MathJax-script" async
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
    </script>
    <script>
      MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']]
        },
        svg: {
          fontCache: 'global'
        }
      };

      // JavaScript for dynamic content display
      document.addEventListener('DOMContentLoaded', function() {
          const navLinks = document.querySelectorAll('.nav-link');
          const sections = document.querySelectorAll('main section.card');
          const welcomeSection = document.getElementById('welcome-section');

          // Function to show a specific section and update active nav link
          function showSection(sectionId) {
              // Hide all sections
              sections.forEach(section => {
                  section.classList.remove('active');
              });
              // Deactivate all nav links
              navLinks.forEach(link => {
                  link.classList.remove('active');
              });

              // Show the selected section
              const targetSection = document.getElementById(sectionId);
              if (targetSection) {
                  targetSection.classList.add('active');
                  // Activate the corresponding nav link
                  const activeNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                  if (activeNavLink) {
                      activeNavLink.classList.add('active');
                  }
                  // Scroll to the top of the section (optional, for better UX)
                  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
          }

          // Add event listeners to navigation links
          navLinks.forEach(link => {
              link.addEventListener('click', function(event) {
                  event.preventDefault(); // Prevent default anchor link behavior
                  const sectionId = this.getAttribute('href').substring(1); // Get section ID from href
                  showSection(sectionId);
              });
          });

          // Show the welcome section by default on page load
          if (welcomeSection) {
              welcomeSection.classList.add('active');
          }
      });
    </script>
</head>
<body class="p-6">
    <div class="container mx-auto">
        <!-- Header Section -->
        <header class="text-center mb-10">
            <h1 class="text-5xl font-extrabold text-blue-800 mb-4">Willkommen zur Lernseite für Materialwirtschaft & Logistik</h1>
            <p class="text-xl text-gray-700">Vertiefen Sie Ihr Wissen in wichtigen Themen wie Bestellmengenrechnung, Sicherheitsbestand, Bedarfsvorhersage und mehr.</p>
        </header>

        <!-- Navigation -->
        <nav class="mb-10 p-4 bg-blue-100 rounded-lg shadow-md flex flex-wrap justify-center gap-4">
            <a href="#bmr" class="nav-link px-6 py-3 rounded-full text-blue-700 hover:bg-blue-200">Bestellmengenrechnung</a>
            <a href="#sb" class="nav-link px-6 py-3 rounded-full text-blue-700 hover:bg-blue-200">Sicherheitsbestand</a>
            <a href="#bedarfsvorhersage" class="nav-link px-6 py-3 rounded-full text-blue-700 hover:bg-blue-200">Bedarfsvorhersage</a>
            <a href="#fehlerrechnung" class="nav-link px-6 py-3 rounded-full text-blue-700 hover:bg-blue-200">Fehlerrechnung</a>
            <a href="#abc-analyse" class="nav-link px-6 py-3 rounded-full text-blue-700 hover:bg-blue-200">ABC-Analyse</a>
            <a href="#xyz-analyse" class="nav-link px-6 py-3 rounded-full text-blue-700 hover:bg-blue-200">XYZ-Analyse</a>
        </nav>

        <!-- Main Content Sections -->
        <main>
            <!-- Welcome Section (initially displayed) -->
            <section id="welcome-section" class="mb-12 card active">
                <h2 class="text-3xl section-title mb-6">Willkommen auf der Lernseite!</h2>
                <p class="text-lg mb-4">Wählen Sie oben einen Themenbereich aus, um die entsprechenden Inhalte zu erkunden.</p>
                <p class="text-md text-gray-600">Diese Seite behandelt wichtige Konzepte aus der Materialwirtschaft und Logistik, basierend auf den von Ihnen bereitgestellten Dokumenten.</p>
                <ul class="list-disc list-inside mt-4 text-gray-600">
                    <li>Klicken Sie auf "Bestellmengenrechnung", um die Berechnung der optimalen Bestellmengen zu lernen.</li>
                    <li>Erfahren Sie mehr über den "Sicherheitsbestand" und wie er vor Engpässen schützt.</li>
                    <li>Tauchen Sie ein in die Methoden der "Bedarfsvorhersage" für präzise Prognosen.</li>
                    <li>Verstehen Sie die "Fehlerrechnung", um die Güte Ihrer Prognosen zu bewerten.</li>
                    <li>Entdecken Sie die "ABC-Analyse" zur Klassifizierung von Materialien nach Wert.</li>
                    <li>Lernen Sie die "XYZ-Analyse" zur Klassifizierung nach Verbrauchsregelmäßigkeit kennen.</li>
                </ul>
            </section>

            <!-- Bestellmengenrechnung (BMR) -->
            <section id="bmr" class="mb-12 card">
                <h2 class="text-3xl section-title mb-6">Bestellmengenrechnung (BMR)</h2>
                <p class="text-lg mb-4">Die Bestellmengenrechnung hilft Unternehmen, die optimale Bestellmenge zu ermitteln, um die Gesamtkosten (Bestellkosten und Lagerhaltungskosten) zu minimieren. Es gibt statische und dynamische Verfahren.</p>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Statische Bestellmengenrechnung (Andler-Formel)</h3>
                <p class="mb-4">Die klassische Andler-Formel wird verwendet, wenn der Jahresbedarf konstant und die Lieferzeit bekannt ist. Sie minimiert die Summe aus fixen Bestellkosten und variablen Lagerhaltungskosten.</p>
                <div class="math-formula">
                    $$\text{optimale Bestellmenge } (x_{\text{opt}}) = \sqrt{\frac{200 \cdot \text{Jahresbedarf} \cdot \text{Bestellfixe Kosten}}{\text{Einstandspreis pro ME} \cdot \text{Lagerhaltungskostensatz}}}$$
                </div>
                <p class="mb-4">Der <b>Lagerhaltungskostensatz</b> setzt sich zusammen aus dem Lagerkostensatz (z.B. für Lagerraum, Personal) und dem Kapitalbindungskostensatz (Kosten des in den Beständen gebundenen Kapitals).</p>
                <p class="mb-4">Aus den Dokumenten haben wir folgende Basisdaten:</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Jahresbedarf: 100 ME/Jahr (aus "Berechnungen - BMR-Aufgabe.pdf")</li>
                    <li>Bestellkosten: 100 €/Bestellung (aus "Berechnungen - BMR-Aufgabe.pdf")</li>
                    <li>Einstandspreis: 100 €/ME (aus "Berechnungen - BMR-Aufgabe.pdf")</li>
                    <li>Lagerkostensatz: 4% (aus "Berechnungen - BMR-Aufgabe.pdf")</li>
                    <li>Kapitalbindungskostensatz: 4% (aus "Berechnungen - BMR-Aufgabe.pdf")</li>
                    <li>Gesamter Lagerhaltungskostensatz: 8% (aus "Berechnungen - BMR-Aufgabe.pdf")</li>
                </ul>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispielrechnung (Basisdaten 10):</h4>
                    <p>Jahresbedarf (J) = 100 ME/Jahr</p>
                    <p>Bestellkosten (K_B) = 100 €/Bestellung</p>
                    <p>Einstandspreis (E) = 100 €/ME</p>
                    <p>Lagerhaltungskostensatz (LHS) = 8%</p>
                    <div class="math-formula">
                        $$x_{\text{opt}} = \sqrt{\frac{2 \cdot 100 \cdot 100}{100 \cdot 0,08}} = \sqrt{\frac{20000}{8}} = \sqrt{2500} = 50 \text{ ME/Bestellung}$$
                    </div>
                    <p>Dies entspricht der im Dokument "Berechnungen - BMR-Aufgabe.pdf" berechneten optimalen Bestellmenge.</p>
                </div>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Dynamische Bestellmengenrechnung</h3>
                <p class="mb-4">Bei der dynamischen Bestellmengenrechnung wird ein schwankender Bedarf über mehrere Perioden berücksichtigt. Ziel ist es, die Kosten über einen bestimmten Planungszeitraum zu optimieren.</p>
                <p class="mb-4">Wir betrachten die Verfahren aus "Berechnungen - BMR-dyn Aufg.pdf" und "Berechnungen - BMR-dyn.pdf":</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Verfahren der gleitenden wirtschaftlichen Bestellmenge</li>
                    <li>Kostenausgleichsverfahren</li>
                    <li>Stück-Perioden-Ausgleichsverfahren</li>
                </ul>

                <h4 class="text-xl font-semibold text-gray-700 mb-3">1. Verfahren der gleitenden wirtschaftlichen Bestellmenge</h4>
                <p class="mb-4">Dieses Verfahren berechnet für jeden Zeitpunkt die optimale Bestellmenge basierend auf dem zukünftigen Bedarf. Es wird oft die spezifische Lagerhaltungskosten pro Mengeneinheit und Monat ($LHK_{spezifisch}$) verwendet.</p>
                <div class="math-formula">
                    $$LHK_{\text{spezifisch}} = \frac{\text{Einstandspreis} \cdot \text{Lagerhaltungskostensatz}}{\text{Anzahl der Perioden im Jahr}}$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - BMR-dyn.pdf"):</h4>
                    <p>Einstandspreis = 10,00 €/ME</p>
                    <p>Lagerhaltungskostensatz p.a. = 24,00 %</p>
                    <div class="math-formula">
                        $$LHK_{\text{spezifisch}} = \frac{10 \text{ €/ME} \cdot 0,24}{12 \text{ Monate}} = 0,20 \text{ € pro ME und Monat}$$
                    </div>
                </div>
                <p class="mb-4">In den bereitgestellten Dokumenten werden detaillierte Tabellen zur Berechnung der Gesamtkosten pro Mengeneinheit für verschiedene Bestellmengen und Zeiträume dargestellt. Das Ziel ist, den Zeitpunkt zu finden, an dem die Gesamtkosten pro Mengeneinheit minimal sind.</p>

                <h4 class="text-xl font-semibold text-gray-700 mb-3">2. Kostenausgleichsverfahren</h4>
                <p class="mb-4">Dieses Verfahren zielt darauf ab, die fixen Bestellkosten und die variablen Lagerhaltungskosten so auszugleichen, dass sie über den Betrachtungszeitraum möglichst gleich sind. Es wird eine kumulative Betrachtung von Bedarf, Lagerhaltungskosten und Bestellkosten vorgenommen.</p>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Ansatz (vereinfacht):</h4>
                    <p>Man sucht den Punkt, an dem die kumulierten Lagerhaltungskosten annähernd den Bestellfixen Kosten entsprechen, um eine Bestellung auszulösen.</p>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Monat</th>
                                    <th>Bedarf [ME]</th>
                                    <th>Kum. Bedarf [ME]</th>
                                    <th>DLD [Monate]</th>
                                    <th>Lagerhaltungskosten [€]</th>
                                    <th>Bestellkosten [€]</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>80</td><td>80</td><td>0,5</td><td>4,00</td><td>25,00</td></tr>
                                <tr><td>2</td><td>20</td><td>100</td><td>1,5</td><td>3,00</td><td></td></tr>
                                <tr><td>3</td><td>40</td><td>140</td><td>2,5</td><td>10,00</td><td></td></tr>
                                <tr><td>4</td><td>20</td><td>160</td><td>3,5</td><td>7,00</td><td></td></tr>
                                <!-- This table snippet is from Berechnungen - BMR-dyn Aufg.pdf, Kostenausgleichsverfahren section -->
                            </tbody>
                        </table>
                    </div>
                    <p>Aus der Tabelle in "Berechnungen - BMR-dyn Aufg.pdf" im Kostenausgleichsverfahren wird ersichtlich, dass bei einer Bestellmenge von 160 ME (Bedarf für Monat 1-4) die kumulierten Lagerhaltungskosten für diesen Zeitraum (24,00 €) nahe an den Bestellfixen Kosten (25,00 €) liegen.</p>
                </div>

                <h4 class="text-xl font-semibold text-gray-700 mb-3">3. Stück-Perioden-Ausgleichsverfahren</h4>
                <p class="mb-4">Dieses Verfahren (auch Perioden-Stück-Verfahren genannt) versucht, die Kosten für die Lagerhaltung der bestellten Menge über die Zeit so auszugleichen, dass die Bestellfixen Kosten pro Bestellung minimiert werden. Es wird der PPV (Produktions-Perioden-Volumen) berechnet, der das Verhältnis von Bestellkosten zu spezifischen Lagerhaltungskosten darstellt.</p>
                <div class="math-formula">
                    $$\text{PPV} = \frac{\text{Bestellfixe Kosten}}{\text{spezifische Lagerhaltungskosten pro ME und Monat}}$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - BMR-dyn Aufg.pdf"):</h4>
                    <p>Bestellfixe Kosten = 25,00 €</p>
                    <p>Spezifische Lagerhaltungskosten = 0,10 € pro ME und Monat</p>
                    <div class="math-formula">
                        $$\text{PPV} = \frac{25 \text{ €}}{0,10 \text{ €/ME/Monat}} = 250 \text{ ME-Monate}$$
                    </div>
                    <p>Anschließend wird der Bedarf über die Monate kumuliert, bis die kumulierten ME-Monate den berechneten PPV-Wert erreichen oder überschreiten, um den nächsten Bestellzeitpunkt zu bestimmen.</p>
                </div>
            </section>

            <!-- Sicherheitsbestand (SB) -->
            <section id="sb" class="mb-12 card">
                <h2 class="text-3xl section-title mb-6">Sicherheitsbestand (SB)</h2>
                <p class="text-lg mb-4">Der Sicherheitsbestand ist ein zusätzlicher Lagerbestand, der dazu dient, Lieferengpässe oder unerwartete Nachfrageschwankungen auszugleichen und so die Lieferfähigkeit sicherzustellen.</p>
                <p class="mb-4">Die Berechnung des Sicherheitsbestands basiert oft auf statistischen Methoden, um die Unsicherheiten im Verbrauch zu quantifizieren.</p>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Berechnung des Sicherheitsbestands</h3>
                <p class="mb-4">Die bereitgestellten Daten aus "Berechnungen - SB.pdf" zeigen die Berechnung des Sicherheitsbestands basierend auf dem mittleren absoluten Fehler (MAD) und der Standardabweichung ($S$).</p>

                <h4 class="text-xl font-semibold text-gray-700 mb-3">1. Mittlerer Absoluter Fehler (MAD)</h4>
                <p class="mb-4">Der MAD misst die durchschnittliche Größe der Fehler zwischen den tatsächlichen Verbräuchen und dem Mittelwert.</p>
                <div class="math-formula">
                    $$\text{MAD} = \frac{\sum |x_i - \overline{x}|}{n}$$
                </div>
                <ul class="list-disc list-inside mb-4">
                    <li>$x_i$: Ist-Verbrauch im Monat i</li>
                    <li>$\overline{x}$: Durchschnittlicher Ist-Verbrauch</li>
                    <li>$n$: Anzahl der Perioden</li>
                </ul>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispielrechnung (aus "Berechnungen - SB.pdf"):</h4>
                    <p>Ist-Verbrauch über 12 Monate:</p>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr><th>Monat</th><th>Ist-Verbrauch [ME]</th><th>$|x_i - \overline{x}|$</th><th>$(x_i - \overline{x})^2$</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>95</td><td>5</td><td>25</td></tr>
                                <tr><td>2</td><td>88</td><td>12</td><td>144</td></tr>
                                <tr><td>3</td><td>102</td><td>2</td><td>4</td></tr>
                                <tr><td>4</td><td>95</td><td>5</td><td>25</td></tr>
                                <tr><td>5</td><td>105</td><td>5</td><td>25</td></tr>
                                <tr><td>6</td><td>92</td><td>8</td><td>64</td></tr>
                                <tr><td>7</td><td>103</td><td>3</td><td>9</td></tr>
                                <tr><td>8</td><td>115</td><td>15</td><td>225</td></tr>
                                <tr><td>9</td><td>94</td><td>6</td><td>36</td></tr>
                                <tr><td>10</td><td>102</td><td>2</td><td>4</td></tr>
                                <tr><td>11</td><td>114</td><td>14</td><td>196</td></tr>
                                <tr><td>12</td><td>95</td><td>5</td><td>25</td></tr>
                                <tr><td><b>Summe</b></td><td><b>1200</b></td><td><b>82</b></td><td><b>782</b></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Durchschnitt ($\overline{x}$) = $1200 / 12 = 100$ ME</p>
                    <div class="math-formula">
                        $$\text{MAD} = \frac{82}{12} \approx 6,83 \text{ ME}$$
                    </div>
                </div>

                <h4 class="text-xl font-semibold text-gray-700 mb-3">2. Standardabweichung (S)</h4>
                <p class="mb-4">Die Standardabweichung misst die Streuung der Daten um den Mittelwert und ist ein robusteres Maß für die Volatilität.</p>
                <div class="math-formula">
                    $$S = \sqrt{\frac{\sum (x_i - \overline{x})^2}{n-1}}$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispielrechnung (aus "Berechnungen - SB.pdf"):</h4>
                    <p>Summe $(x_i - \overline{x})^2 = 782$</p>
                    <div class="math-formula">
                        $$S = \sqrt{\frac{782}{12-1}} = \sqrt{\frac{782}{11}} \approx \sqrt{71,09} \approx 8,43 \text{ ME}$$
                    </div>
                    <p>Hinweis: Im PDF ist $S=8,07$ ME angegeben, was auf eine leicht abweichende Berechnung oder gerundete Zwischenwerte hindeutet. Für die fortführenden Rechnungen nutzen wir die Werte aus dem PDF.</p>
                </div>

                <h4 class="text-xl font-semibold text-gray-700 mb-3">Sicherheitsbestand basierend auf MAD und S</h4>
                <p class="mb-4">Der Sicherheitsbestand wird berechnet, indem der MAD oder S mit einem Servicegradfaktor ($Z$-Faktor) multipliziert wird. Der Servicegradfaktor hängt vom gewünschten Servicegrad ab.</p>
                <div class="math-formula">
                    $$\text{SB} = \text{Z-Faktor} \cdot \text{MAD}$$
                    $$\text{SB} = \text{Z-Faktor} \cdot S$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiele (aus "Berechnungen - SB.pdf"):</h4>
                    <p>Mit MAD = 6,83 ME und S = 8,07 ME</p>
                    <ul class="list-disc list-inside">
                        <li>Servicegrad 84,13% ($Z=1,000$):</li>
                        <li>SB mit MAD = $1,250 \cdot 6,83 = 8,54$ ME (Hinweis: Z-Faktor 1.250 im PDF für 84.13% ist nicht standard. Normalerweise ist Z=1.0 für ca. 84.13%)</li>
                        <li>SB mit S = $1,000 \cdot 8,07 = 8,07$ ME</li>
                        <li>Servicegrad 97,72% ($Z=2,000$):</li>
                        <li>SB mit MAD = $2,500 \cdot 6,83 = 17,08$ ME</li>
                        <li>SB mit S = $2,000 \cdot 8,07 = 16,14$ ME</li>
                        <li>Servicegrad 99,87% ($Z=3,000$):</li>
                        <li>SB mit MAD = $3,750 \cdot 6,83 = 25,61$ ME</li>
                        <li>SB mit S = $3,000 \cdot 8,07 = 24,21$ ME</li>
                    </ul>
                    <p>Die Wahl des Z-Faktors und damit des Servicegrads ist eine strategische Entscheidung, die die Kosten für den Sicherheitsbestand gegen das Risiko eines Fehlbestands abwägt.</p>
                </div>
            </section>

            <!-- Bedarfsvorhersage -->
            <section id="bedarfsvorhersage" class="mb-12 card">
                <h2 class="text-3xl section-title mb-6">Bedarfsvorhersage (Stochastische Bedarfsermittlung)</h2>
                <p class="text-lg mb-4">Die Bedarfsvorhersage ist entscheidend für eine effiziente Lagerhaltung und Produktionsplanung. Sie nutzt historische Verbrauchsdaten, um zukünftige Bedarfe zu prognostizieren.</p>
                <p class="mb-4">Wir betrachten verschiedene Methoden aus "Berechnungen - Bedarfsvorhersage.pdf":</p>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">a) Methode der arithmetischen Mittelwertbildung</h3>
                <p class="mb-4">Dies ist die einfachste Methode, bei der der Durchschnitt aller historischen Verbrauchswerte als Prognose für die Zukunft verwendet wird.</p>
                <div class="math-formula">
                    $$\text{V}_{prognose} = \frac{\sum \text{Ist-Verbrauch}}{\text{Anzahl der Perioden}}$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - Bedarfsvorhersage.pdf"):</h4>
                    <p>Verbrauchswerte (Jan-Jun): 1050, 1150, 1280, 1180, 1240, 1300 ME</p>
                    <div class="math-formula">
                        $$V_{prognose} = \frac{1050+1150+1280+1180+1240+1300}{6} = \frac{7200}{6} = 1200,00 \text{ ME}$$
                    </div>
                </div>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">b) Methode der gleitenden Mittelwertbildung mit 4 Perioden</h3>
                <p class="mb-4">Diese Methode verwendet den Durchschnitt der letzten 'n' Perioden, um kurzfristige Trends besser abzubilden und alte Daten zu "vergessen".</p>
                <div class="math-formula">
                    $$V_{\text{prognose}, t} = \frac{\sum_{i=t-n+1}^{t} \text{Ist-Verbrauch}_i}{n}$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - Bedarfsvorhersage.pdf"):</h4>
                    <p>Verbrauch der letzten 4 Perioden (Mrz-Jun): 1280, 1180, 1240, 1300 ME</p>
                    <div class="math-formula">
                        $$V_{prognose} = \frac{1280+1180+1240+1300}{4} = \frac{5000}{4} = 1250,00 \text{ ME}$$
                    </div>
                </div>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">c) Methode der gewogenen gleitenden Mittelwertbildung</h3>
                <p class="mb-4">Hierbei werden den jüngsten Verbrauchsdaten höhere Gewichte zugeordnet, um ihre Relevanz für die Prognose zu betonen.</p>
                <div class="math-formula">
                    $$V_{prognose} = \sum (\text{Ist-Verbrauch}_i \cdot \text{Gewicht}_i)$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - Bedarfsvorhersage.pdf"):</h4>
                    <p>Gewichte: 0,05 (Jan), 0,1 (Feb), 0,15 (Mrz), 0,2 (Apr), 0,25 (Mai), 0,25 (Jun)</p>
                    <div class="math-formula">
                        $$V_{prognose} = 1050 \cdot 0,05 + 1150 \cdot 0,1 + 1280 \cdot 0,15 + 1180 \cdot 0,2 + 1240 \cdot 0,25 + 1300 \cdot 0,25 = 1230,50 \text{ ME}$$
                    </div>
                </div>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">d) Regressionsrechnung (einfache, lineare)</h3>
                <p class="mb-4">Bei der linearen Regression wird eine lineare Beziehung zwischen der Zeit (x) und dem Verbrauch (y) angenommen, um zukünftige Werte zu extrapolieren.</p>
                <div class="math-formula">
                    $$\hat{y} = a + bx$$
                    $$b = \frac{n \sum (x_i y_i) - \sum x_i \sum y_i}{n \sum x_i^2 - (\sum x_i)^2}$$
                    $$a = \frac{\sum y_i - b \sum x_i}{n}$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - Bedarfsvorhersage.pdf"):</h4>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr><th>i (Monat)</th><th>$x_i$</th><th>$y_i$ (Verbrauch)</th><th>$x_i y_i$</th><th>$x_i^2$</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>1</td><td>1050</td><td>1050</td><td>1</td></tr>
                                <tr><td>2</td><td>2</td><td>1150</td><td>2300</td><td>4</td></tr>
                                <tr><td>3</td><td>3</td><td>1280</td><td>3840</td><td>9</td></tr>
                                <tr><td>4</td><td>4</td><td>1180</td><td>4720</td><td>16</td></tr>
                                <tr><td>5</td><td>5</td><td>1240</td><td>6200</td><td>25</td></tr>
                                <tr><td>6</td><td>6</td><td>1300</td><td>7800</td><td>36</td></tr>
                                <tr><td><b>Summe</b></td><td><b>21</b></td><td><b>7200</b></td><td><b>25910</b></td><td><b>91</b></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>$n=6$</p>
                    <p>Berechnung von $b$:</p>
                    <div class="math-formula">
                        $$b = \frac{6 \cdot 25910 - 21 \cdot 7200}{6 \cdot 91 - (21)^2} = \frac{155460 - 151200}{546 - 441} = \frac{4260}{105} \approx 40,57$$
                    </div>
                    <p>Berechnung von $a$:</p>
                    <div class="math-formula">
                        $$a = \frac{7200 - 40,57 \cdot 21}{6} = \frac{7200 - 852,00}{6} = \frac{6348}{6} = 1058,00$$
                    </div>
                    <p>Prognose für Monat 7 ($x=7$):</p>
                    <div class="math-formula">
                        $$V_{\text{prognose}, 7} = 1058,00 + 40,57 \cdot 7 = 1058,00 + 283,99 = 1341,99 \approx 1342,00 \text{ ME}$$
                    </div>
                </div>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">e) Exponentielle Glättung</h3>
                <p class="mb-4">Die exponentielle Glättung ist eine gewichtete Mittelwertbildung, bei der vergangene Beobachtungen exponentiell abnehmende Gewichte erhalten. Ein Glättungsfaktor ($\alpha$) bestimmt die Gewichtung.</p>
                <div class="math-formula">
                    $$F_{t+1} = F_t + \alpha (A_t - F_t)$$
                </div>
                <ul class="list-disc list-inside mb-4">
                    <li>$F_{t+1}$: Prognose für die nächste Periode</li>
                    <li>$F_t$: Prognose für die aktuelle Periode</li>
                    <li>$A_t$: Aktueller Ist-Verbrauch</li>
                    <li>$\alpha$: Glättungsfaktor (zwischen 0 und 1)</li>
                </ul>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - Bedarfsvorhersage.pdf"):</h4>
                    <p>Glättungsfaktor ($\alpha$) = 0,20</p>
                    <ul class="list-disc list-inside">
                        <li>Jan: Ist-Verbrauch 1050, Prognose (Start) 1050,00</li>
                        <li>Feb: Ist-Verbrauch 1150, Prognose $F_{\text{Feb}} = 1050 + 0,2 \cdot (1050 - 1050) = 1050,00$ (Fehler in PDF, sollte $1050 + 0,2 \cdot (1150 - 1050) = 1070.00$ sein)</li>
                        <li>Mrz: Ist-Verbrauch 1280, Prognose $F_{\text{Mrz}} = 1070 + 0,2 \cdot (1280 - 1070) = 1070 + 0,2 \cdot 210 = 1070 + 42 = 1112,00$</li>
                        <li>Apr: Ist-Verbrauch 1180, Prognose $F_{\text{Apr}} = 1112 + 0,2 \cdot (1180 - 1112) = 1112 + 0,2 \cdot 68 = 1112 + 13,6 = 1125,60$</li>
                        <li>Mai: Ist-Verbrauch 1240, Prognose $F_{\text{Mai}} = 1125,60 + 0,2 \cdot (1240 - 1125,60) = 1125,60 + 0,2 \cdot 114,40 = 1125,60 + 22,88 = 1148,48$</li>
                        <li>Jun: Ist-Verbrauch 1300, Prognose $F_{\text{Jun}} = 1148,48 + 0,2 \cdot (1300 - 1148,48) = 1148,48 + 0,2 \cdot 151,52 = 1148,48 + 30,30 = 1178,78$</li>
                        <li>Prognose für Jul ($F_{\text{Jul}}$) = $1178,78 + 0,2 \cdot (1300 - 1178,78) = 1178,78 + 0,2 \cdot 121,22 = 1178,78 + 24,24 = 1203,02$ (Im PDF ist 1230,50 ME angegeben, was auf eine andere Startprognose oder Rundung hindeutet. Wir folgen hier der Formel.)</li>
                    </ul>
                </div>
            </section>

            <!-- Fehlerrechnung -->
            <section id="fehlerrechnung" class="mb-12 card">
                <h2 class="text-3xl section-title mb-6">Fehlerrechnung</h2>
                <p class="text-lg mb-4">Die Fehlerrechnung dient dazu, die Güte von Prognosen zu bewerten. Sie quantifiziert die Abweichungen zwischen tatsächlichem Verbrauch und den prognostizierten Werten.</p>
                <p class="mb-4">Wir betrachten die Fehlermaße aus "Berechnungen - Fehlerrechnung.pdf" für die gleitende Mittelwertbildung (gl. MWB) und die exponentielle Glättung (exp. Gl.).</p>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Mittlerer Absoluter Prognosefehler (MADF)</h3>
                <p class="mb-4">Der MADF ist der Durchschnitt der absoluten Abweichungen zwischen Ist-Werten ($x_i$) und Prognosewerten ($v_i$).</p>
                <div class="math-formula">
                    $$\text{MADF} = \frac{\sum |x_i - v_i|}{n}$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - Fehlerrechnung.pdf"):</h4>
                    <p>Für gleitende Mittelwertbildung (4):</p>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr><th>i</th><th>$x_i$</th><th>$v_i$</th><th>$|x_i - v_i|$</th><th>$(x_i - v_i)^2$</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>180</td><td>195,00</td><td>15,00</td><td>225,000</td></tr>
                                <tr><td>2</td><td>210</td><td>190,00</td><td>20,00</td><td>400,000</td></tr>
                                <tr><td>3</td><td>205</td><td>191,25</td><td>13,75</td><td>189,063</td></tr>
                                <tr><td>4</td><td>187</td><td>196,25</td><td>9,25</td><td>85,563</td></tr>
                                <tr><td><b>Summe</b></td><td></td><td></td><td><b>58,00</b></td><td><b>899,625</b></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="math-formula">
                        $$\text{MADF} = \frac{58}{4} = 14,50 \text{ ME}$$
                    </div>
                    <p>Für exponentielle Glättung ($\alpha=0,2$):</p>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr><th>i</th><th>$x_i$</th><th>$v_i$</th><th>$|x_i - v_i|$</th><th>$(x_i - v_i)^2$</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>180</td><td>196,24</td><td>16,24</td><td>263,74</td></tr>
                                <tr><td>2</td><td>210</td><td>192,99</td><td>17,01</td><td>289,34</td></tr>
                                <tr><td>3</td><td>205</td><td>196,39</td><td>8,61</td><td>74,13</td></tr>
                                <tr><td>4</td><td>187</td><td>198,11</td><td>11,11</td><td>123,43</td></tr>
                                <tr><td><b>Summe</b></td><td></td><td></td><td><b>52,97</b></td><td><b>750,64</b></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="math-formula">
                        $$\text{MADF} = \frac{52,97}{4} = 13,24 \text{ ME}$$
                    </div>
                </div>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Standardabweichung des Prognosefehlers (SF)</h3>
                <p class="mb-4">Die Standardabweichung der Fehler ($SF$) misst die Streuung der Prognosefehler.</p>
                <div class="math-formula">
                    $$\text{SF} = \sqrt{\frac{\sum (x_i - v_i)^2}{n}}$$
                </div>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - Fehlerrechnung.pdf"):</h4>
                    <p>Für gleitende Mittelwertbildung (4):</p>
                    <div class="math-formula">
                        $$\text{SF} = \sqrt{\frac{899,625}{4}} = \sqrt{224,906} \approx 15,00 \text{ ME}$$
                    </div>
                    <p>Für exponentielle Glättung ($\alpha=0,2$):</p>
                    <div class="math-formula">
                        $$\text{SF} = \sqrt{\frac{750,64}{4}} = \sqrt{187,66} \approx 13,70 \text{ ME}$$
                    </div>
                </div>
                <p class="mb-4">Ein niedrigerer MADF oder SF deutet auf eine bessere Prognosegüte hin.</p>
            </section>

            <!-- ABC-Analyse -->
            <section id="abc-analyse" class="mb-12 card">
                <h2 class="text-3xl section-title mb-6">ABC-Analyse</h2>
                <p class="text-lg mb-4">Die ABC-Analyse ist ein betriebswirtschaftliches Analyseverfahren, das Güter (z.B. Materialien, Produkte, Kunden) nach ihrer Bedeutung klassifiziert. Sie basiert auf dem Pareto-Prinzip, das besagt, dass ein kleiner Teil der Güter einen Großteil des Gesamtwertes ausmacht.</p>
                <p class="mb-4">Die Klassifizierung erfolgt in der Regel in drei Kategorien:</p>
                <ul class="list-disc list-inside mb-4">
                    <li><b>A-Güter:</b> Wenige, aber sehr wertvolle Güter (oft 10-20% der Positionen machen 70-80% des Wertes aus). Diese erfordern die höchste Aufmerksamkeit.</li>
                    <li><b>B-Güter:</b> Mittlere Güter (oft 20-30% der Positionen machen 10-20% des Wertes aus).</li>
                    <li><b>C-Güter:</b> Viele, aber wenig wertvolle Güter (oft 50-70% der Positionen machen 5-10% des Wertes aus). Diese erfordern die geringste Aufmerksamkeit.</li>
                </ul>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Durchführung der ABC-Analyse</h3>
                <p class="mb-4">Die Analyse aus "Berechnungen - ABC-Analyse.pdf" zeigt eine wertmäßige ABC-Analyse:</p>
                <ul class="list-disc list-inside mb-4">
                    <li>Alle Material-Nummern werden nach ihrem Jahresbedarf (oder Beschaffungswert) in absteigender Reihenfolge sortiert.</li>
                    <li>Der prozentuale Anteil jeder Position am Gesamtwert wird berechnet.</li>
                    <li>Die kumulierten prozentualen Anteile für Position und Wert werden gebildet.</li>
                    <li>Basierend auf den kumulierten Werten erfolgt die Klassifikation in A, B und C.</li>
                </ul>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - ABC-Analyse.pdf" - Basisdaten 1):</h4>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Rang</th>
                                    <th>Material-Nr.</th>
                                    <th>Jahresbedarf [k€]</th>
                                    <th>[%]</th>
                                    <th>[kum. % Wert]</th>
                                    <th>[kum. % Pos.]</th>
                                    <th>Klassifikation</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>106</td><td>400</td><td>26,67%</td><td>26,67%</td><td>10,00%</td><td>A</td></tr>
                                <tr><td>2</td><td>109</td><td>350</td><td>23,33%</td><td>50,00%</td><td>20,00%</td><td>A</td></tr>
                                <tr><td>3</td><td>105</td><td>250</td><td>16,67%</td><td>66,67%</td><td>30,00%</td><td>A</td></tr>
                                <tr><td>4</td><td>110</td><td>125</td><td>8,33%</td><td>75,00%</td><td>40,00%</td><td>B</td></tr>
                                <tr><td>5</td><td>102</td><td>120</td><td>8,00%</td><td>83,00%</td><td>50,00%</td><td>B</td></tr>
                                <tr><td>6</td><td>101</td><td>100</td><td>6,67%</td><td>89,67%</td><td>60,00%</td><td>B</td></tr>
                                <tr><td>7</td><td>103</td><td>55</td><td>3,67%</td><td>93,33%</td><td>70,00%</td><td>C</td></tr>
                                <tr><td>8</td><td>104</td><td>50</td><td>3,33%</td><td>96,67%</td><td>80,00%</td><td>C</td></tr>
                                <tr><td>9</td><td>107</td><td>30</td><td>2,00%</td><td>98,67%</td><td>90,00%</td><td>C</td></tr>
                                <tr><td>10</td><td>108</td><td>20</td><td>1,33%</td><td>100,00%</td><td>100,00%</td><td>C</td></tr>
                                <tr><td><b>Summe</b></td><td></td><td><b>1500</b></td><td><b>100,00%</b></td><td></td><td></td><td></td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p>Die Grafiken im PDF "Berechnungen - ABC-Analyse.pdf" visualisieren diesen Zusammenhang mit Lormick-Kurven, die den kumulierten Wertanteil und den kumulierten Positionsanteil darstellen.</p>
                    <div class="my-4">
                        [Image of ABC Analysis Lorenz Curve]
                    </div>
                </div>
            </section>

            <!-- XYZ-Analyse -->
            <section id="xyz-analyse" class="mb-12 card">
                <h2 class="text-3xl section-title mb-6">XYZ-Analyse</h2>
                <p class="text-lg mb-4">Die XYZ-Analyse ist ein weiteres Instrument zur Klassifizierung von Materialien, jedoch nicht nach ihrem Wert, sondern nach der <b>Regelmäßigkeit ihres Verbrauchs oder Bedarfs</b> (Schwankungsintensität).</p>
                <p class="mb-4">Die Klassifizierung erfolgt in der Regel in drei Kategorien:</p>
                <ul class="list-disc list-inside mb-4">
                    <li><b>X-Güter:</b> Hohe Verbrauchsgenauigkeit, geringe Schwankungen, konstanter Verbrauch. Hohe Planungssicherheit.</li>
                    <li><b>Y-Güter:</b> Mittlere Verbrauchsgenauigkeit, mittlere Schwankungen, saisonale oder trendmäßige Verbräuche. Mittlere Planungssicherheit.</li>
                    <li><b>Z-Güter:</b> Geringe Verbrauchsgenauigkeit, starke und unregelmäßige Schwankungen, sporadischer Verbrauch. Geringe Planungssicherheit.</li>
                </ul>

                <h3 class="text-2xl font-semibold text-gray-800 mb-4">Berechnung des Variationskoeffizienten (V)</h3>
                <p class="mb-4">Die Basis der XYZ-Analyse ist der <b>Variationskoeffizient ($V$)</b>, der die relative Streuung der Verbräuche misst.</p>
                <div class="math-formula">
                    $$V = \frac{S}{\overline{x}}$$
                </div>
                <ul class="list-disc list-inside mb-4">
                    <li>$S$: Standardabweichung des Verbrauchs</li>
                    <li>$\overline{x}$: Durchschnittlicher Verbrauch</li>
                </ul>
                <div class="example-block">
                    <h4 class="font-bold mb-2">Beispiel (aus "Berechnungen - XYZ-Analyse.pdf"):</h4>
                    <p>Für Material B-100:</p>
                    <ul class="list-disc list-inside">
                        <li>Durchschnitt ($\overline{x}$) = 555,00</li>
                        <li>Standardabweichung ($S$) = 349,17</li>
                        <div class="math-formula">
                            $$V = \frac{349,17}{555,00} \approx 0,6291$$
                        </div>
                        <p>Klassifikation: ==> Z-Position (Hohe Schwankung, da V > 0.5)</p>
                    </ul>
                    <p>Für Material B-101:</p>
                    <ul class="list-disc list-inside">
                        <li>Durchschnitt ($\overline{x}$) = 1220,00</li>
                        <li>Standardabweichung ($S$) = 80,26</li>
                        <div class="math-formula">
                            $$V = \frac{80,26}{1220,00} \approx 0,0658$$
                        </div>
                        <p>Klassifikation: ==> X-Position (Geringe Schwankung, da V < 0.1)</p>
                    </ul>
                    <p>Für Material B-102:</p>
                    <ul class="list-disc list-inside">
                        <li>Durchschnitt ($\overline{x}$) = 495,00</li>
                        <li>Standardabweichung ($S$) = 133,76</li>
                        <div class="math-formula">
                            $$V = \frac{133,76}{495,00} \approx 0,2702$$
                        </div>
                        <p>Klassifikation: ==> Y-Position (Mittlere Schwankung, da 0.1 < V < 0.5)</p>
                    </ul>
                </div>
                <p class="mb-4">Die genauen Grenzwerte für X, Y und Z können je nach Unternehmen variieren (z.B. X: V < 0,1; Y: 0,1 $\le$ V < 0,5; Z: V $\ge$ 0,5).</p>
            </section>
        </main>

        <!-- Footer -->
        <footer class="text-center mt-10 p-4 text-gray-600 border-t border-gray-300">
            <p>&copy; 2025 Materialwirtschaft & Logistik Lernseite. Alle Rechte vorbehalten.</p>
            <p>Erstellt auf Basis der bereitgestellten Dokumente von Dipl.-Betriebswirt (FH) Eric Hinrichs.</p>
        </footer>
    </div>
</body>
</html>
