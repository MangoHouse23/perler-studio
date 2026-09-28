// ===== 拼豆工坊 · 精品模板库 =====
// 色板令牌 -> hex（与调色板一致）。空格或 . 为空豆。
const TPL_TOKENS = {
  ' ':null, '.':null,
  'k':'#2B2B33','W':'#FFFFFF','E':'#E6E8EF','A':'#9BA3B0','a':'#4C525E',
  'N':'#7A4E2E','n':'#4A2E1A','H':'#C98B4B','M':'#F5ECD9','S':'#F2C9A8',
  'Z':'#FFB3A0','R':'#E6384B','O':'#F5821F','Y':'#FFCF40','G':'#3FA34D',
  'g':'#1F7A4F','L':'#8FE3A8','T':'#2AA8A0','B':'#3D7BE0','b':'#2950B0',
  'C':'#6FD3F5','P':'#FF8FC6','p':'#E6397A','V':'#9B5DE5','v':'#6A2C8F',
  'J':'#F2B441','U':'#B4E8D5','Q':'#FF9E8A',
  'K':'#12161C','y':'#FCE9A0','l':'#8FE3A8','r':'#C9184A','u':'#FFB703'
};

const TEMPLATES = {
  '动物': [
    { name:'🐱 小猫', grid:
`....kkkk..kk....
..kkOOOOOkOOOO..
.kOOkkkkkkkkkO..
.kONOOkkkkONOk..
.kOOOOkkkkOOOOk.
kOkkkkkkkkkkkOk
kOkOkOkOkOkOkOk
.kOOOOOOOOOOOk.` },
    { name:'🐤 小鸡', grid:
`.kkkkkkkkkkkkk.
kYYYYYYYYYYYYYk
kYkkkkkkkkkkkYk
kYkYOOOOOOYkYkH
kYkYYYYYYYYkYkH
kYHkkky..ykkyYk
kYYYYkkkkkkkYYk
kYYYYYYkkYYYYYk
kkkkkkYkkYkkkkk` },
    { name:'🐸 青蛙', grid:
`.kkkkkkkkkkkkk.
kGGGGGGGGGGGGGk
kGGkGGGkkkGGGGk
kGGkGGGGGGGGGGk
kGGkkkkkkkkkkGG
kGGWkkkkkkkkWGG
kGGkkkkkkkkkkGG
.kGGGkkkkkkGGG.
..kkk..kkk..kk.` },
    { name:'🐧 企鹅', grid:
`.kkkkkkkkkkkkk.
kWWWWkWWWWkWWkH
kWkkkWWWWkkWWkH
kWWWWkWWkWWWWkH
.kWWWWWWWWWWWk.
kWWkkkkkkkkkWWk
kWkkWWWWWWkkkWk
kWkWWWkkWWWWkWk
kWkkWkkkWkkWkWk
kWWkWWWWWWkWWWk
.kkWkkWWkkWkkk.` },
  ],
  '美食': [
    { name:'🍩 甜甜圈', grid:
`.kkkkkkkkkkkkk.
kPPPPPPPPPPPPpk
kPPkkkkkkkkkkpp
kPkkkkkkkkkkkkp
kPkOYkOYkKYYYYp
kYkYkOkYkYkPkYp
kPkYkOYkOYkPPYp
kpkYYYYYYkPPKpp
kukkkkkkkkkkkku
.kkkkkkkkkkkkk.` },
    { name:'🍓 草莓', grid:
`.kkkkkkkkkkk.
kRRRRRRRRRRRk
kRRRRRRRRRRRR
kRYkRRRRRkRRR
kRRRYRRRYRRRk
kRRRRkRRRRRRk
kRRRkGRRYRRRk
kgkRRRRYRgkgn
knnngggggggnk
.knnnnnnkkkk.` },
    { name:'🎂 蛋糕', grid:
`..kkkkkkkkkk..
.kWWWkPPkWWWk.
kWkkkWPPkWkkkH
.kKKkkkrrrkkHk
.kRRRkkkkkkkk.
kRYYYYYYPlkkPk
kRPlPPPlPYYLkk
kRYYYPlkkPPlkk
kRPPPPPlPYYLkk
.kRRkkkkkkkkk.
..kkkkkkkkkk..` },
  ],
  '表情': [
    { name:'😊 微笑', grid:
`.kkkkkkkkkkkkk.
kYYYYYYYYYYYYYk
kYYkkkkkkkkkkYk
kYkkkkkkkkkkkYk
kYkPkkkPkkkPkYk
kYkkkkkkkkkkYkY
kYkPkkkPkkkPkkY
kYkkkkkkkkkkkkY
kYkGGGGGGGGkYkY
kYkkkkkkkkkkkYk
kYYkkkkkkkkkYYk
kkkkkkkkkkkkkkk` },
    { name:'❤️ 爱心', grid:
`.kkkk..kkkk.
kRRRRk.kRRRk
kRRRRk kRRRk
.kRRRkkkRRk.
..kRRRRRRk..
...kkkRRkk..
.....kkkk...
....kkkkk...
..kkkkkkkkk.
.kkkkkkkkkk.
kkkkkkkkkk..
kkkkkkkkk...
.kkkkkkkk...
..kkkkkk....
...kkkk.....
....kk......` },
    { name:'🌟 星星', grid:
`.....kkkkk.....
...kkkYYYkkk...
..kYYYYYYYYYk..
.kYYkkkkkkkYYk.
.kYkYYYYYYYkYk.
kYY kYYYYYYkYYk
kYYkYYYYYYYYYYk
kYYYYYYYYYYYYYk
.kYYkkkkkkkkYYk
.kYkYYYYYYYkYk.
..kYYYYYYYYYk..
...kkkYYYkkk...
.....kkkkk.....
......kkk......` },
  ],
  '节日': [
    { name:'🎄 圣诞树', grid:
`...kkkkkk......
..kkGGGGkk.....
..kGGGGGGGGk...
.kGGGGGGGGGGGk.
.kGGJGGGGGJGGk.
.kGGGGGGGGGGGk.
.kGGJGGGGGJGGk.
.kGGGGGGGGGGGk.
..kGGkGGGGkGGk.
...kkkGGGGkkk..
.knnnnnnnnnnnk.
knnkNNNNNNknnk.
.knnnnnnnnnnnk.
..kkkkkkkkkkk..` },
    { name:'⛄ 雪人', grid:
`.kkkkkkkkkkk.
kWWWWWWWWWWWk
kWWkkkkkkkkWWk
kWWkWWWWkWWWWk
kWWWkkkkkWWWWk
kWWWkkkkkkkWWk
.WWWWWWWWWWWWk
.kNNkkkkkkNNk.
.kNNk.WWWWkNNk.
.kNNkWWWWWWkNNk
.kkkkWWWWWWkkk.
..kWWkkkkkWWk..
..kWWkkkkkWWk..
...kkk...kkk...` },
    { name:'🎃 南瓜灯', grid:
`.kkkkkkkkkkkkk.
kOOOOOOOOOOOOOk
kOOkkkkkkkkkOOO
kOkkkkkkkkkkkOk
kOkkkkkkkkkkkOk
kOkYkYYYYkYkkOk
kOkkkYkYYYkkkOk
kOkkkkYkkkkkkOk
kOkYYkYYYYkYkOQ
kOkkkkkkkkkkkOk
.kOOOOOOOOOOOQ.
.kkkkkkkkkkkkk.` },
  ],
  '小物': [
    { name:'🚀 火箭', grid:
`....kkkkkk.....
...kkWWWWkk....
...kWWWWWWk....
..kWWWWWWWWk...
..kWWWWWWWWk...
...kWkkkkWWk...
...kWkTTkWWk...
..kWWkTTkWWWk..
..kWWkCCkWWWk..
...kWWkkkWWk...
....kkWWkkk....
......kUkk.....
......kUkk.....
.....kkkkk.....` },
    { name:'👻 幽灵', grid:
`.kkkkkkkkkkk.
kWWWWWWWWWWWk
kWWkkWWkkWWWk
kWWkkWWkkWWWk
kWWWWWWWWWWWk
kWWkkkkkkkWWk
.kWWWWWWWWWk.
.kWWWWWWWWWk.
.kWkWWkWWkWk.
.kWWWWWWWWWk.
..kkkkkkkkk..` },
    { name:'🌸 小花', grid:
`.kkkkkkkkkkkk.
.kPkPkkkPkPkPk
kPkPPkkPkPPkPk
.kPkPkkkkkPkPk
.kPPkPPkkPPkPk
.kPkPkkkkkPkPk
..kkkkkkkkkkk.
.kkgkkkkkkggk.
.kgGYYYYYYgGk.
.kGYYYGGYYYGk.
.kYYGGGGGGYYk.
.kYYGGYYGGYYk.
.kGGGYYYYGGGk.
.kkkkkkkkkkk.` },
  ],
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
  ],
  '几何美学': [
    { name:'🎯 同心圆环', grid: `....................\n.......PPPPPP.......\n.....PPVVVVVVPP.....\n....PVVVBBBBVVVP....\n...PVVBBBBBBBBVVP...\n..PVVBBGGGGGGBBVVP..\n..PVBBGGYYYYGGBBVP..\n.PVVBGGYYOOYYGGBVVP.\n.PVBBGYYOOOOYYGBBVP.\n.PVBBGYOORROOYGBBVP.\n.PVBBGYOORROOYGBBVP.\n.PVBBGYYOOOOYYGBBVP.\n.PVVBGGYYOOYYGGBVVP.\n..PVBBGGYYYYGGBBVP..\n..PVVBBGGGGGGBBVVP..\n...PVVBBBBBBBBVVP...\n....PVVVBBBBVVVP....\n.....PPVVVVVVPP.....\n.......PPPPPP.......\n....................` },
    { name:'🌈 彩虹渐变', grid: `RRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV\nRRRROOOYYYGGGBBBVVVV` },
    { name:'🌈 竖彩虹', grid: `CCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nCCCCCCCCCCCCCCCCCCCC\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nVVVVVVVVVVVVVVVVVVVV\nVVVVVVVVVVVVVVVVVVVV\nVVVVVVVVVVVVVVVVVVVV\nPPPPPPPPPPPPPPPPPPPP\nPPPPPPPPPPPPPPPPPPPP\nRRRRRRRRRRRRRRRRRRRR\nRRRRRRRRRRRRRRRRRRRR\nRRRRRRRRRRRRRRRRRRRR\nOOOOOOOOOOOOOOOOOOOO\nOOOOOOOOOOOOOOOOOOOO\nOOOOOOOOOOOOOOOOOOOO\nYYYYYYYYYYYYYYYYYYYY\nYYYYYYYYYYYYYYYYYYYY\nYYYYYYYYYYYYYYYYYYYY` },
    { name:'🌸 六瓣花', grid: `....................\n....................\n.............W......\n.....W......VP......\n.....VV....VV.......\n......V....pV.......\n......Vp...p........\n.......pp...........\n...............VV...\n.........YY.pppVVPW.\n.WPVVppp.YY.........\n...VV...............\n...........pp.......\n........p...pV......\n.......Vp....V......\n.......VV....VV.....\n......PV......W.....\n......W.............\n....................\n....................` },
    { name:'☯️ 太极', grid: `....................\n.........WW.........\n......WWWWWWWW......\n....WWWWWWWWWWWW....\n...WWWWWWWWWWWWWW...\n...WWWWWWWWWWWWWW...\n..WWWWWWWWWWWWWWWW..\n..WWWWWWWWWWWkkkkk..\n..WWWWWWWWWWkkkkkk..\n.WWWWWWWWWWkkkkkkkk.\n.WWWWWWWWkkkkkkkkkk.\n..WWWWWWkkkkkkkkkk..\n..WWWWWkkkkkkkkkkk..\n..kkkkkkkkkkkkkkkk..\n...kkkkkkkkkkkkkk...\n...kkkkkkkkkkkkkk...\n....kkkkkkkkkkkk....\n......kkkkkkkk......\n.........kk.........\n....................` },
  ]
