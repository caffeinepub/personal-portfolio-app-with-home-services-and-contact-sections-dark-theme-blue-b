import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomeSection() {
  return (
    <section className="container py-16 md:py-24 lg:py-32">
      <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
          <Sparkles className="h-4 w-4 text-blue-500" />
          <span className="text-sm text-blue-500 font-medium">Welcome to my portfolio</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
              Shiv Shankar Kumar Saket
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
            A passionate professional dedicated to delivering exceptional results and creating meaningful solutions.
          </p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Welcome to my portfolio! I'm excited to share my work and expertise with you. 
          Explore my services to see what I can offer, or get in touch to discuss how we can work together 
          to bring your ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            View My Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Get in Touch
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-12 w-full max-w-2xl">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-blue-500">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-blue-500">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-blue-500">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
