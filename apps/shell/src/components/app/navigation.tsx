import { navigationItems } from '@/routes';
import {
  cn,
  Container,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  TypographyLarge,
} from '@flagster/ui';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './theme-toggle';

export function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-4">
            <TypographyLarge>Flagster</TypographyLarge>
          </div>

          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.path}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      location.pathname === item.path &&
                        'bg-accent text-accent-foreground',
                    )}
                  >
                    <Link to={item.path}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </nav>
  );
}
