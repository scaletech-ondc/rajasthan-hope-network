import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you need help, want to volunteer, or are interested in partnering with us, 
            we'd love to hear from you. Our team is here to assist and answer your questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-foreground">
                Contact Information
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Reach out to us through any of these channels. We're committed to responding 
                quickly, especially for emergency situations.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-lg p-3">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                      <p className="text-muted-foreground mb-1">contact@hungerpoverty.org</p>
                      <p className="text-muted-foreground">emergency@hungerpoverty.org</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-trust/10 rounded-lg p-3">
                      <Phone className="h-6 w-6 text-trust" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                      <p className="text-muted-foreground mb-1">+91 7597 365 803</p>
                      <p className="text-sm text-muted-foreground">24/7 Emergency Hotline</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-compassion/10 rounded-lg p-3">
                      <MapPin className="h-6 w-6 text-compassion" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Visit Us</h4>
                      <p className="text-muted-foreground mb-1">123 Relief Center Road</p>
                      <p className="text-muted-foreground">Jaipur, Rajasthan 302001</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-growth/10 rounded-lg p-3">
                      <Clock className="h-6 w-6 text-growth" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Office Hours</h4>
                      <p className="text-muted-foreground mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Emergency Support: 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                      placeholder="Enter your email"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Subject</label>
                    <select className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground">
                      <option>I need help/assistance</option>
                      <option>I want to volunteer</option>
                      <option>I want to donate</option>
                      <option>I represent an organization</option>
                      <option>Media inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-background text-foreground"
                      placeholder="Tell us how we can help you or how you'd like to help us..."
                    ></textarea>
                  </div>
                  
                  <Button variant="hero" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="mt-16 bg-gradient-to-r from-compassion/10 to-primary/10 border border-compassion/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Emergency Situations</h3>
          <p className="text-lg text-muted-foreground mb-6">
            If you or someone you know is facing a hunger emergency, please don't hesitate to contact 
            our 24/7 emergency hotline. We prioritize urgent cases and can often provide immediate assistance.
          </p>
          <Button variant="compassion" size="lg">
            <Phone className="mr-2 h-5 w-5" />
            Emergency Hotline: +91 7597 365 803
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;