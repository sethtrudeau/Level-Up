import { getFeatures } from '@/lib/notion';
import AppShell from '@/components/AppShell';

export const revalidate = 604800; // 7 days

export default async function Home() {
  const features = await getFeatures();
  return <AppShell features={features} />;
}
