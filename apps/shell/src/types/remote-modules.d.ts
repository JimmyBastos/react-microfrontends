declare module 'dashboard/Dashboard' {
  import { ComponentType } from 'react';
  const Dashboard: ComponentType;
  export default Dashboard;
}

declare module 'about/About' {
  import { ComponentType } from 'react';
  const About: ComponentType;
  export default About;
}

declare module 'shell/QueryClient' {
  import { QueryClient } from '@tanstack/react-query';
  export const queryClient: QueryClient;
}
