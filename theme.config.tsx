import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span> <b>Helpers Hooks </b></span>,
  useNextSeoProps(){
    return {
      titleTemplate: '%s - Helpers Hooks'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Nextra" />
      <meta property="og:description" content="Reusable Custom Hooks and Helpers Functions" />
    </>
  ),
  project: {
    link: 'https://github.com/thutasann/react-helpers-hooks',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/thutasann/react-helpers-hooks',
  footer: {
    text: 'Helpers Hooks',
  },
}

export default config
