import { usePageData } from '../../../'
import { SwitchAppearance } from '../SwitchAppearance'
import { Documate } from '../Documate'
import styles from './index.module.scss'
import type { NavItemWithLink } from 'shared/types'

export function MenuItem({ item }: { item: NavItemWithLink }) {
  return (
    <div className="text-sm font-medium mx-3">
      <a href={item.link} className={styles.link}>
        {item.text}
      </a>
    </div>
  )
}

export function Nav() {
  const { siteData } = usePageData()
  const nav = siteData.themeConfig.nav || []
  const { ask } = siteData.aiConfig.server || {}

  return (
    <header fixed="~" pos="t-0 l-0" w="full" z="10">
      <div
        flex="~"
        items="center"
        justify="between"
        // {/* divider-bottom 为自定义规则*/}
        className={`h-14 divider-bottom ${styles.nav}`}
      >
        <div>
          <a
            href="/"
            hover="opacity-60"
            className="w-full h-full text-1rem font-semibold flex items-center"
          >
            Rpress
          </a>
        </div>
        <div flex="~">
          {/* 普通菜单 */}
          <div flex="~">
            {nav.map((item) => (
              <MenuItem item={item} key={item.text} />
            ))}
          </div>
          {/* ask ai */}
          <div before="menu-item-before" flex="~">
            <Documate endpoint={ask} __island />
          </div>
          {/* 白天/夜间模式切换 */}
          <div before="menu-item-before" flex="~">
            <SwitchAppearance __island />
          </div>
          {/* 相关链接 */}
          <div
            className={styles.socialLinkIcon}
            ml="2"
            before="menu-item-before"
          >
            <a href="https://github.com/c0dedance/r-press">
              <div className="i-carbon-logo-github w-5 h-5 fill-current"></div>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
