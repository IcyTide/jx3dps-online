import { 属性加成 } from '@/@types/属性'

/**
 * @name 技能秘籍数值数据
 */
export interface 小药小吃数据类型 {
  小吃名称: string
  小吃品级: '蓝' | '紫'
  小吃部位: 小吃类型枚举
  增益集合: 属性加成[]
}

export enum 小吃类型枚举 {
  药品辅助 = '药品辅助',
  药品增强 = '药品增强',
  食品辅助 = '食品辅助',
  食品增强 = '食品增强',
  武器磨石 = '武器磨石',
  家园菜品 = '家园菜品',
  家园酒品 = '家园酒品',
  团队宴席 = '团队宴席',
}
