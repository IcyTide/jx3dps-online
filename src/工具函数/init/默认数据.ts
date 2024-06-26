import { 角色基础属性类型 } from '@/@types/角色'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'

const { 基础属性 = {} } = 获取当前数据()

export const 角色默认基础属性: 角色基础属性类型 = {
  等级: 120,
  基础攻击: 0,
  破防等级: 0,
  无双等级: 0,
  会心等级: 0,
  会心效果等级: 0,
  全能等级: 0,
  武器伤害_最小值: 0,
  武器伤害_最大值: 0,
  破招值: 0,
  力道: 41,
  元气: 41,
  身法: 41,
  根骨: 41,
  体质: 0,
  加速等级: 0,
  ...基础属性,
}
