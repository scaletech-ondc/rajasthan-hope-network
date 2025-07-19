import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Users, Heart, Database } from "lucide-react";
import impactImage from "@/assets/impact-work.jpg";

const Impact = () => {
  const stats = [
    { label: "Families Fed", value: 15000, target: 20000, icon: Heart, color: "compassion" },
    { label: "Villages Mapped", value: 52, target: 75, icon: Database, color: "trust" },
    { label: "Children in School", value: 3200, target: 5000, icon: Users, color: "growth" },
    { label: "Programs Tracked", value: 28, target: 35, icon: TrendingUp, color: "hope" },
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every data point represents a life touched, a family helped, and a community strengthened. 
            Here's how we're making a difference in Rajasthan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground">
              Measurable Change, Real Lives
            </h3>
            <p className="text-lg text-muted-foreground">
              Our dual approach of ground work and digital tracking allows us to monitor our impact 
              in real-time and adjust our strategies for maximum effectiveness.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const percentage = (stat.value / stat.target) * 100;
                
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`bg-${stat.color}/10 rounded-lg p-2`}>
                          <Icon className={`h-5 w-5 text-${stat.color}`} />
                        </div>
                        <div className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-foreground mb-2">
                        {stat.value.toLocaleString()}
                      </div>
                      <Progress value={percentage} className="h-2 mb-2" />
                      <div className="text-xs text-muted-foreground">
                        Target: {stat.target.toLocaleString()}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div>
            <img 
              src={impactImage} 
              alt="Impact of our relief work" 
              className="rounded-xl shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-trust/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Real-Time Database Monitoring
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Our innovative approach includes maintaining a live database that tracks hunger patterns, 
                government program effectiveness, and emerging needs across Rajasthan. This allows us to 
                respond quickly to crises and identify areas where intervention is most needed.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-hope rounded-full"></div>
                  <span className="text-foreground">24/7 monitoring of affected areas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-trust rounded-full"></div>
                  <span className="text-foreground">Government program tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-compassion rounded-full"></div>
                  <span className="text-foreground">Community feedback integration</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4 text-foreground">Current Active Programs</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Emergency Food Distribution</span>
                  <span className="bg-compassion text-white px-3 py-1 rounded-full text-sm">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Child Nutrition Program</span>
                  <span className="bg-growth text-white px-3 py-1 rounded-full text-sm">Expanding</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Digital Literacy Initiative</span>
                  <span className="bg-trust text-white px-3 py-1 rounded-full text-sm">Planning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;