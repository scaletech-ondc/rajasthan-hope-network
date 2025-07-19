import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, HandHeart, Users, Mail, DollarSign, Laptop } from "lucide-react";

const GetInvolved = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Join Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to support our work in fighting hunger and poverty. 
            Whether through donations, volunteering, or partnerships, every contribution makes a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="bg-compassion/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-compassion" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Donate</h3>
              <p className="text-muted-foreground mb-6">
                Your donation directly funds food distribution, educational programs, and our data tracking systems.
              </p>
              <Button variant="donate" className="w-full">
                <Heart className="mr-2 h-4 w-4" />
                Make a Donation
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="bg-growth/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <HandHeart className="h-8 w-8 text-growth" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Volunteer</h3>
              <p className="text-muted-foreground mb-6">
                Join our team on the ground or help with our digital initiatives from anywhere in the world.
              </p>
              <Button variant="compassion" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Become a Volunteer
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-8 text-center">
              <div className="bg-trust/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Laptop className="h-8 w-8 text-trust" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Partner</h3>
              <p className="text-muted-foreground mb-6">
                Organizations and corporations can partner with us to amplify our impact and reach more communities.
              </p>
              <Button variant="outline" className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Partner With Us
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Appeal */}
        <div className="bg-gradient-to-r from-compassion to-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Emergency Relief Fund
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Severe drought conditions in eastern Rajasthan have left thousands of families without adequate food. 
              Your immediate support can provide emergency relief packages to those most in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                Emergency Donation
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Ways to Help */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-8 text-foreground">Other Ways to Help</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-hope/10 rounded-lg p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Heart className="h-6 w-6 text-hope" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Spread Awareness</h4>
              <p className="text-sm text-muted-foreground">Share our mission on social media</p>
            </div>
            
            <div className="text-center">
              <div className="bg-trust/10 rounded-lg p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Laptop className="h-6 w-6 text-trust" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Tech Skills</h4>
              <p className="text-sm text-muted-foreground">Help improve our database systems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-growth/10 rounded-lg p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-6 w-6 text-growth" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Community Events</h4>
              <p className="text-sm text-muted-foreground">Organize fundraising events</p>
            </div>
            
            <div className="text-center">
              <div className="bg-compassion/10 rounded-lg p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <Mail className="h-6 w-6 text-compassion" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Monthly Updates</h4>
              <p className="text-sm text-muted-foreground">Subscribe to our newsletter</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;