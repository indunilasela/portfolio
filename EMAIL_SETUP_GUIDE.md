# EmailJS Setup Guide for Contact Form

To make your contact form send emails to your email address `i.asela919@gmail.com`, you need to set up EmailJS. Follow these steps:

## Step 1: Create an EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account using your email `i.asela919@gmail.com`

## Step 2: Add an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Connect your Gmail account (`i.asela919@gmail.com`)
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
From: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key**

## Step 5: Update Your Code
In your `contact.jsx` file, replace these values around line 147:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id'; // Replace with your Service ID
const EMAILJS_TEMPLATE_ID = 'your_template_id'; // Replace with your Template ID  
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Replace with your Public Key
```

## Step 6: Test Your Form
1. Run your development server: `npm run dev`
2. Go to the contact page
3. Fill out the form and submit
4. Check your email `i.asela919@gmail.com` for the message

## Alternative Simple Solution (If EmailJS is too complex)

If you prefer a simpler approach, you can create a `mailto:` link instead:

1. Replace the form submission with a mailto link
2. When users click submit, it opens their email client with your email pre-filled

Let me know if you need help with either approach!

## Troubleshooting
- Make sure your EmailJS service is active
- Check the browser console for any error messages
- Verify all IDs are correctly copied
- Make sure your Gmail account allows less secure apps (if using Gmail service)

## Free Tier Limits
- EmailJS free tier allows 200 emails per month
- This should be sufficient for a portfolio website
