import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Database, Users, Target } from "lucide-react";
import dataImage from "@/assets/data-collection.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            About Our Mission
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a dedicated non-profit organization working tirelessly to combat hunger and poverty 
            in India, with a special focus on the communities of Rajasthan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={dataImage} 
              alt="Data collection and mapping work" 
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Dual Approach: Ground Work & Digital Innovation
            </h3>
            <p className="text-lg text-muted-foreground">
              Our unique approach combines direct field work with cutting-edge digital tools. 
              We maintain comprehensive databases of affected areas and continuously monitor 
              government programs that impact local communities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ground Operations</h4>
                  <p className="text-muted-foreground">Direct relief work in rural communities across Rajasthan</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-trust/10 rounded-lg p-2">
                  <Database className="h-6 w-6 text-trust" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Data Systems</h4>
                  <p className="text-muted-foreground">Real-time tracking of hunger patterns and government aid programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-compassion/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-compassion" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Community Focus</h3>
              <p className="text-muted-foreground">
                Working directly with local communities to understand their needs and provide targeted support.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-trust/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-trust" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Data-Driven Impact</h3>
              <p className="text-muted-foreground">
                Using technology to map affected areas and track the effectiveness of relief programs.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="bg-growth/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-growth" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Sustainable Solutions</h3>
              <p className="text-muted-foreground">
                Creating long-term strategies that address root causes, not just immediate symptoms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;