// ===== 拼豆工坊 · 设计原图库 =====
// 每个模板 = { name(显示名), img(设计原图), key(文件名) }
// 缩略图显示设计原图，点击后自动转成拼豆图案。
const DESIGN_DIR = 'designs/';
const DESIGNS = {
  '动物': [
    { name:'小猫', key:'animals_cat' }, { name:'小狗', key:'animals_dog' },
    { name:'垂耳兔', key:'animals_rabbit' }, { name:'泰迪熊', key:'animals_bear' },
  ],
  '美食': [
    { name:'甜甜圈', key:'food_donut' }, { name:'草莓', key:'food_strawberry' },
    { name:'汉堡', key:'food_burger' }, { name:'草莓蛋糕', key:'food_cake' },
  ],
  '表情': [
    { name:'微笑', key:'emoji_smile' }, { name:'爱心', key:'emoji_heart' },
    { name:'星星', key:'emoji_star' }, { name:'眨眼', key:'emoji_wink' },
  ],
  '节日': [
    { name:'圣诞树', key:'festival_tree' }, { name:'雪人', key:'festival_snowman' },
    { name:'南瓜灯', key:'festival_pumpkin' }, { name:'新春灯笼', key:'festival_lantern' },
  ],
  '小物': [
    { name:'火箭', key:'items_rocket' }, { name:'小幽灵', key:'items_ghost' },
    { name:'小花花', key:'items_flower' }, { name:'彩虹伞', key:'items_umbrella' },
  ],
  '海洋': [
    { name:'河豚', key:'ocean_puffer' }, { name:'海龟', key:'ocean_turtle' },
    { name:'海星', key:'ocean_starfish' }, { name:'小鲸鱼', key:'ocean_whale' },
  ],
  '虫虫': [
    { name:'蝴蝶', key:'bug_butterfly' }, { name:'小瓢虫', key:'bug_ladybug' },
    { name:'小蜜蜂', key:'bug_bee' }, { name:'小蜗牛', key:'bug_snail' },
  ],
  '植物': [
    { name:'小蘑菇', key:'plant_mushroom' }, { name:'玫瑰花', key:'plant_rose' },
    { name:'仙人掌', key:'plant_cactus' }, { name:'向日葵', key:'plant_sunflower' },
  ],
  '太空': [
    { name:'外星人', key:'space_alien' }, { name:'小月亮', key:'space_moon' },
    { name:'小行星', key:'space_planet' }, { name:'小流星', key:'space_meteor' },
  ],
  '怪兽': [
    { name:'小恐龙', key:'monster_dino' }, { name:'史莱姆', key:'monster_slime' },
    { name:'独角兽', key:'monster_unicorn' }, { name:'小章鱼', key:'monster_octopus' },
  ],
  '萌物': [
    { name:'精灵球', key:'cute_pokeball' }, { name:'礼物盒', key:'cute_gift' },
    { name:'蝴蝶结', key:'cute_bow' }, { name:'抱心小熊', key:'cute_teddy' },
  ],
  '甜品': [
    { name:'冰淇淋', key:'dessert_icecream' }, { name:'纸杯蛋糕', key:'dessert_cupcake' },
    { name:'棒棒糖', key:'dessert_lollipop' }, { name:'布丁', key:'dessert_pudding' },
  ],
  '交通': [
    { name:'小汽车', key:'trans_car' }, { name:'小巴士', key:'trans_bus' },
    { name:'小飞机', key:'trans_plane' }, { name:'小火车', key:'trans_train' },
  ],
  '运动': [
    { name:'足球', key:'sport_football' }, { name:'篮球', key:'sport_basketball' },
    { name:'运动鞋', key:'sport_sneaker' }, { name:'游泳圈', key:'sport_swimring' },
  ],
  '机器人': [
    { name:'机器人', key:'robot_robot' }, { name:'魔法帽', key:'robot_magichat' },
    { name:'游戏手柄', key:'robot_gamepad' }, { name:'像素精灵', key:'robot_pixel' },
  ],
  '几何美学': [
    { name:'同心圆', key:'geom_concentric' }, { name:'彩虹', key:'geom_rainbow' },
    { name:'雪花', key:'geom_snowflake' }, { name:'万花筒', key:'geom_kaleido' },
  ],
  '炫彩图案': [
    { name:'宝石', key:'fancy_gem' }, { name:'星云', key:'fancy_nebula' },
    { name:'梦幻星球', key:'fancy_planet' }, { name:'极光', key:'fancy_aurora' },
  ],
};