import { Anchor, Badge, Container, Divider, Group, Space, Stack, Text, Title } from "@mantine/core"

export default function HomePage() {
  return (
    <Container size="sm">
      <Stack>
        <Space h="xl" />

        <Title order={1}>Perfberry Framework</Title>
        <Text c="dimmed">An ecosystem for visualizing performance testing reports</Text>
        <Badge>Coming soon</Badge>

        <Space h="xl" />
        <Divider />

        <Group justify="space-between">
          <Text c="dimmed" size="sm">
            &copy; 2026 Perfberry Framework
          </Text>
          <Anchor href="https://github.com/perfberry" size="sm">
            GitHub
          </Anchor>
        </Group>
      </Stack>
    </Container>
  )
}
