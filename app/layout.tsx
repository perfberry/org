import "@mantine/core/styles.css"

import React from "react"
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from "@mantine/core"
import { theme } from "../theme"

export const metadata = {
  title: "Perfberry Framework",
  description: "An ecosystem for visualizing performance testing reports",
}

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  )
}
