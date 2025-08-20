import React, { useState } from 'react';
import { Mail, Phone, Facebook, MapPin, Send, MessageSquare, ArrowRight, MessageCircle, Link as LinkIcon, Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(50, 'Name must be less than 50 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100, 'Subject must be less than 100 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const contactMethods = [
    {
      icon: <Mail className="text-forest-light h-6 w-6" />,
      title: 'Email',
      value: 'mellogamer217@gmail.com',
      href: 'mailto:mellogamer217@gmail.com',
    },
    {
      icon: <Phone className="text-forest-light h-6 w-6" />,
      title: 'Phone',
      value: '09565593141',
      href: 'tel:+6309565593141',
    },
    {
      icon: <Facebook className="text-forest-light h-6 w-6" />,
      title: 'Facebook',
      value: 'Alfred Emil Cepillo',
      href: 'https://facebook.com/alfredemilcepillo',
    },
    {
      icon: <MapPin className="text-forest-light h-6 w-6" />,
      title: 'Location',
      value: 'Roxas, Oriental Mindoro, Philippines',
      href: '#',
    },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = 'service_v84vxta'; // Your EmailJS service ID
      const publicKey = 'PTDsC4lsgvFNheItn'; // Your EmailJS public key
      
      // Initialize EmailJS with public key
      emailjs.init(publicKey);
      
      // Prepare template parameters to match your Contact Us template
      const templateParams = {
        name: data.name,
        from_name: data.name,
        from_email: data.email,
        to_email: 'mellogamer217@gmail.com',
        subject: data.subject,
        message: data.message,
      };

      console.log('Sending email with params:', templateParams);
      
      // Send email using your Contact Us template
      const result = await emailjs.send(serviceId, 'template_xpmqshc', templateParams);
      console.log('Email sent successfully:', result);
      
      // Success feedback
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
      
      // Reset form
      reset();
    } catch (error: any) {
      console.error('Email sending failed:', error);
      
      // More detailed error feedback
      let errorMessage = "Please try again or contact me directly via email.";
      
      if (error?.text) {
        console.error('EmailJS error response:', error.text);
        errorMessage = `EmailJS Error: ${error.text}`;
      } else if (error?.message) {
        console.error('Error details:', error.message);
        errorMessage = error.message;
      }
      
      // Log the full error object for debugging
      console.error('Full error object:', JSON.stringify(error, null, 2));
      
      // Error feedback
      toast({
        title: "Failed to send message",
        description: errorMessage,
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-forest/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-forest-dark/10 rounded-full blur-[80px]"></div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forest-light/30 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block font-title">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-forest-light">Touch</span>
            </h2>
            <p className="text-lg text-codeCanvas-muted max-w-xl mx-auto">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
          </div>

          {/* Cards with 3D effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 perspective-1000">
            {contactMethods.map((method, index) => (
              <a 
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : ''}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group transform transition-transform duration-500 hover:scale-105"
              >
                <div className="relative transform-style-3d">
                  {/* Front */}
                  <div className="backface-hidden backdrop-blur-sm bg-codeCanvas-midnight/50 p-6 rounded-xl border border-forest/20 shadow-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-forest/20 to-forest-dark/10 rounded-lg">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">{method.title}</h3>
                        <p className="text-codeCanvas-muted group-hover:text-forest-muted transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 backdrop-blur-sm bg-gradient-to-br from-forest-dark/80 to-forest/40 p-6 rounded-xl border border-forest/30 shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <LinkIcon className="mx-auto h-8 w-8 text-forest-light mb-3" />
                      <p className="text-white font-medium">Connect with me</p>
                      <div className="mt-2 inline-flex items-center text-forest-light text-sm font-medium">
                        Click to open <ArrowRight className="ml-1 h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Chat-like message form */}
          <div className="backdrop-blur-sm bg-codeCanvas-midnight/40 p-8 md:p-10 rounded-2xl border border-forest/10 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-forest/20 rounded-full blur-[50px]"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-forest-dark/10 rounded-full blur-[50px]"></div>
            
            <div className="relative">
              {/* Chat Header */}
              <div className="bg-codeCanvas-dark/50 -mx-10 -mt-10 mb-10 px-10 py-5 border-b border-forest/10 flex items-center">
                <div className="p-2 bg-forest/10 rounded-lg mr-3">
                  <MessageCircle className="text-forest-light h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold font-title">Send Me a Message</h3>
              </div>
              
              {/* Chat Messages */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-forest/20 flex items-center justify-center">
                    <span className="text-forest-light font-semibold">A</span>
                  </div>
                  <div className="bg-forest/10 rounded-2xl rounded-tl-none p-4 max-w-[80%]">
                    <p className="text-cream">Hi there! Thanks for visiting my portfolio. Send me a message using the form below.</p>
                  </div>
                </div>
              </div>
              
              {/* Message Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-codeCanvas-text/80 block ml-1">Name</label>
                    <div className="relative">
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className={`w-full px-4 py-3 pl-10 bg-codeCanvas-dark/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-light/50 focus:border-transparent transition-all duration-300 placeholder:text-codeCanvas-muted/50 ${
                          errors.name ? 'border-red-500' : 'border-forest/20'
                        }`}
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-codeCanvas-muted">
                        <span className="text-sm">@</span>
                      </div>
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-sm ml-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-codeCanvas-text/80 block ml-1">Email</label>
                    <div className="relative">
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className={`w-full px-4 py-3 pl-10 bg-codeCanvas-dark/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-light/50 focus:border-transparent transition-all duration-300 placeholder:text-codeCanvas-muted/50 ${
                          errors.email ? 'border-red-500' : 'border-forest/20'
                        }`}
                      />
                      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-codeCanvas-muted">
                        <Mail className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm ml-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-codeCanvas-text/80 block ml-1">Subject</label>
                  <div className="relative">
                    <input
                      {...register('subject')}
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 pl-10 bg-codeCanvas-dark/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-light/50 focus:border-transparent transition-all duration-300 placeholder:text-codeCanvas-muted/50 ${
                        errors.subject ? 'border-red-500' : 'border-forest/20'
                      }`}
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-codeCanvas-muted">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                  </div>
                  {errors.subject && (
                    <p className="text-red-400 text-sm ml-1">{errors.subject.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-codeCanvas-text/80 block ml-1">Message</label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    className={`w-full px-4 py-3 bg-codeCanvas-dark/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-light/50 focus:border-transparent transition-all duration-300 placeholder:text-codeCanvas-muted/50 resize-none ${
                      errors.message ? 'border-red-500' : 'border-forest/20'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm ml-1">{errors.message.message}</p>
                  )}
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gradient-to-r from-forest to-forest-light rounded-lg text-white font-medium hover:shadow-lg hover:shadow-green-800/30 transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} className="transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
