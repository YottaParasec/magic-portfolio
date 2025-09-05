import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { Mailchimp } from "@/components";
import { Posts } from "@/components/insights/Posts";
import { baseURL, insights, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: insights.title,
    description: insights.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(insights.title)}`,
    path: insights.path,
  });
}

export default function Insights() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={insights.title}
        description={insights.description}
        path={insights.path}
        image={`/api/og/generate?title=${encodeURIComponent(insights.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/insights`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" marginLeft="24">
        {insights.title}
      </Heading>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 2]} columns="2" thumbnail />
        <Posts range={[3, 4]} columns="2" thumbnail direction="column" />
        <Mailchimp marginBottom="l" />
        <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
          Earlier posts
        </Heading>
        <Posts range={[5]} columns="2" />
      </Column>
    </Column>
  );
}
