import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const meta = {
  url : "https://helpers-hooks.vercel.app/",
  ogimage : "https://thutablog.vercel.app/_next/image?url=%2Fbanners%2Fthutasann-react.webp&w=1920&q=100",
  fav : "http://www.yournxt.com/wp-content/uploads/2021/04/Hooks.png"
}

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
      <meta property="og:description" content="This Doc Site contains Reusable Custom Hooks and Helpers Functions" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:image" content={meta.ogimage} />

      <link rel="icon" type="image/x-icon" href={meta.fav} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:image" content={meta.ogimage} />
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
