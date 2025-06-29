
export const OCR_TEXT = `
Sicherheitsbestand
Monat 1 2 3 4 5 6 7 8 9 10 11 12
Ist-Verbrauch [ME] 95 88 102 95 105 92 103 115 94 102 114 95
i xi |xi - x̄| (xi - x̄)²
1 95 5 25
2 88 12 144
3 102 2 4
4 95 5 25
5 105 5 25
6 92 8 64
7 103 3 9
8 115 15 225
9 94 6 36
10 102 2 4
11 114 14 196
12 95 5 25
S 1200 82 782
x̄ = 100
MAD = 6,83 ME
S = 8,07 ME
Servicegrad SB mit MAD SB mit S
84,13% SB = 1,250 * 6,83 = 8,54 ME SB = 1,000 * 8,07 = 8,07 ME
97,72% SB = 2,500 * 6,83 = 17,08 ME SB = 2,000 * 8,07 = 16,14 ME
99,87% SB = 3,750 * 6,83 = 25,61 ME SB = 3,000 * 8,07 = 24,21 ME
© Dipl.-Betriebswirt (FH) Eric Hinrichs, Essen 2025

Dynamische Bestellmengenrechnung
Einstandspreis 8,00 €/ΜΕ
Bestellfixe Kosten 25,00 €/Bestellung
Lagerhaltungskostensatz 15,00 % p.a.
Bedarf [ME] Monat 1-9: 80, 20, 40, 20, 50, 80, 30, 60, 100
1. Verfahren der gleitenden wirtschaftlichen Bestellmenge
spezifische LHK = 0,10 € pro ME und Monat
Monat 8, kum. ME 60: Bestellmenge 60, DLD 0,5, Lagerhaltungskosten [€] 3,00, kum. € 3,00, Bestellkosten 25,00, Gesamtkosten 28,00, €/ME 0,4667
Monat 9, kum. ME 160: Bestellmenge 160, DLD 1,5, Lagerhaltungskosten [€] 15,00, kum. € 18,00, Gesamtkosten 43,00, €/ME 0,2688
2. Kostenausgleichsverfahren
spezifische LHK = 0,10 € pro ME und Monat
Bestellkosten 25,00 €. Lagerhaltungskosten bei 160 ME kumuliert sind 24,00 €. Da 24 < 25, wird weiter kumuliert.
Bei 210 ME kumuliert sind Lagerhaltungskosten 46,50 €. Da 46,50 > 25, wird bei 160 ME bestellt.
3. Stück-Perioden-Ausgleichsverfahren
PPV = 250 ME-Monate = 25 / 0,1
Bei Monat 3, kum. ME 160, ME-Monate kum. 170. Da 170 < 250, wird weiter kumuliert.
Bei Monat 4, kum. ME 160, ME-Monate kum. 240. Da 240 < 250, wird weiter kumuliert.
Bei Monat 5, kum. ME 210, ME-Monate kum. 465. Da 465 > 250, wird bei 160 ME bestellt.

Dynamische Bestellmengenrechnung
Einstandspreis 10,00 €/ΜΕ
Bestellfixe Kosten 60,00 €/Bestellung
Lagerhaltungskostensatz 24,00 % p.a.
spezifische LHK = 0,20 € pro ME und Monat = 10 €/ΜΕ * 0,24 / 12
1. Verfahren der gleitenden wirtschaftlichen Bestellmenge
Monat 5, kum. ME 160: Bestellmenge 160, DLD 4,5, Lagerhaltungskosten kum. € 60,00, Gesamtkosten 120,00 €, €/ME 0,7500
2. Kostenausgleichsverfahren
Bei kum. ME 160, Lagerhaltungskosten kum. 60,00 €. Dies ist exakt gleich den Bestellkosten von 60,00 €. Daher wird bei 160 ME bestellt.
3. Stück-Perioden-Ausgleichsverfahren
PPV = 300 ME-Monate.
Bei kum. ME 160, ME-Monate kum. 300,00. Dies ist exakt gleich dem PPV. Daher wird bei 160 ME bestellt.

Bestellmengenrechnung (Basisdaten 10)
Jahresbedarf 100 ME/Jahr
Einstandspreis 100 €/ΜΕ
Bestellkosten 100 €/Bestellung
Lagerhaltungskostensatz 8%
Optimale Bestellmenge (xopt) = 50 ME/Bestellung.
Bei 2 Bestellungen/Jahr: Menge 50, Kosten 200, Lager-Bestand 25, Haltungskosten 200, Gesamtkosten 400.
Dies ist das Kostenoptimum in der Tabelle.

Bestellmengenrechnung (Basisdaten 9)
Jahresbedarf 20.000 ME/Jahr
Einstandspreis 12 €/ΜΕ
Bestellkosten 24 €/Bestellung
Lagerhaltungskostensatz 20%
Optimale Bestellmenge xopt = 632,46 ME/Bestellung.
Tabellarisches Optimum bei 30 Bestellungen/Jahr: Bestellmenge 666,67, Gesamtkosten 1.520,00 €.

Fehlerrechnung - Aufgabe 8
Vergleich von gl. MWB (4) und exp. Gl. (a = 0,2)
MADF für gl. MWB = 14,50 ME
SF for gl. MWB = 15,00 ME
MADF für exp. Gl. = 13,24 ME
SF for exp. Gl. = 13,70 ME
Die exponentielle Glättung liefert bessere (niedrigere) Prognosefehlerwerte.

Stochastische Bedarfsermittlung - Aufgabe 5
Vergleich verschiedener Prognosemethoden für VJuli.
a) arithmetische Mittelwertbildung: 1.200,00 ME
b) gleitende Mittelwertbildung mit 4 Perioden: 1.250,00 ME
c) gewogene gleitende Mittelwertbildung: 1.230,50 ME
d) Regressionsrechnung: b=40,57, a=1.058,00 -> VJuli = 1.058 + 40,57 * 7 = 1342,00 ME
e) Exponentielle Glättung (a=0,20): VJuli = 1.178,78

XYZ-Analyse
Verbrauchsmenge [ME]
B-100: x̄=555,00, S=349,17, V=0,6291 ==> Z-Position (stark schwankend)
B-101: x̄=1.220,00, S=80,26, V=0,0658 ==> X-Position (konstant)
B-102: x̄=495,00, S=133,76, V=0,2702 ==> Y-Position (mittel schwankend)

ABC-Analyse - Basisdaten 1
Zeigt eine wertmäßige ABC-Analyse.
A-Güter: 20% der Positionen machen 50% des Wertes aus.
B-Güter: 30% der Positionen machen 33% des Wertes aus.
C-Güter: 50% der Positionen machen 17% des Wertes aus.
Beispiel GJ 2023 vs GJ 2024:
Die Analyse zeigt eine Konzentrationsverschiebung. Im GJ 2024 machen weniger Lieferanten einen größeren Anteil am Beschaffungswert aus (z.B. Lieferant E und F). Die Lorenzkurve für 2024 ist stärker gekrümmt, was eine höhere Konzentration anzeigt.
`;
