import { Code, Palette, Rocket, Zap, Globe, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications using the latest technologies and best practices.',
    features: ['React & TypeScript', 'Full-stack Development', 'API Integration'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating beautiful, intuitive user interfaces that provide exceptional user experiences across all devices.',
    features: ['User Research', 'Wireframing & Prototyping', 'Visual Design'],
  },
  {
    icon: Rocket,
    title: 'Product Strategy',
    description: 'Helping businesses define and execute their product vision with strategic planning and market analysis.',
    features: ['Market Research', 'Product Roadmaps', 'Growth Strategy'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Optimizing applications for speed, efficiency, and scalability to deliver the best possible performance.',
    features: ['Code Optimization', 'Load Time Reduction', 'SEO Enhancement'],
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description: 'Developing comprehensive digital marketing strategies to increase online presence and drive engagement.',
    features: ['Content Strategy', 'Social Media', 'Analytics & Reporting'],
  },
  {
    icon: Users,
    title: 'Consulting & Training',
    description: 'Providing expert guidance and training to help teams adopt new technologies and improve their workflows.',
    features: ['Technical Consulting', 'Team Training', 'Best Practices'],
  },
];

export default function ServicesSection() {
  return (
    <section className="container py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            My Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a comprehensive range of professional services to help bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
