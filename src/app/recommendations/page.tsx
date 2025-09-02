import { RecommendationsView } from '@/components/recommendations/RecommendationsView';
import { Meta } from '@once-ui-system/core';
import { baseURL, recommendations } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: recommendations.title,
    description: recommendations.description,
    baseURL: baseURL,
    path: recommendations.path,
  });
}

export default function Recommendations() {
  return <RecommendationsView />;
}
