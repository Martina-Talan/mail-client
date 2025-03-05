## 📧 Mail - A Single-Page Email Client
##### 🔗 Live Demo: Try the App Here



### 📜 Overview
Mail is a single-page web application built with Django and JavaScript. It simulates an email client where users can send, receive, archive, and reply to emails. The app dynamically updates its UI using JavaScript for smooth navigation.

### 🚀 Features

✅ User Authentication – Register and log in to your account

✅ Compose Emails – Send emails to other registered users

✅ Mailbox System – View emails in Inbox, Sent, and Archive

✅ Read/Unread Status – Mark emails as read or unread

✅ Archive/Unarchive Emails – Organize your inbox efficiently

✅ Reply to Emails – Easily respond to received messages

✅ Single Page Navigation – Uses JavaScript to update views dynamically

  
### 🛠️ Installation & Setup
##### Clone the repository:
```
git clone https://github.com/Martina-Talan/mail.git

cd mail
```

##### Install dependencies:
```
pip install -r requirements.txt
```

##### Apply database migrations:
```
python manage.py migrate
```

##### Create a superuser (optional for admin access):
```
python manage.py createsuperuser
```

##### Start the development server:
```
python manage.py runserver
```

##### Open the app in your browser: http://127.0.0.1:8000/


### 📌 Usage
1️⃣ Register/Login – Create an account and log in
 
2️⃣ Compose & Send – Write emails and send them
 
3️⃣ View Mailboxes – Inbox (received emails), Sent (sent emails), Archive (stored emails)
 
4️⃣ Read & Manage Emails – Open, mark as read/unread, archive/unarchive, reply
 

### 🔗 API Routes

| **Method** | **Endpoint** | **Description** |
|-----------|------------|----------------|
| **GET** | `/emails/<mailbox>` | Fetch emails from Inbox, Sent, or Archive |
| **GET** | `/emails/<int:email_id>` | Retrieve a single email’s details |
| **POST** | `/emails` | Send a new email |
| **PUT** | `/emails/<int:email_id>` | Update email (mark as read/unread, archive/unarchive) |


### 🛠️ Technologies Used
- ### Django – Backend
  
- JavaScript – Frontend logic
  
- HTML & CSS – UI structure
  
- Bootstrap – Responsive design

### 🏆 Acknowledgments
This project is part of the Harvard CS50W: Web Programming with Python and JavaScript course.

