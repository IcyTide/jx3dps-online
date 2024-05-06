import { 技能增益列表类型 } from '@/@types/技能'
import { 属性类型 } from '@/@types/属性'
import 通用增益 from './通用'

const 标鹄增益: 技能增益列表类型[] = [
  ...通用增益,
  {
    增益名称: '贯侯',
    增益所在位置: '奇穴',
    增益启用开关: false,
    增益集合: [{ 属性: 属性类型.非侠增伤, 值: 205 / 1024 }],
    // 代码里用的是DST_NPC_DAMAGE_COEFFICIENT，和非侠是同一个
  },
  {
    增益名称: 'CW5%',
    增益所在位置: '装备',
    常驻增益: false,
    增益集合: [{ 属性: 属性类型.通用增伤, 值: 51 / 1024 }],
  },
  {
    增益名称: '小CW会心5%',
    增益所在位置: '装备',
    常驻增益: false,
    增益集合: [{ 属性: 属性类型.外功会心百分比, 值: 0.05 }],
  },
]

export default 标鹄增益
