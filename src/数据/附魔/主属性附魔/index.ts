import { 属性类型 } from '@/@types/属性'
import { 装备部位枚举 } from '@/@types/枚举'
import { 附魔数据类型 } from '../interface'

const 附魔数组 = [218, 198, 179, 162]

export const 获取主属性附魔数据 = (主属性?): 附魔数据类型[] => {
  return 附魔数组.map((item) => {
    return {
      附魔名称: `${主属性}+${item}`,
      附魔支持部位: [装备部位枚举.护腕, 装备部位枚举.下装, 装备部位枚举.戒指, 装备部位枚举.暗器],
      增益集合: [{ 属性: 属性类型?.[主属性], 值: item }],
    }
  })
}
