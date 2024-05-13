/**
 * @name 根据装备信息获取基础属性
 * @description 只计算属性增加，并不计算主属性对各属性的加成
 */

import { 属性加成 } from '@/@types/属性'
import { 装备信息数据类型, 装备增益类型, 装备特效枚举 } from '@/@types/装备'
import { 角色基础属性类型 } from '@/@types/角色'
import { 精炼加成系数 } from '@/数据/常量'
import 获取当前数据 from '@/数据/数据工具/获取当前数据'
import { 通用增益计算 } from '@/计算模块/统一工具函数/增益计算函数'
import { 角色默认基础属性 } from '@/工具函数/init/默认数据'

const { 装备数据, 镶嵌孔, 附魔, 五彩石 } = 获取当前数据()

interface 计算设置 {
  计算五彩石?: boolean
  计算附魔?: boolean
  计算装备特效?: boolean
}

const 根据装备信息获取基础属性 = (
  装备信息: 装备信息数据类型,
  计算设置?: 计算设置
): 装备信息数据类型 => {
  let 装备基础属性: 角色基础属性类型 = { ...角色默认基础属性 }
  const { 计算五彩石 = true, 计算附魔 = true, 计算装备特效 = true } = 计算设置 || {}

  // 五彩石计算
  if (计算五彩石 && 装备信息?.五彩石) {
    装备基础属性 = 五彩石计算(装备信息?.五彩石, 装备基础属性)
  }

  const 装备增益原始数据: 装备特效枚举[] = []

  // 装备计算
  装备信息?.装备列表?.forEach((装备) => {
    const 该装备属性 = 装备数据[装备?.装备部位]?.find((a) => a?.id === 装备?.id)
    if (该装备属性) {
      if (该装备属性?.武器伤害_最大值 && 该装备属性.武器伤害_最小值) {
        装备基础属性.武器伤害_最小值 += 该装备属性.武器伤害_最小值
        装备基础属性.武器伤害_最大值 += 该装备属性.武器伤害_最大值
      }
      该装备属性.装备增益.forEach((增益) => {
        装备基础属性 = 基础属性计算(
          {
            属性: 增益.属性,
            值: 精炼加成系数算法(增益.值, 装备.当前精炼等级),
          },
          装备基础属性
        )
      })
      装备.镶嵌孔数组?.forEach((item) => {
        const 该镶嵌孔 = 镶嵌孔.find(
          (b) =>
            item.镶嵌类型 && (item.镶嵌类型 === b.镶嵌类型 || b.镶嵌索引?.includes(item.镶嵌类型))
        )
        if (该镶嵌孔) {
          装备基础属性 = 基础属性计算(
            {
              属性: 该镶嵌孔.镶嵌类型,
              值: 该镶嵌孔.各等级增益数据[item.镶嵌宝石等级 || 1]?.增益数值,
            },
            装备基础属性
          )
        }
      })
      if (装备?.附魔 && 计算附魔) {
        const 该附魔 = 附魔.find((b) => b.附魔名称 === 装备?.附魔)
        if (该附魔) {
          该附魔.增益集合?.forEach((附魔增益) => {
            装备基础属性 = 基础属性计算(附魔增益, 装备基础属性)
          })
        }
      }

      // 计算装备增益
      if (该装备属性?.装备特效 && 计算装备特效) {
        装备增益原始数据.push(该装备属性?.装备特效)
      }
    }
  })

  let 最终装备增益: 装备增益类型 = 装备信息?.装备增益
  if (装备增益原始数据?.length) {
    最终装备增益 = { ...最终装备增益, ...判断装备增益(装备增益原始数据) }
  }

  return {
    ...装备信息,
    装备基础属性,
    装备增益: 最终装备增益,
  }
}

