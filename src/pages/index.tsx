import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>g_nemo9 blog</h1>
        <h2>
          <ExtLink href="https://scrapbox.io/g-nemo9-blog/">Scrapbox</ExtLink>
        </h2>
        <h2>
          <ExtLink href="https://twitter.com/g_nemo9/">Twitter</ExtLink>
        </h2>
        <h2>
          <ExtLink href="https://github.com/g-nemo9">GitHub</ExtLink>
        </h2>
      </div>
    </>
  )
}
