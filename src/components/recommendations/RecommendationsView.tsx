import { Column, Heading, Text, Row, Avatar } from "@once-ui-system/core";
import { recommendations } from "@/resources";
import styles from "./RecommendationsView.module.scss"; // Import the SCSS module

export function RecommendationsView() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Heading>Recommendations</Heading>
      <Column gap="l">
        {recommendations.testimonials.map((testimonial, index) => (
          <Column key={index} className={styles.speechBubbleContainer}>
            <Column className={styles.speechBubble}>
              <Text variant="body-default-l" onBackground="neutral-strong">
                "{testimonial.quote}"
              </Text>
            </Column>
            <Row vertical="center" gap="m" className={styles.authorInfo}>
              {testimonial.avatar && (
                <Avatar src={testimonial.avatar} size="l" alt={testimonial.name} />
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
        ))}
      </Column>
    </Column>
  );
}