// 计算五彩石属性
export const 五彩石计算 = (五彩石名称: string, 原始属性: 角色基础属性类型): 角色基础属性类型 => {
  const 五彩石数据 = 五彩石[5].concat(五彩石[6]).find((数据) => 数据.五彩石名称 === 五彩石名称)
  let 计算后属性 = { ...原始属性 }
  if (五彩石数据) {
    五彩石数据?.装备增益?.forEach((五彩石增益) => {
      计算后属性 = 基础属性计算({ 属性: 五彩石增益.增益类型, 值: 五彩石增益.增益数值 }, 计算后属性)
    })
  }
  return 计算后属性
}

export const 基础属性计算 = (增益: 属性加成, 原始属性: 角色基础属性类型) => {
  const 计算后属性 = 通用增益计算(增益, {
    郭氏身法: 0,
    郭氏力道: 0,
    郭氏元气: 0,
    郭氏根骨: 0,
    计算目标: {} as any,
    最终人物属性: 原始属性,
    技能增伤: { 通用增伤: 0, 易伤增伤: 0, 非侠增伤: 0, 技能系数: 0 },
    郭氏额外会效果值: 0,
    额外会心率: 0,
    郭氏无视防御: 0,
    郭氏属性无视防御: 0,
    郭氏无双等级: 0,
    郭氏破防等级: 0,
    郭氏基础攻击: 0,
    郭氏武器伤害: 0,
  })?.最终人物属性

  return 计算后属性
}

/**
 * @name 精炼加成系数算法
 */
export const 精炼加成系数算法 = (基础, 等级) => {
  return 基础 + Math.round(基础 * 精炼加成系数[等级])
}

export const 判断装备增益 = (装备增益原始数据: 装备特效枚举[]): 装备增益类型 => {
  const 装备增益: Partial<装备增益类型> = {}
  let 门派套装_两件套双会_数量 = 0
  let 门派套装_四件套双会_数量 = 0
  let 切糕_普通_数量 = 0
  let 切糕_英雄_数量 = 0
  let 冬至套装_数量 = 0
  for (let i = 0; i < 装备增益原始数据.length; i++) {
    const 该装备特效 = 装备增益原始数据[i]
    switch (该装备特效) {
      case 装备特效枚举.内功_水特效武器:
      case 装备特效枚举.外功_水特效武器:
        装备增益.水特效武器 = true
        break
      case 装备特效枚举.内功_水特效武器_英雄:
      case 装备特效枚举.外功_水特效武器_英雄:
        装备增益.水特效武器_英雄 = true
        break
      case 装备特效枚举.风特效腰坠:
        装备增益.风特效腰坠 = true
        break
      case 装备特效枚举.风特效腰坠_英雄:
        装备增益.风特效腰坠_英雄 = true
        break
      case 装备特效枚举.大橙武特效:
        装备增益.大橙武特效 = true
        break
      case 装备特效枚举.小橙武特效:
        装备增益.小橙武特效 = true
        break
      case 装备特效枚举.龙门飞剑武器:
        装备增益.龙门飞剑武器 = true
        break
      case 装备特效枚举.门派套装_两件套双会:
        门派套装_两件套双会_数量 += 1
        break
      case 装备特效枚举.门派套装_四件套双会:
        门派套装_四件套双会_数量 += 1
        break
      case 装备特效枚举.切糕_普通:
        切糕_普通_数量 += 1
        break
      case 装备特效枚举.切糕_英雄:
        切糕_英雄_数量 += 1
        break
      case 装备特效枚举.冬至套装:
        冬至套装_数量 += 1
        break
    }
  }
  return {
    ...装备增益,
    套装会心会效: 门派套装_两件套双会_数量 >= 2 || 门派套装_四件套双会_数量 >= 4,
    套装技能: (门派套装_两件套双会_数量 >= 4 ? 1 : 0) + (门派套装_四件套双会_数量 >= 2 ? 1 : 0),
    切糕会心: 切糕_普通_数量 >= 2,
    切糕无双: 切糕_普通_数量 >= 4,
    切糕会心_英雄: 切糕_英雄_数量 >= 2,
    切糕无双_英雄: 切糕_英雄_数量 >= 4,
    冬至套装: 冬至套装_数量 >= 2,
  }
}

export default 根据装备信息获取基础属性
