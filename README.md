📬 Mail - A Single-Page Email Client
📖 Overview
Mail is a single-page web application built using Django, JavaScript, HTML, and CSS. It simulates an email client where users can send, receive, view, archive, and reply to emails. The app dynamically updates its UI using JavaScript, allowing smooth navigation between mailboxes without reloading the page.

🚀 Features
User Authentication – Register and log in to your account.
Compose Emails – Send emails to other registered users.
Mailbox System – View emails in Inbox, Sent, and Archived mailboxes.
Read/Unread Status – Mark emails as read or unread.
Archive/Unarchive Emails – Organize your inbox efficiently.
Reply to Emails – Easily respond to received messages.
Single Page Navigation – Uses JavaScript to update views dynamically.

🛠️ Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/Martina-Talan/mail.git
cd mail
2️⃣ Install Dependencies
Ensure you have Python and Django installed. Then, install the required dependencies:

sh
Copy
Edit
pip install -r requirements.txt
3️⃣ Apply Migrations
Run the following command to set up the database:

sh
Copy
Edit
python manage.py migrate
4️⃣ Create a Superuser (Optional)
To access the Django admin panel:

sh
Copy
Edit
python manage.py createsuperuser
5️⃣ Start the Development Server
sh
Copy
Edit
python manage.py runserver
Open your browser and go to http://127.0.0.1:8000/.

📌 Usage
📌 1. Register/Login
Click on Register to create an account.
Log in with your registered credentials.
📌 2. Compose and Send Emails
Click Compose to write a new email.
Enter the recipient's email (must be registered), subject, and message.
Click Send to deliver the email.
📌 3. View Mailboxes
Inbox: Displays received emails.
Sent: Shows all emails you have sent.
Archived: Stores archived emails.
📌 4. Read and Interact with Emails
Click on an email to view its content.
Mark emails as read/unread.
Archive/Unarchive emails to organize them.
Click Reply to respond to an email.
🔗 API Routes
The app communicates with the backend via an API:

Method	Endpoint	Description
GET	/emails/<mailbox>	Fetch emails from Inbox, Sent, or Archive
GET	/emails/<int:email_id>	Retrieve a single email’s details
POST	/emails	Send a new email
PUT	/emails/<int:email_id>	Update email (mark as read/unread, archive/unarchive)
🔧 Technologies Used
Django – Backend framework
JavaScript (ES6) – Dynamic frontend interactions
HTML & CSS – Structure and styling
Bootstrap – Responsive UI design
SQLite – Database storage

🏆 Acknowledgments
This project is part of the Harvard CS50W: Web Programming with Python and JavaScript course.
