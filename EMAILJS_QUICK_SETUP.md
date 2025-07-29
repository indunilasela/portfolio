# Quick EmailJS Setup - Send Emails to i.asela919@gmail.com

## Step 1: Create EmailJS Account (2 minutes)
1. Go to **https://www.emailjs.com**
2. Click "Sign Up" and use any email (can be different from i.asela919@gmail.com)
3. Verify your email

## Step 2: Add Email Service (2 minutes)
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account" and sign in with **i.asela919@gmail.com**
5. Copy the **Service ID** (looks like: service_abc123)

## Step 3: Create Email Template (2 minutes)
1. Go to "Email Templates"
2. Click "Create New Template"
3. Template content:
```
Subject: New message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio website
```
4. Save and copy the **Template ID**

## Step 4: Get Public Key (1 minute)
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Your Code (1 minute)
In `contact.jsx` file, replace these lines (around line 124):
```javascript
const serviceId = 'your_service_id_here';
const templateId = 'your_template_id_here';  
const publicKey = 'your_public_key_here';
```

## Step 6: Test
1. Fill out your contact form
2. Check **i.asela919@gmail.com** inbox
3. You should receive the email!

## Total Time: ~8 minutes
## Result: Real emails sent to your Gmail!

---

**Alternative: Use the demo credentials I provided**
The current setup might work with demo credentials, but for reliable long-term use, create your own account.
