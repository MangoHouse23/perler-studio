// ===== 手绘萌系角色模板（行宽已统一）=====
const HAND_TEMPLATES = {
  '海洋': [
    { name:'🐡 河豚', grid:`.kkkkkkkkkkkk.
kYYYYYYYYYYYYk
kYYkkYYYYkkYYk
kYYkkYYYYkkYYk
kYYYYkkkkYYYYk
kYYYYYYYYYYYYk
kYYWWWWWWWWYYk
kWWWWWWWWWWWWk
.kkkkkkkkkkkk.` },
    { name:'🐢 海龟', grid:`...kkkkkkkk...
..kkggggggkk..
.kggGGGGGGggk.
kgGGGGGGGGGGkg
kgGGkkkkkkGGkg
kgGkkkkkkkkGkg
.kggkkkkkkggk.
..kkkkkkkkkk..` },
    { name:'🌊 海星', grid:`....kkkkk....
...kYYYYYk...
.kkkkYYYYkkk.
kYkkkkkkkYYk.
kYkYYYYYYkYk.
kkkYkkkkkYkk.
..kkYkkkYkk..
...kkYkYkk...
....kkYkk....
.....kkk.....` },
  ],
  '虫虫': [
    { name:'🐝 小蜜蜂', grid:`..k........k..
..k........k..
..J........J..
.kkkkkkkkkkkk.
kYYYYYYYYYYYYk
kYYkkkYYkkkYYk
kYYWWkYYkWWYYk
kYYkkkYYkkkYYk
kYYYYYYYYYYYYk
kYYYYYYYYYYYYk
.kkkkkkkkkkkk.
kYYYYYYYYYYYYk
.kkkkkkkkkkkk.` },
    { name:'🐞 小瓢虫', grid:`..kk..kk..
.kkkkkkkk.
.kWWkkWWk.
.kkkkkkkk.
kkkkkkkkkk
kRRRkRRRkR
kRkRkRRkRR
kRRRRkRRRR
kkkkkkkkkk` },
    { name:'🦋 蝴蝶', grid:`..kMMk..kMMk..
.kMMMMkkMMMMk.
kMMMMMMMMMMMMk
.kMMMMMMMMMMk.
..kkkkkkkkkk..
...kKKKKKKk...
..kkkk..kkkk..
.kkkkk..kkkkk.` },
    { name:'🐌 小蜗牛', grid:`...kkkkk...
..kGGGGGk..
.kGGkkkGGk.
.kGGkGkGGk.
.kGGkkkGGk.
..kGGGGGk..
...kkkkk...
..kkk..kk..` },
  ],
  '植物': [
    { name:'🍄 蘑菇', grid:`....kkkk....
..kkRRRRkk..
.kRRRRRRRRk.
.kRRRRRRRRk.
.kRRWRRWRRk.
.kkkkkkkkkk.
..kWWWWWWk..
..kWWWWWWk..
..kWWWWWWk..
..kNNNNNNk..
..kkkkkkkk..
..kkkkkkkk..` },
    { name:'🌹 玫瑰', grid:`...kkkkkk...
..kRRRRRRk..
.kRRRRRRRRk.
kRRkkRRkkRRk
kRRkRRRRkRRk
.kRRRRRRRRk.
..kkggggkk..
..kkkkkkkk..` },
    { name:'🌵 仙人掌', grid:`....kkkk....
...kGGGGk...
...kGGGGk...
..kkkGGkkk..
.kGGGGGGGGk.
.kGGkggkGGk.
.kGGGGGGGGk.
...kkkkkk...
..kHHHHHHk..
..kHHHHHHk..
...kkkkkk...` },
    { name:'🌻 向日葵', grid:`..kkkkkkk..
.kYYYYYYYk.
kYYYYYYYYYk
kYkNNNNNkYk
kYNNNNNNNYk
kYYYYYYYYYk
.kYYYYYYYk.
..kkkkkkk..
...kgggk...
...kgggk...
....kkk....` },
  ],
  '太空': [
    { name:'👽 外星人', grid:`..Y..Y..Y...
..k..k..k...
.kkkkkkkkk..
kGGGGGGGGGk.
kGGkkkGGkGGk
kGGWWGGWWGGk
kGGkkkGGkGGk
kGGGGGGGGGk.
kGGGGkkkGGGk
kGGGGGGGGGk.
.kkkkkkkkk..
..GGGGGGG...
..kkkkkkk...` },
    { name:'🌙 月亮与星', grid:`...kkkkkkk.....
..kkWWWWWKk....
..kWWWWWWKKKk..
.kWWWWWWWWKKKk.
.kWWWWWWWWKKKk.
..kWWWWWKKKKk..
..kkWKKKKk.....
...kkkkk.......
..k...U..k.....
..U........U...` },
  ],
  '怪兽': [
    { name:'🦖 小恐龙', grid:`.kkkkkkkkk..
kGGGGGGGGGk.
kGGkkGGkkGk.
kGGWWGGWWGk.
kGGkkGGkkGk.
kGGGGGGGGGk.
kGGGGkkkkGGK
kGGGGGGGGGk.
.kkkkkkkkk..
..GGGGGGG...
..kkkkkkk...` },
    { name:'🟢 史莱姆', grid:`.kkkkkkkk...
kLLLLLLLLk..
kLLLLLLLLk..
kLLWkLLWkLLk
kLLLLLLLLk..
.kkkkkkkk...` },
  ],
  '萌物': [
    { name:'🎮 精灵球', grid:`...kkk...
.kkkkkkk.
kRRRRRRRk
kRRRRRRRk
kRRRRRRRk
kkkkkkkkk
kkkWWkkkk
kkkkkkkkk
kWWWWWWWk
.kkkkkkk.` },
    { name:'🎁 礼物盒', grid:`..kRRk.kRRk...
.kkRRkkkRRkk..
kRRRRRRRRRRRk.
kkRRRRRRRRRkk.
.kRRRRRRRRRk..
.kRRkkkkkRRk..
.kyZYkYYYYkY..
.kZZkkkkkZZk..
.kkkkkkkkkkk..` },
    { name:'💡 小灯泡', grid:`..kkkkkkk..
.kYYYYYYYk.
kYYYYYYYYYk
kYYYkYkYYYk
kYYYYYYYYYk
.kYYYYYYYk.
..kYKKYk...
..kKKKKk...
...kkkk....
..kk..kk...` },
  ],
  '甜品': [
    { name:'🍦 冰淇淋', grid:`...PPPPP...
..PPPPPPP..
.PPPPPPPPP.
.PPPPPPPPP.
.PPPPPPPPP.
YYYYYYYYYYY
YYYYYYYYYYY
..NNNNNNN..
..kHHHHHk..
...kHHHk...
....kHk....
.....kk....` },
    { name:'🧁 纸杯蛋糕', grid:`...kkkkkk...
..kYYYPPPk..
.kYYYYPPPPk.
kYYYPPPPPYYk
kkYYYYYYYYkk
.kkkkkkkkkk.
..kHHHHHHk..
..kHHHHHHk..
...kkkkkk...` },
    { name:'🍬 波板糖', grid:`..k.k..k.k..
.kkkkkkkkkk.
kYYkkkkkkYYk
kYYkPPPPPYYk
kYPPPPPPPPYk
kYYkPPPPPYYk
kYYkkkkkkYYk
.kkkkkkkkkk.
..k.k..k.k..` },
  ],
  '交通': [
    { name:'🚗 小汽车', grid:`..kkkkkkkkkk..
..kHHHHHHHHk..
.kkHHHHHHHHkk.
kkHHHkTTkHHHkk
kHHHHkTTkHHHHk
kHHHHHHHHHHHHk
kkkkkkkkkkkkkk` },
    { name:'🚌 小巴士', grid:`..kkkkkkkkkk..
.kkYYYYYYYYkk.
kYYYYYYYYYYYYk
kYYkWWkYYWWYk.
kYYkWWkYYWWYk.
kYYkkkkYYkkYk.
kYYYYYYYYYYYYk
kkkkkkkkkkkkkk` },
  ],
  '运动': [
    { name:'⚽ 足球', grid:`...kkkkkkk...
..kWWWWWWWk..
.kWWWWWWWWWk.
kWWkWWWWkWWk.
kWWkKWWKkWWk.
kWWkWWWWkWWk.
.kWWWWWWWWWk.
..kWWWWWWWk..
...kkkkkkk...` },
    { name:'🏀 篮球', grid:`...kkkkkkk...
..kOOOOOOOk..
.kOOOOOOOOOk.
kOOkkkkkkOOk.
kOkOOOOOOOkO.
kOOkkkkkkOOk.
.kOOOOOOOOOk.
..kOOOOOOOk..
...kkkkkkk...` },
  ],
  '机器人': [
    { name:'🤖 机器人', grid:`......Y.......
......k.......
......k.......
.kkkkkkkkkkk..
kAAAAAAAAAAk..
kABBBAAAABBBk.
kAAAAAAAAAAk..
kAAAAAAAAAAk..
kAAAkkkkkAAAk.
kAAAAAAAAAAk..
.kkkkkkkkkkk..
..AAAAAAAAAA..
..kkkkkkkkkk..` },
    { name:'🎩 魔法帽', grid:`........kkk........
.......kkkkkk......
......kkkkkkkk.....
.....kkkkkkkkkkk...
....kkkkkkkkkkkkk..
kkkkkkkkkkkkkkkkkkk
kAAAAAAAAAAAAAAAAAk
kkkkkkkkkkkkkkkkkkk
..kRRkkkkkkkkRRk...
..kkkkkkkkkkkkkk...` },
  ]
};