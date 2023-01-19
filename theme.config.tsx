import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const meta = {
  url : "https://helpers-hooks.vercel.app/",
  ogimage : "og.webp",
  fav : "fav.png"
}

const config: DocsThemeConfig = {
  logo:(
    <>
    <svg width="50" height="50" viewBox="0 0 114 164" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M75.3811 49.9549C83.0952 63.3161 87.7569 76.6481 89.1142 87.3511C89.7934 92.7069 89.6327 97.3065 88.6873 100.889C87.7445 104.461 86.068 106.875 83.8064 108.181C81.5447 109.487 78.6156 109.731 75.0506 108.762C71.4758 107.789 67.412 105.629 63.1134 102.363C54.523 95.8357 45.308 85.1326 37.5939 71.7714C29.8798 58.4102 25.2181 45.0782 23.8608 34.3752C23.1816 29.0194 23.3423 24.4198 24.2877 20.8378C25.2305 17.2656 26.907 14.8513 29.1687 13.5455C31.4303 12.2397 34.3594 11.995 37.9244 12.9646C41.4992 13.9369 45.563 16.0975 49.8616 19.3636C58.452 25.8906 67.6671 36.5938 75.3811 49.9549Z" stroke="#2C6AFA" stroke-width="3.86132"/>
      <path d="M75.3811 71.7715C67.667 85.1326 58.452 95.8358 49.8616 102.363C45.563 105.629 41.4992 107.789 37.9244 108.762C34.3594 109.731 31.4303 109.487 29.1686 108.181C26.907 106.875 25.2305 104.461 24.2877 100.889C23.3423 97.3066 23.1816 92.707 23.8608 87.3512C25.2181 76.6482 29.8798 63.3162 37.5939 49.955C45.3079 36.5938 54.523 25.8907 63.1134 19.3637C67.412 16.0976 71.4758 13.937 75.0506 12.9647C78.6156 11.995 81.5447 12.2398 83.8063 13.5456C86.068 14.8513 87.7445 17.2656 88.6873 20.8378C89.6327 24.4198 89.7934 29.0195 89.1142 34.3753C87.7569 45.0783 83.0952 58.4103 75.3811 71.7715Z" stroke="#2C6AFA" stroke-width="3.86132"/>
      <path d="M56.5684 39.0711C71.9965 39.0711 85.8732 41.7 95.821 45.876C100.799 47.9657 104.702 50.4047 107.331 53.0145C109.954 55.6171 111.206 58.2761 111.206 60.8876C111.206 63.4991 109.954 66.1582 107.331 68.7608C104.702 71.3705 100.799 73.8095 95.821 75.8992C85.8732 80.0752 71.9965 82.7041 56.5684 82.7041C41.1402 82.7041 27.2635 80.0752 17.3158 75.8992C12.3379 73.8095 8.4349 71.3705 5.80546 68.7608C3.18324 66.1582 1.93066 63.4991 1.93066 60.8876C1.93066 58.2761 3.18324 55.6171 5.80546 53.0145C8.4349 50.4047 12.3379 47.9657 17.3158 45.876C27.2635 41.7 41.1402 39.0711 56.5684 39.0711Z" stroke="#2C6AFA" stroke-width="3.86132"/>
      <path d="M52.8999 141.439L52.8999 75.2734H60.4142V141.439C60.3368 146.679 63.9173 157.16 78.8583 157.16C97.9855 156.887 101.173 141.097 100.376 133.236H92.8622C98.3271 129.682 104.475 115.122 106.866 108.287C109.257 147.249 103.109 163.654 78.8583 163.996C59.4578 164.269 53.4692 149.072 52.8999 141.439Z" fill="#B1B1B1"/>
      <circle cx="56.5682" cy="60.8876" r="10.0394" fill="white"/>
    </svg>
    &nbsp;<span><b>HELPERS HOOKS </b></span>
    </>
  ),
  useNextSeoProps(){
    return {
      titleTemplate: '%s - Helpers Hooks'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="HELPERS HOOKS" />
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
    text: 'HELPERS HOOKS',
  },
}

export default config
