# n8n-nodes-evolution-api

![Evolution API Node](https://img.shields.io/badge/n8n-community--node-FF6D5A)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

Ein professioneller **n8n Community Node** zur Integration der **Evolution API**.
Automatisiere WhatsApp-bezogene Prozesse wie Nachrichtenversand, Gruppenverwaltung und Instanz-Steuerung – vollständig API-basiert und produktionsreif.

---

## Was ist n8n?

n8n ist ein leistungsfähiges Workflow-Automatisierungstool, mit dem sich verschiedene Systeme und APIs miteinander verbinden lassen – unter anderem die Evolution API.

Durch visuelle Workflows kannst du manuelle Prozesse automatisieren, Systeme koppeln und komplexe Abläufe zuverlässig abbilden – ohne eigene Backend-Logik entwickeln zu müssen.

---

## ⚖️ Rechtlicher Hinweis

Dieser Community Node nutzt die **öffentliche Evolution API** und ist **nicht offiziell mit der Evolution API, deren Betreibern oder Maintainer:innen verbunden, unterstützt oder gesponsert**.

Alle Marken, Namen und Logos gehören ihren jeweiligen Eigentümern.

> **Hinweis:** Dies ist ein Community-Projekt. Für Support oder Fragen zur Evolution API selbst wende dich bitte an die offizielle Dokumentation bzw. die Maintainer.

---

## 🚀 Überblick

Dieser n8n Node ermöglicht eine strukturierte und stabile Anbindung an die Evolution API.
Der Fokus liegt auf **ausgehenden API-Aktionen**, also der aktiven Steuerung von WhatsApp-Instanzen und Nachrichten aus Automationen heraus.

Ideal für:

* Agenturen
* interne Tools
* Backend-Automatisierungen
* operative WhatsApp-Workflows

---

## ✨ Zentrale Funktionen

### 💬 **Nachrichten & Kommunikation**

* **Textnachrichten senden**
* **Medien versenden** (Bilder, Dokumente, Audio, Video)
* **Umfragen & interaktive Nachrichten**
* **Nachrichten an Gruppen senden**
* **Antworten auf bestehende Chats**

---

### 👥 **Gruppen- & Chat-Verwaltung**

* WhatsApp-Gruppen erstellen
* Teilnehmer hinzufügen / entfernen
* Gruppeninformationen aktualisieren
* Chats abrufen
* Gruppen-Metadaten laden

---

### 🧩 **Instanz-Verwaltung**

* Instanzen auflisten
* Verbindungsstatus prüfen
* Instanzen neu starten
* Instanzen ausloggen
* QR-Codes abrufen

---

### 🔐 **Sichere API-Integration**

* Authentifizierung per API-Key
* Verbindungstest
* Einheitliche Fehlerbehandlung
* Reine JSON-Requests (kein proprietäres Format)

---

## 📦 Installation

### Voraussetzungen

* n8n Version **≥ 1.0.0**
* ✅ Getestet mit **n8n 2.0**
* Laufende Evolution API Instanz
* Gültiger Evolution API Key

---

## 🔧 Installation in n8n

Dieser Node wird über die **Community Nodes** in n8n installiert.

1. Öffne deine n8n-Instanz
2. Gehe zu **Einstellungen → Community Nodes → Installieren**
3. Verwende folgenden Paketnamen:

```
@rjsebening/n8n-nodes-evolution-api
```

Der Node wird bewusst **scoped** veröffentlicht, um:

* Namenskonflikte zu vermeiden
* Community- und inoffizielle Nodes klar abzugrenzen
* zukünftige offizielle Pakete nicht zu blockieren

4. n8n neu starten → Node ist verfügbar

---

## 🔑 API-Zugang einrichten

1. In n8n zu **Credentials → Neu erstellen**
2. Nach **„Evolution API“** suchen
3. Folgende Felder ausfüllen:

   * **Server URL**
     Basis-URL deiner Evolution API
     *(z. B. `https://deine-evolution-api.domain`)*
   * **API Key**
     Dein persönlicher API-Key

---

### API-Key erhalten

1. Evolution API Interface öffnen
2. Zu **Settings / API** navigieren
3. API-Key generieren oder kopieren
4. In n8n hinterlegen

---

## ⚙️ Verfügbare Aktionen

### **Nachrichten**

| Aktion                 | Beschreibung                           |
| ---------------------- | -------------------------------------- |
| Textnachricht senden   | Versand einfacher WhatsApp-Nachrichten |
| Mediennachricht senden | Bilder, Dokumente, Audio oder Video    |
| Umfrage senden         | Interaktive Poll-Nachrichten           |
| An Gruppe senden       | Nachrichten an WhatsApp-Gruppen        |

---

### **Chats & Gruppen**

| Aktion                | Beschreibung                          |
| --------------------- | ------------------------------------- |
| Gruppe erstellen      | Neue WhatsApp-Gruppe anlegen          |
| Gruppe aktualisieren  | Gruppenname oder Einstellungen ändern |
| Teilnehmer hinzufügen | Nutzer zur Gruppe hinzufügen          |
| Teilnehmer entfernen  | Nutzer aus Gruppe entfernen           |
| Chats abrufen         | Chats einer Instanz laden             |
| Gruppen abrufen       | Gruppeninformationen laden            |

---

### **Instanzen**

| Aktion               | Beschreibung                 |
| -------------------- | ---------------------------- |
| Instanzen auflisten  | Alle verfügbaren Instanzen   |
| Instanzstatus prüfen | Verbindungsstatus abrufen    |
| Instanz neu starten  | WhatsApp-Instanz neu starten |
| Instanz ausloggen    | Instanz abmelden             |
| QR-Code abrufen      | QR-Code zur Anmeldung laden  |

---

### **Utilities**

| Aktion                   | Beschreibung                 |
| ------------------------ | ---------------------------- |
| Authentifizierung testen | API-Key & Verbindung prüfen  |
| Health-Check             | Server-Erreichbarkeit prüfen |

---

## 📖 Praxisbeispiele

* WhatsApp-Benachrichtigungen bei Statusänderungen
* Automatische Nachrichten nach Formular-Einreichungen
* Interne Team-Alerts über WhatsApp
* WhatsApp-Integration in ERP-, CRM- oder interne Systeme
* Operative Steuerung mehrerer WhatsApp-Instanzen

---

## 🌍 Warum das wichtig ist

WhatsApp ist in vielen Unternehmen geschäftskritisch – aber manuelle Prozesse skalieren nicht.

Dieser Node ermöglicht:

* zentrale Steuerung
* automatisierte Kommunikation
* weniger Fehler
* saubere Backend-Integration

Ohne eigene API-Clients oder Custom-Code.

---

## 👤 Über den Autor

Ich bin **Rezk Jörg Sebening** – Business-Automation-Experte im DACH-Raum.
Ich entwickle Automatisierungssysteme, skalierbare Workflows und n8n Community Nodes für Agenturen und wachsende Unternehmen.

👉 GitHub-Profil folgen, um Updates und neue Integrationen nicht zu verpassen.

---

## 📋 Disclaimer

Dies ist ein **inoffizieller Community Node** und **kein offizielles Produkt der Evolution API**.

**Wichtige Hinweise:**

* Der Node wird von der Community gepflegt
* Verhalten und Features hängen von der Evolution-API-Version ab
* Für API-Probleme bitte die offizielle Dokumentation konsultieren
* Alle Marken und Logos gehören ihren jeweiligen Eigentümern