// ===== 拼豆工坊 · 手绘精品模板 =====
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
};