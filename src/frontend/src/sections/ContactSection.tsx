import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useSubmitContact } from '../hooks/useQueries';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const submitContactMutation = useSubmitContact();

  const validateForm = (): boolean => {
    const newErrors: { name?: string; message?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);

    if (!validateForm()) {
      return;
    }

    try {
      await submitContactMutation.mutateAsync({ name: name.trim(), message: message.trim() });
      setShowSuccess(true);
      setName('');
      setMessage('');
      setErrors({});
    } catch (error) {
      // Error is handled by the mutation
      console.error('Failed to submit contact form:', error);
    }
  };

  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Contact Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss how we can work together? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {showSuccess && (
                    <Alert className="bg-green-500/10 border-green-500/20">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                      <AlertDescription className="text-green-500">
                        Thank you for your message! I'll get back to you soon.
                      </AlertDescription>
                    </Alert>
                  )}

                  {submitContactMutation.isError && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        Failed to send your message. Please try again later.
                      </AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) {
                          setErrors({ ...errors, name: undefined });
                        }
                      }}
                      className={errors.name ? 'border-destructive' : ''}
                      disabled={submitContactMutation.isPending}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or inquiry..."
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) {
                          setErrors({ ...errors, message: undefined });
                        }
                      }}
                      className={`min-h-[150px] ${errors.message ? 'border-destructive' : ''}`}
                      disabled={submitContactMutation.isPending}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={submitContactMutation.isPending}
                  >
                    {submitContactMutation.isPending ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                  <Mail className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
                <CardDescription>
                  Prefer email? Reach out directly at:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:hello@example.com"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  hello@example.com
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2">
                  <MessageSquare className="h-6 w-6 text-blue-500" />
                </div>
                <CardTitle className="text-lg">Response Time</CardTitle>
                <CardDescription>
                  I typically respond within 24-48 hours during business days.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
