# @rjsebening/n8n-nodes-evolution-api

![Evolution API Node](https://img.shields.io/badge/n8n-community--node-FF6D5A)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A professional n8n community node for seamless integration with the **Evolution API**.
Automate WhatsApp-related operations like sending messages, managing instances, and interacting with chats and groups — fully API-driven and production-ready.

---

## What is n8n?

n8n is an easy-to-use workflow automation tool that connects different apps and services, like the Evolution API.
By creating workflows between systems, you can automate repetitive tasks and backend processes — saving time, reducing errors, and scaling operations reliably.

---

## ⚖️ Legal Notice

This Community Node uses the public **Evolution API** and is **not affiliated with, endorsed, or sponsored by the Evolution API project or its maintainers**.
All trademarks are the property of their respective owners.

**Note**: This is a community-developed node. For official support regarding the Evolution API, please refer to the official documentation or maintainers.

---

## 🚀 Overview

This n8n custom node provides a clean and structured integration with the Evolution API, enabling you to control WhatsApp instances and perform messaging-related actions programmatically.

The focus of this node is **stable, outbound API interaction** — ideal for automation workflows, backend systems, and operational processes.

---

## ✨ Key Features

### 💬 **Messaging & Communication**

* **Send Message**: Send text messages via WhatsApp
* **Send Media**: Send images, documents, audio, or video
* **Send Polls & Interactive Messages**
* **Send Messages to Groups**
* **Reply to Existing Chats**

---

### 👥 **Group & Chat Management**

* **Create Groups**
* **Add / Remove Participants**
* **Update Group Info**
* **Fetch Chats**
* **Fetch Group Metadata**

---

### 🧩 **Instance Management**

* **List Instances**
* **Get Instance Status**
* **Restart / Logout Instances**
* **QR Code Handling**
* **Connection Status Checks**

---

### 🔐 **Secure API Integration**

* **API Key Authentication**
* **Connection Test**
* **Consistent Error Handling**
* **Fully JSON-based Requests**

---

## 📦 Installation

### Requirements

* n8n version **1.0.0 or higher**
* ✅ testet with **n8n 2.0**
* Running Evolution API instance
* Valid Evolution API key

---

## 🔧 Configuration

### Installation in n8n

This node can be installed using the **Community Nodes** feature in n8n.

1. Open your n8n instance
2. Go to **Settings → Community Nodes → Install**
3. Enter the following package names:

```
@rjsebening/n8n-nodes-evolution-api
```

Both packages contain the same code.
The scoped version exists to avoid name collisions with potential future official integrations.

4. Restart n8n → the node will be available

---

## 🔑 Set Up API Credentials

1. In n8n, go to **Credentials → Create New**
2. Search for **“Evolution API”**
3. Enter your credentials:

   * **Server URL**: Base URL of your Evolution API instance
     *(e.g. `https://your-evolution-api.domain`)*
   * **API Key**: Your Evolution API key

---

### Obtain Your API Key

1. Open your Evolution API dashboard
2. Navigate to **Settings / API**
3. Generate or copy your API key
4. Use it inside n8n credentials

---

## ⚙️ Available Actions

### **Messaging**

| Action             | Description                             |
| ------------------ | --------------------------------------- |
| Send Text Message  | Send plain WhatsApp messages            |
| Send Media Message | Send images, documents, audio, or video |
| Send Poll          | Send interactive poll messages          |
| Send to Group      | Send messages to WhatsApp groups        |

---

### **Groups & Chats**

| Action              | Description                   |
| ------------------- | ----------------------------- |
| Create Group        | Create a new WhatsApp group   |
| Update Group        | Change group name or settings |
| Add Participants    | Add users to a group          |
| Remove Participants | Remove users from a group     |
| Fetch Chats         | Load chats from an instance   |
| Fetch Groups        | Retrieve group metadata       |

---

### **Instance Operations**

| Action              | Description                         |
| ------------------- | ----------------------------------- |
| List Instances      | Retrieve all available instances    |
| Get Instance Status | Check connection state              |
| Restart Instance    | Restart a WhatsApp instance         |
| Logout Instance     | Logout an instance                  |
| Get QR Code         | Retrieve QR code for authentication |

---

### **Utility**

| Action              | Description                   |
| ------------------- | ----------------------------- |
| Test Authentication | Verify API key and connection |
| Health Check        | Validate server availability  |

---

## 📖 Example Use Cases

* Send WhatsApp notifications when a deal is closed
* Automatically inform teams via WhatsApp
* Build WhatsApp-based onboarding flows
* Control WhatsApp instances from backend automations
* Integrate WhatsApp messaging into ERP, CRM, or internal tools

---

## 🌍 Why this matters

WhatsApp is often mission-critical — but manual handling doesn’t scale.

This node allows you to:

* centralize control
* automate communication
* reduce human error
* build reliable, backend-driven WhatsApp workflows

All without custom code.

---

## 📬 About the Author

I’m **Rezk Jörg Sebening** – Business Automation Expert (DACH).
I build automation systems, scalable workflows, and n8n community nodes for agencies and growing companies.

👉 Follow me on GitHub to stay updated with new integrations and automation tooling.

---

## 📋 Disclaimer

This is an **unofficial community node** and is **not affiliated with the Evolution API project**.

**Important Notes:**

* This node is maintained by the community
* API behavior depends on the Evolution API version
* For Evolution API issues, consult the official documentation
* All trademarks and logos belong to their respective owners