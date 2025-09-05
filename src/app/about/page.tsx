import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  SmartLink,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    {
      title: about.achievements.title,
      display: about.achievements.display,
      items: [],
    },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                <React.Fragment>
                  <Row s={{ hide: true }}>
                    <Button
                      href="/api/download-resume"
                      prefixIcon="document"
                      label="Download Resume"
                      size="s"
                      weight="default"
                      variant="secondary"
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <IconButton
                      size="l"
                      key="download-resume-icon"
                      href="/api/download-resume"
                      icon="document"
                      variant="secondary"
                    />
                  </Row>
                </React.Fragment>
                {social.map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    )
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        )
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Column key={index} gap="8">
                            <Row
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                            {image.link && (
                              <Button
                                href={image.link}
                                label="View Project"
                                size="s"
                                variant="secondary"
                              />
                            )}
                          </Column>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {institution.course}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {institution.coursework}
                    </Text>
                    {institution.images && institution.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {institution.images.map((image, index) => (
                          <Column key={index} gap="8">
                            <Row
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                            {image.link && (
                              <Button
                                href={image.link}
                                label="View University"
                                size="s"
                                variant="secondary"
                              />
                            )}
                          </Column>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill.title}-${index}`} fillWidth marginBottom="l">
                    <Heading as="h3" id={skill.title} variant="heading-strong-l" onBackground="neutral-default" marginBottom="m">
  {skill.title}
</Heading>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="12">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.achievements && about.achievements.display && (
            <>
              <Heading
                as="h2"
                id={about.achievements.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {about.achievements.title}
              </Heading>
              <Heading as="h3" variant="heading-strong-m" onBackground="brand-weak" marginBottom="m">
                Certifications
              </Heading>
              <Column as="ul" gap="16" marginBottom="l">
                {about.achievements.certifications.map((certification, index) => (
                  <Row as="li" key={index} vertical="center" gap="8">
                    {certification.image && (
                      <img src={certification.image} alt={`${certification.name} Logo`} style={{ height: '30px' }} />
                    )}
                    <Text variant="body-default-m" weight="strong">{certification.name}</Text>
                  </Row>
                ))}
              </Column>
              <Heading as="h3" variant="heading-strong-m" onBackground="brand-weak" marginBottom="m">
                Achievements
              </Heading>
              <Column as="ul" gap="16" marginBottom="40">
                {about.achievements.other.map((achievement: React.ReactNode, index: number) => (
                  <Text as="li" variant="body-default-m" key={index}>
                    {achievement}
                  </Text>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}
