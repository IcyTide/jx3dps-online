import { 属性简写枚举 } from '@/@types/枚举'
import { 角色基础属性类型 } from '@/@types/角色'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'

const { 附魔 } = 获取当前数据()
const { 主属性 } = 获取当前数据()

export const 获取当前各属性最大附魔 = () => {
  const res = {}
  附魔?.forEach((item) => {
    // const 部位表单key = `${EquipmentCharacterPositionEnum[key]}${key}`
    // const 附魔类型 = item?.附魔名称?.split('+')?.[0]
    const 附魔属性 = item?.增益集合?.[0]?.属性 || ''
    const 附魔数值 = item?.增益集合?.[0]?.值 || 0
    const 附魔简写 = 属性简写枚举[附魔属性]
    if (!res?.[附魔简写] || res[附魔简写] < 附魔数值) {
      res[附魔简写] = 附魔数值
    }
  })
  return Object.keys(res)
    .filter((item) => item !== '加速')
    .map((key) => {
      return {
        收益: key,
        值: res[key],
      }
    })
}

export const 获取单点属性收益列表 = () => {
  const mapKeyList = [主属性, '攻击', '武伤', '无双', '破防', '会心', '会效', '破招', '全能']
  return mapKeyList.map((key) => {
    return {
      收益: key,
      值: 1,
    }
  })
}

export const 收益增益属性计算 = (
  属性: string,
  值,
  角色最终属性: 角色基础属性类型
): 角色基础属性类型 => {
  const 最终属性 = { ...角色最终属性 }
  switch (属性) {
    case 主属性:
      最终属性[主属性] += 值
      break
    case '攻击':
      最终属性.基础攻击 += 值
      break
    case '会心':
      最终属性.会心等级 += 值
      break
    case '会效':
      最终属性.会心效果等级 += 值
      break
    case '破防':
      最终属性.破防等级 += 值
      break
    case '无双':
      最终属性.无双等级 += 值
      break
    case '破招':
      最终属性.破招值 += 值
      break
    case '全能':
      最终属性.全能等级 += 值
      break
    case '武伤':
      最终属性.武器伤害_最小值 += 值
      最终属性.武器伤害_最大值 += 值
      break
    case '加速':
      最终属性.加速等级 += 值
      break
  }
  return 最终属性
}
