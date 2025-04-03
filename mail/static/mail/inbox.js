console.log("JS is working!");
var currentMailbox = 'inbox'; 

document.addEventListener('DOMContentLoaded', function() {

    // Use buttons to toggle between views
    document.querySelector('#inbox').addEventListener('click', () => load_mailbox('inbox'));
    document.querySelector('#sent').addEventListener('click', () => load_mailbox('sent'));
    document.querySelector('#archived').addEventListener('click', () => load_mailbox('archive'));
    document.querySelector('#compose').addEventListener('click', compose_email);
    
    document.querySelector('#compose-form').onsubmit = send;
  
    // By default, load the inbox
    load_mailbox('inbox');
  });
  
  function compose_email() {
  
    // Show compose view and hide other views
    document.querySelector('#emails-view').style.display = 'none';
    document.querySelector('#compose-view').style.display = 'block';
  
    // Clear out composition fields
    document.querySelector('#compose-recipients').value = '';
    document.querySelector('#compose-subject').value = '';
    document.querySelector('#compose-body').value = '';
  }
  
  function view_email(email_id) {
    // Hide other views
    document.querySelector('#emails-view').style.display = 'none';
    document.querySelector('#compose-view').style.display = 'none';
  
    const emailView = document.querySelector('#email-view');
    emailView.style.display = 'block';

    // Fetch the email data
    fetch(`/emails/${email_id}`)
      .then(response => response.json())
      .then(email => {
        // Display email information
        emailView.innerHTML = `
          <b>From:</b> ${email.sender}<br>
          <b>To:</b> ${email.recipients.join(', ')}<br>
          <b>Subject:</b> ${email.subject}<br>
          <b>Timestamp:</b> ${email.timestamp}<br>
          <hr>
          ${email.body}
          <hr>
        `;


    // Reply
    const replyButton = document.createElement('button');
    replyButton.innerHTML = 'Reply';
    replyButton.className = 'btn btn-primary';  
    replyButton.style.margin = '5px';
    replyButton.addEventListener('click', () => reply_email(email));
    if (currentMailbox === 'inbox') {
      document.querySelector('#email-view').appendChild(replyButton);
    }  
         
        
    function reply_email(email) {
    // Show compose view and hide other views
      document.querySelector('#emails-view').style.display = 'none';
      document.querySelector('#compose-view').style.display = 'block';
          
      // Pre-fill the composition fields
      document.querySelector('#compose-recipients').value = email.sender;
          
      let subject = email.subject;
      if (!subject.startsWith('Re:')) {
          subject = 'Re: ' + subject;
      }
      document.querySelector('#compose-subject').value = subject;

      const preFilledBody = `On ${email.timestamp} ${email.sender} wrote: ${email.body}`;
      document.querySelector('#compose-body').value = preFilledBody;
      }
          
  
    // Archive
    const archiveButton = document.createElement('button');
    if (email.archived) {
      archiveButton.innerHTML = "Remove from Archive";
      archiveButton.className = 'btn btn-primary'; 
      } else {
        archiveButton.innerHTML = "Archive";
        archiveButton.className = 'btn btn-primary';
        
      }
      archiveButton.addEventListener('click', function() {
        fetch(`/emails/${email_id}`, {
            method: 'PUT',
            body: JSON.stringify({
                archived: !email.archived
            })
          })
          .then(() => { load_mailbox('inbox')})
        });
      document.querySelector('#email-view').appendChild(archiveButton);


      // Mark email as read
      if(!email.read){
        fetch(`/emails/${email.id}`, {
            method: 'PUT',
            body: JSON.stringify({
              read: true
            })
          });
        }
    });
  }
      

  function load_mailbox(mailbox) {
    currentMailbox = mailbox;
    
    // Show the mailbox and hide other views
    document.querySelector('#emails-view').style.display = 'block';
    document.querySelector('#compose-view').style.display = 'none';

    const emailView = document.querySelector('#email-view');
    emailView.style.display = 'none';
  
    // Show the mailbox name
    document.querySelector('#emails-view').innerHTML = `<h3>${mailbox.charAt(0).toUpperCase() + mailbox.slice(1)}</h3>`;

    fetch(`/emails/${mailbox}`)
        .then(response => response.json())
        .then(emails => {
           // Loop over emails and append them to the mailbox container
             emails.forEach(email => {
                const emailDiv = document.createElement('div');
                emailDiv.classList.add('email');
                emailDiv.innerHTML = `
                   <div><b>From:</b> ${email.sender}</div>
                   <div><b>Subject:</b> ${email.subject}</div>
                   <div> ${email.timestamp}</div>
               `;
                emailDiv.addEventListener('click', () => view_email(email.id));
                
                document.querySelector('#emails-view').appendChild(emailDiv);
    
    // Check if the emails are read
    if (!email.read) {
       emailDiv.style.backgroundColor = 'white';
       } else {
       emailDiv.style.backgroundColor = 'lightgrey';
       }
    
      });
    });
  }


  // Send email
  function send(event) {
    event.preventDefault();
  
    const recipients = document.querySelector('#compose-recipients').value;
    const subject = document.querySelector('#compose-subject').value;
    const body = document.querySelector('#compose-body').value;
  
    fetch('/emails', {
      method: 'POST',
      body: JSON.stringify({
        recipients: recipients,
        subject: subject,
        body: body
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log("Email sent response:", result); 
      load_mailbox('sent');
    });
  }
  