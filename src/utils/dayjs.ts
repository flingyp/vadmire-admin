import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import isTomorrow from 'dayjs/plugin/isTomorrow'
import localeData from 'dayjs/plugin/localeData'

import 'dayjs/locale/zh-cn'
import 'dayjs/locale/en'
import 'dayjs/locale/ko'

import type { Locales } from '~/types'

dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(isTomorrow)
dayjs.extend(localeData)

export const changeDayjsLocales = (locales: Locales) => {
  if (locales === 'zh_CN') dayjs.locale('zh-cn')
  else if (locales === 'en_US') dayjs.locale('en')
  else if (locales === 'ko_KR') dayjs.locale('ko')
  else dayjs.locale('zh-cn')
}

export default dayjs
