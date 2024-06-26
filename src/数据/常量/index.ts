/**
 * 常量文件
 */

import type { 延迟数据类型, 目标属性类型 } from '@/@types/常量'

export const DEFAULT_PROJECT_NAME = '默认方案'

export const 自身等级 = 120 // 当前角色等级
export const 每等级减伤 = 0.05

// 120级自身属性系数
// 数据源：https://www.jx3box.com/bps/45088

export const 属性系数 = {
  会心: 78622.5,
  会效: 27513.75,
  御劲: 78622.5,
  化劲: 11385.5, // *
  命中: 57180.75,
  闪避: 30549.75, // *
  招架: 35846.25, // *
  无双: 75809.25,
  外防: 42000.75, // *
  内防: 42000.75, // *
  破防: 78622.5,
  急速: 96483.75,
  御劲减会伤: 21095.25,
}

// 注意这玩意本质上是小数算的，不是1024
export const 基础系数 = {
  身法转会心: 0.64,
  力道转攻击: 0.15,
  力道转破防: 0.3,
  根骨转会心: 0.64,
  元气转攻击: 0.18,
  元气转破防: 0.3,
}

export const 目标集合: 目标属性类型[] = [
  {
    名称: '124级木桩',
    等级: 124,
    防御点数: 27550,
    防御系数: 51164.55,
    防御值: 0.35, // 35%
  },
  {
    名称: '123级木桩',
    等级: 123,
    防御点数: 26317,
    防御系数: 48873.6,
    防御值: 0.35, // 35%
  },
  {
    名称: '122级木桩',
    等级: 122,
    防御点数: 15528,
    防御系数: 46582.65,
    防御值: 0.25, // 25%
  },
  {
    名称: '121级木桩',
    等级: 121,
    防御点数: 11073,
    防御系数: 44291.7,
    防御值: 0.2, // 20%
  },
]

export const 精炼加成系数 = {
  1: 0.005,
  2: 0.013,
  3: 0.024,
  4: 0.038,
  5: 0.055,
  6: 0.075,
  7: 0.098,
  8: 0.124,
  9: 0.153,
  10: 0.185,
}

export const 延迟设定: 延迟数据类型[] = [
  {
    label: '超低延迟(0-30)',
    value: 0,
  },
  {
    label: '中低延迟(30-60)',
    value: 1,
  },
  {
    label: '一般延迟(60-90)',
    value: 2,
  },
  {
    label: '高延迟(90以上)',
    value: 3,
  },
]
