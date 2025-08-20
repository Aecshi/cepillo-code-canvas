# Cepillo Code Canvas - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- Modern and responsive design
- Dark theme with beautiful gradients
- Smooth animations and transitions
- Contact form with email functionality
- Mobile-first approach
- Fast performance with Vite

## 📧 Email Configuration

To enable the contact form email functionality, you need to set up EmailJS:

### 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Create a new email service (Gmail, Outlook, etc.)
3. Create an email template

### 2. Get Your Credentials

After setting up your service and template, you'll need:

- **Service ID**: Found in your EmailJS dashboard under "Email Services"
- **Template ID**: Found under "Email Templates"
- **Public Key**: Found in your account settings under "API Keys"

### 3. Update the Contact Component

In `src/components/Contact.tsx`, replace the placeholder values:

```typescript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your actual service ID
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your actual template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your actual public key
```

### 4. EmailJS Template Variables

Make sure your EmailJS template includes these variables:

- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Email subject
- `{{message}}` - Email message content
- `{{to_email}}` - Your email (mellogamer217@gmail.com)

### Example Template:

```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

{{message}}
```

## 🛠️ Installation

```bash
npm install
npm run dev
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Hook Form** for form handling
- **Zod** for form validation
- **EmailJS** for contact form functionality
- **Lucide React** for icons
- **Framer Motion** for animations

## 📱 Contact Form Features

- ✅ Form validation with real-time feedback
- ✅ Email sending via EmailJS
- ✅ Loading states and user feedback
- ✅ Toast notifications for success/error
- ✅ Responsive design
- ✅ Accessibility features

## 🌟 Contact

- **Email**: mellogamer217@gmail.com
- **Phone**: 09565593141
- **Location**: Roxas, Oriental Mindoro, Philippines
