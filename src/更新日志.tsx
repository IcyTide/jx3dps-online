export default [
  {
    version: '[雾海寻龙] 1.0.4',
    date: '2024-05-21 10:45:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.4.1'>
        <p>{`- 修复「关闭背景」功能重新进入页面没有读取缓存的问题`}</p>
        <p>{`- 修复系统中部分错别字 「决」 => 「诀」`}</p>
        <p>{`- 增加「万灵阵(从朱)」选项，覆盖率100%`}</p>
      </p>,
      '孤锋诀',
      <p style={{ paddingLeft: 12 }} key='1.0.4.2'>
        <p>- 修复孤锋诀无法选择力道五彩石的BUG</p>
        <p>
          -
          更新了孤锋诀模拟器内DOT伤害的快照拆分，（后续保存的循环会生效，外面循环目前没改。理论差距不大）
        </p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.3',
    date: '2024-05-17 10:40:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.3.1'>
        <p>- 配装器快速一键附魔功能增加选择计算部位功能，大大提高计算效率</p>
        <p>- 修复切换循环没有自动切换至对应循环奇穴的BUG</p>
      </p>,
      '凌海诀',
      <p style={{ paddingLeft: 12 }} key='1.0.3.2'>
        <p>- 凌海诀计算卡顿的原因为循环细化的较为详细，计算过程更为复杂</p>
        <p>- 暂时去除了凌海诀的「优化算法」功能</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.2',
    date: '2024-05-16 09:40:00',
    content: [
      '综合',
      <p style={{ paddingLeft: 12 }} key='1.0.2.1'>
        <p>- 主JS拆包，优化了首次加载的速度</p>
      </p>,
      '凌海诀',
      <p style={{ paddingLeft: 12 }} key='1.0.2.2'>
        <p>- 根据方小皮提供的橙武JCL生成了新的橙武循环</p>
        <p>- 修复了普通水特效和风特效没有生效的BUG</p>
        <p>- 增加了团队增益快捷设置</p>
      </p>,
    ],
  },
  {
    version: '[雾海寻龙] 1.0.1',
    date: '2024-05-11 16:10:00',
    content: ['支持凌海诀模块，数据提供：考拉。测试：方小皮（还在调试中）'],
  },
  {
    version: '[雾海寻龙] 1.0.0',
    date: '2024-05-11 16:10:00',
    content: [
      '合并万灵/刀宗计算器',
      '项目代码重构',
      '系统右上角可以切换心法',
      '新心法可以通过录入心法模块实现，提高了接入效率',
      '理论计算效率提升50%，1164次附魔计算本地耗时【500ms】 => 【240ms】',
      '后续提供接入文档',
    ],
  },
]
