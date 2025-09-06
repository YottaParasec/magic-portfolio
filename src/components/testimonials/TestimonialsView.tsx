import { Column, Heading, Text, Row, Avatar, Card } from "@once-ui-system/core";
import { testimonials } from "@/resources";

export function TestimonialsView() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Heading>Testimonials</Heading>
      <Column gap="l">
        {testimonials.testimonials.map((testimonial, index) => (
          <Card key={index} border="neutral-alpha-weak" padding="l">
            <Column gap="l">
              <Text variant="body-default-l" onBackground="neutral-strong">
                &quot;{testimonial.quote}&quot;
              </Text>
              <Row vertical="center" gap="m">
                {testimonial.avatar && (
                  <Avatar src={testimonial.avatar} size="l" />
                )}
                <Column>
                  <Text variant="label-default-m" onBackground="neutral-strong">
                    {testimonial.name}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {testimonial.role}
                  </Text>
                </Column>
              </Row>
            </Column>
          </Card>
        ))}
      </Column>
    </Column>
  );
}
