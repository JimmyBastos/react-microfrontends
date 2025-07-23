import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  TypographyH1,
  TypographyMuted,
  TypographySmall,
  Badge,
} from '@flagster/ui';
import { Code2, Zap, Globe, CheckCircle, Star, Database } from 'lucide-react';

export function About() {
  const techStack = [
    'React 19',
    'TypeScript',
    'React Router',
    'TanStack Query',
    'shadcn/ui',
    'Tailwind CSS',
    'Radix UI',
    'Lucide Icons',
    'Sonner',
    'Rspack',
  ];

  const features = [
    'Feature flag management with CRUD operations',
    'Real-time search and filtering',
    'Type-to-confirm deletion',
    'Skeleton loading states',
    'Toast notifications',
    'Dark/light theme switching',
    'Class-based service architecture',
    'Optimistic UI updates',
    'Responsive design',
    'Modular component architecture',
  ];

  return (
    <Container className="flex-1 space-y-4 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <TypographyH1>About</TypographyH1>
          <TypographyMuted>
            A modern React demo showcasing best practices in web development
          </TypographyMuted>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5" />
            Project Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <TypographyMuted>
            Flagster is a modern feature flag management system built with React
            19 and TypeScript. It demonstrates advanced patterns including React
            Query for data fetching, class-based services for API logic,
            skeleton loading states, and optimistic UI updates. The project
            showcases best practices in component architecture, state
            management, and user experience design.
          </TypographyMuted>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Technology Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Key Features
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <TypographySmall>{feature}</TypographySmall>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Components</CardTitle>
            <Code2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">20+</div>
            <TypographySmall className="text-xs text-muted-foreground">
              Reusable UI components
            </TypographySmall>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Services</CardTitle>
            <Database className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <TypographySmall className="text-xs text-muted-foreground">
              Class-based API services
            </TypographySmall>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pages</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <TypographySmall className="text-xs text-muted-foreground">
              Dashboard & About
            </TypographySmall>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Features</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">10</div>
            <TypographySmall className="text-xs text-muted-foreground">
              Core functionality
            </TypographySmall>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
