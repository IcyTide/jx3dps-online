import { 技能增益列表类型 } from '@/@types/技能'
import { 属性类型 } from '@/@types/属性'
import 通用增益 from './通用'

const 贯穿增益: 技能增益列表类型[] = [
  ...通用增益,
  {
    增益名称: '素矰',
    增益所在位置: '奇穴',
    常驻增益: false,
    增益集合: [{ 属性: 属性类型.技能系数, 值: 1.05 }],
  },
]

export default 贯穿增益