,
  '炫彩图案': [
    { name:'💎 宝石', grid: `....................\n.........kk.........\n........kWWk........\n.......kWWWWk.......\n......kYWWWWYk......\n.....kYYYppYYYk.....\n....kYYYppppYYYk....\n...kYYYppVVppYYYk...\n..kYYYppVVVVppYYYk..\n.kYYYppVVVVVVppYYYk.\n.kYYYppVVVVVVppYYYk.\n..kYYYppVVVVppYYYk..\n...kYYYppVVppYYYk...\n....kYYYppppYYYk....\n.....kYYYppYYYk.....\n......kYYYYYYk......\n.......kYYYYk.......\n........kYYk........\n.........kk.........\n....................` },
    { name:'✨ 八芒星', grid: `....................\n......Y......Y......\n....................\n.......Y....Y.......\n.......Y....Y.......\n........Y..Y........\n.Y......Y..Y......Y.\n...YY..........YY...\n.....YY..YY..YY.....\n........YJJY........\n........YJJY........\n.....YY..YY..YY.....\n...YY..........YY...\n.Y......Y..Y......Y.\n........Y..Y........\n.......Y....Y.......\n.......Y....Y.......\n....................\n......Y......Y......\n....................` },
    { name:'🌀 螺旋', grid: `....................\n......BBBBBBBB......\n.....BBBBGGGGGG.....\n...VBBBBGGGGGGGGG...\n...VBBBGGGGGGGGGG...\n..VBBBGGGGYYYYYYGG..\n.VVBBBGGGYYYYYYYYGG.\n.VVBBBGGYYYOOOYYYYG.\n.VVBBBGGYYOOOOOYYYY.\n.VVVBBBGGYRROOOOYYY.\n.VVVBBBBGGVRROOOYYY.\n.VVVVBBBBBVVRROOOYY.\n.RVVVVBBBVVVRROOOYY.\n.RRVVVVVVVVRRROOOYY.\n..RRVVVVVVRRRROOOY..\n...RRRRRRRRRROOOY...\n...RRRRRRRRROOOOY...\n.....RRRRRROOOO.....\n......OOOOOOOO......\n....................` },
    { name:'🕉️ 万花筒', grid: `....................\n......CPMOUBVY......\n.....VYPMUBYCCP.....\n...OUVYPOBVCCMOOO...\n...OUVCPOBVCMOOUU...\n..POOBYPOBCMUUBVVV..\n.YCMOUVCOVPUBVYCYYC.\n.VCCMUBYMVOBYCPPPPP.\n.BYCCMUBCBUCMOOOOMM.\n.UBVVCPOUPPBVVBBBUO.\n.OUBBBVVBPPUOPCVVBU.\n.MMOOOOMCUBCBUMCCYB.\n.PPPPPCYBOVMYBUMCCV.\n.CYYCYVBUPVOCVUOMCY.\n..VVVBUUMCBOPYBOOP..\n...UUOOMCVBOPCVUO...\n...OOOMCCVBOPYVUO...\n.....PCCYBUMPYV.....\n......YVBUOMPC......\n....................` },
    { name:'❄️ 雪花', grid: `....................\n....................\n....................\n....................\n.........BB.........\n....................\n...CCB...BB...BCC...\n.....C........C.....\n......BC....CB......\n....................\n....................\n......BC....CB......\n.....C........C.....\n...CCB...BB...BCC...\n....................\n.........BB.........\n....................\n....................\n....................\n....................` },
    { name:'🌌 星云', grid: `....................\n......CCCCCCCC......\n.....CCppppppCC.....\n...JCCppppppppCCJ...\n...CCpppYYYYpppCC...\n..CCCppYVVVVYppCCC..\n.JCCppYVppppVYppCCJ.\n.CCpppVVppppVVpppCC.\n.CCppVVppRRppVVppCC.\n.CCppVVppRRppVVppCC.\n.CppYVppRRRRppVYppC.\n.CppYVppRppRppVYppC.\n.CppYYppppppppYYppC.\n.CCppYYVVVVVVYYppCC.\n..CpppYYVVVVYYpppC..\n...CppppppppppppC...\n...CCCppppppppCCC...\n.....CCCCCCCCCC.....\n......CCCCCCCC......\n....................` },
    { name:'🪐 星球', grid: `....................\n....................\n....................\n....................\n.......bbbbbb.......\n......bbbbbbbb......\n.J...bbbbbbbbbb...J.\n.J..bbbbbWWbbbbb..J.\n.J..bbbbWWWWbbbb..J.\n.J..CCCWWWWWWCCC..J.\n.J..CCCWWWWWWCCC..J.\n.J..BBBBWWWWBBBB..J.\n.J..BBBBBWWBBBBB..J.\n.J...BBBBBBBBBB...J.\n......BBBBBBBB......\n.......BBBBBB.......\n....................\n....................\n....................\n....................` },
    { name:'🌄 极光', grid: `KKKKKKppppKKKKKKKppp\npKKKKppppppKKKKKpppp\nppKKpppVVVpppKKppVVV\nVpppppVVVVVpppppVVVV\nVVppVVVCCCVVpppVVCCC\nCVVVVVCCCCCVVVVVCCCC\nCCVVVCCBKBCCVVVCCBKK\nBCCCCCKKKKBCCCCCBKKK\nKBCCCKKKKKKBCCCBKKKK\nKKBBKKKKKKKKKBBKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK\nKKKKKKKKKKKKKKKKKKKK` },
    { name:'🌊 海浪', grid: `UUAAUUUUUUAAUUUUUUUA\nUUUUUUCCUUUUUUCCCUUU\nUUUUUCCCCUUUUUCCCCUU\nCUUUCCCCCCUUUCCCCCUU\nCCUCCCBBCCCUCCCBCCCU\nCCCCCBBBBCCCCCBBBCCC\nBCCCCBBBBCCCCBBBBBCC\nBCCCBBBBBBCCCBBBBBBC\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBAABBBBBBAAABBB\nBBBBBAAAABBBBBAAAABB\nABBBAAAAAABBBAAAAABB\nAABAAAUUAAABAAAUAAAB\nAAAAAUUUUAAAAAUUUAAA\nUAAAAUUUUAAAAUUUUUAA\nUAAAUUUUUUAAAUUUUUUA\nUUUUUUCCUUUUUUUCCUUU` },
    { name:'🏔️ 山与太阳', grid: `BBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nBBBBBBBBBBBBBBBBBBBB\nBBBBBJJBBBBBBBBBBBBB\nBBBBJJJBBBBBBBBBBBBB\nBBBBJJJBBBBBBBBBBBBB\nBBBBBBBBBBWBBBBBBBBB\nCCCCCCCCCWGWCCCCCCCC\nUUUUUggUGGGGGUUUUUUU\nUUUUgggGGGGGGGUUUUUU\nUUUUggGGGGGGGGGUUUUU\nUUUggGGGGGGGGGGGUUUU\nUUggGGGGGGGGGGGGGUUU\nUggGGGGGGGGGGGGGGGUU\nggGGGGGGGGGGGGGGGGGU\ngGGGGGGGGGGGGGGGGGGG\nGGGGGGGGGGGGGGGGGGGG\nGGGGGGGGGGGGGGGGGGGG` },
  ]
};
