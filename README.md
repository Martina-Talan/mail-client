### 📧 Mail - A Single-Page Email Client
#### 🔗 Live Demo: Try the App Here

#### 📜 Overview
Mail is a single-page web application built with Django and JavaScript. It simulates an email client where users can send, receive, archive, and reply to emails. The app dynamically updates its UI using JavaScript for smooth navigation.

#### 🚀 Features
- User Authentication – Register and log in.
- Compose Emails – Send emails to registered users.
- Mailbox System – View emails in Inbox, Sent, and Archive.
- Read/Unread Status – Mark emails accordingly.
- Archive/Unarchive – Organize your inbox.
- Reply to Emails – Easily respond to messages.
- Single Page Navigation – JavaScript updates views dynamically.
#### 🛠️ Installation & Setup
- sh
- Copy
- Edit
- git clone https://github.com/Martina-Talan/mail.git
- cd mail
- pip install -r requirements.txt
- python manage.py migrate
- python manage.py createsuperuser  # (Optional for admin access)
- python manage.py runserver
- 🔗 Open the app at: http://127.0.0.1:8000/

#### 📌 Usage
 1️⃣ Register/Login – Create an account and log in.
 
 2️⃣ Compose & Send – Write emails and send them.
 
 3️⃣ View Mailboxes – Inbox (received emails), Sent (sent emails), Archive (stored emails).
 
 4️⃣ Read & Manage Emails – Open, mark as read/unread, archive/unarchive, reply.

#### 🔗 API Routes
##### Method	Endpoint	Description
- GET	/emails/<mailbox>	Fetch emails from Inbox, Sent, or Archive.
- GET	/emails/<int:email_id>	Retrieve a single email’s details.
- POST	/emails	Send a new email.
- PUT	/emails/<int:email_id>	Update email (read/unread, archive/unarchive).
#### 🛠️ Technologies Used
- Django – Backend
- JavaScript (ES6) – Frontend logic
- HTML & CSS – UI structure
- Bootstrap – Responsive design
#### 🏆 Acknowledgments
- This project is part of the Harvard CS50W: Web Programming with Python and JavaScript course.

