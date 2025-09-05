import { TestimonialsView } from '@/components/testimonials/TestimonialsView';
import { Meta } from '@once-ui-system/core';
import { baseURL, testimonials } from '@/resources';

export async function generateMetadata() {
  return Meta.generate({
    title: testimonials.title,
    description: testimonials.description,
    baseURL: baseURL,
    path: testimonials.path,
  });
}

export default function Testimonials() {
  return <TestimonialsView />;
}
