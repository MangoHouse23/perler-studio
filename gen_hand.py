#!/usr/bin/env python3
# 手绘萌系角色模板；校验行宽一致 + 色板令牌合法；输出可直接并入 templates.js 的 JS
import re, io

KNOW=set(". k W E A a N n H M S Z R O Y G g L T B b C P p V v J U Q K y l r u".split())

def jsgrid(rows):
    rows=list(rows)
    w=max(len(r) for r in rows)
    # 规整：右补透明'.', 行内空格->'.'
    out=[]
    for r in rows:
        r=''.join('.' if c==' ' else c for c in r)
        out.append(r.ljust(w,'.'))
    return w, "\n".join(out)

def add(cats,cat,items):
    items=list(items)
    for name,rows in items:
        w, g = jsgrid(rows)
        # 校验令牌
        bad=sorted({c for r in g.split('\n') for c in r if c not in KNOW})
        assert not bad, (name, bad)
        rows_n=g.split('\n'); assert all(len(x)==len(rows_n[0]) for x in rows_n), name
    cats.setdefault(cat,[]).extend(items)

HAND={}

add(HAND,'海洋',[
 ('🐡 河豚',[
  ".kkkkkkkkkkkk.",
  "kYYYYYYYYYYYYk",
  "kYYkkYYYYkkYYk",
  "kYYkkYYYYkkYYk",
  "kYYYYkkkkYYYYk",
  "kYYYYYYYYYYYYk",
  "kYYWWWWWWWWYYk",
  "kWWWWWWWWWWWWk",
  ".kkkkkkkkkkkk.",
 ]),
 ('🐢 海龟',[
  "...kkkkkkkk...",
  "..kkggggggkk..",
  ".kggGGGGGGggk.",
  "kgGGGGGGGGGGkg",
  "kgGGkkkkkkGGkg",
  "kgGkkkkkkkkGkg",
  ".kggkkkkkkggk.",
  "..kkkkkkkkkk..",
 ]),
 ('🌊 海星',[
  "....kkkkk....",
  "...kYYYYYk...",
  ".kkkkYYYYkkk.",
  "kYkkkkkkkYYk.",
  "kYkYYYYYYkYk.",
  "kkkYkkkkkYkk.",
  "..kkYkkkYkk..",
  "...kkYkYkk...",
  "....kkYkk....",
  ".....kkk.....",
 ]),
])

add(HAND,'虫虫',[
 ('🐝 小蜜蜂',[
  "..k........k..",
  "..k........k..",
  "..J........J..",
  ".kkkkkkkkkkkk.",
  "kYYYYYYYYYYYYk",
  "kYYkkkYYkkkYYk",
  "kYYWWkYYkWWYYk",
  "kYYkkkYYkkkYYk",
  "kYYYYYYYYYYYYk",
  "kYYYYYYYYYYYYk",
  ".kkkkkkkkkkkk.",
  "kYYYYYYYYYYYYk",
  ".kkkkkkkkkkkk.",
 ]),
 ('🐞 小瓢虫',[
  "..kk..kk..",
  ".kkkkkkkk.",
  ".kWWkkWWk.",
  ".kkkkkkkk.",
  "kkkkkkkkkk",
  "kRRRkRRRkR",
  "kRkRkRRkRR",
  "kRRRRkRRRR",
  "kkkkkkkkkk",
 ]),
 ('🦋 蝴蝶',[
  "..kMMk..kMMk..",
  ".kMMMMkkMMMMk.",
  "kMMMMMMMMMMMMk",
  ".kMMMMMMMMMMk.",
  "..kkkkkkkkkk..",
  "...kKKKKKKk...",
  "..kkkk..kkkk..",
  ".kkkkk..kkkkk.",
 ]),
 ('🐌 小蜗牛',[
  "...kkkkk...",
  "..kGGGGGk..",
  ".kGGkkkGGk.",
  ".kGGkGkGGk.",
  ".kGGkkkGGk.",
  "..kGGGGGk..",
  "...kkkkk...",
  "..kkk..kk..",
 ]),
])

add(HAND,'植物',[
 ('🍄 蘑菇',[
  "....kkkk....",
  "..kkRRRRkk..",
  ".kRRRRRRRRk.",
  ".kRRRRRRRRk.",
  ".kRRWRRWRRk.",
  ".kkkkkkkkkk.",
  "..kWWWWWWk..",
  "..kWWWWWWk..",
  "..kWWWWWWk..",
  "..kNNNNNNk..",
  "..kkkkkkkk..",
  "..kkkkkkkk..",
 ]),
 ('🌹 玫瑰',[
  "...kkkkkk...",
  "..kRRRRRRk..",
  ".kRRRRRRRRk.",
  "kRRkkRRkkRRk",
  "kRRkRRRRkRRk",
  ".kRRRRRRRRk.",
  "..kkggggkk..",
  "..kkkkkkkk..",
 ]),
 ('🌵 仙人掌',[
  "....kkkk....",
  "...kGGGGk...",
  "...kGGGGk...",
  "..kkkGGkkk..",
  ".kGGGGGGGGk.",
  ".kGGkggkGGk.",
  ".kGGGGGGGGk.",
  "...kkkkkk...",
  "..kHHHHHHk..",
  "..kHHHHHHk..",
  "...kkkkkk...",
 ]),
 ('🌻 向日葵',[
  "..kkkkkkk..",
  ".kYYYYYYYk.",
  "kYYYYYYYYYk",
  "kYkNNNNNkYk",
  "kYNNNNNNNYk",
  "kYYYYYYYYYk",
  ".kYYYYYYYk.",
  "..kkkkkkk..",
  "...kgggk...",
  "...kgggk...",
  "....kkk....",
 ]),
])

add(HAND,'太空',[
 ('👽 外星人',[
  "..Y..Y..Y..",
  "..k..k..k..",
  ".kkkkkkkkk.",
  "kGGGGGGGGGk",
  "kGGkkkGGkGGk",
  "kGGWWGGWWGGk",
  "kGGkkkGGkGGk",
  "kGGGGGGGGGk",
  "kGGGGkkkGGGk",
  "kGGGGGGGGGk",
  ".kkkkkkkkk.",
  "..GGGGGGG..",
  "..kkkkkkk..",
 ]),
 ('🌙 月亮与星',[
  "...kkkkkkk.....",
  "..kkWWWWWKk....",
  "..kWWWWWWKKKk..",
  ".kWWWWWWWWKKKk.",
  ".kWWWWWWWWKKKk.",
  "..kWWWWWKKKKk..",
  "..kkWKKKKk.....",
  "...kkkkk.......",
  "..k...U..k.....",
  "..U........U...",
 ]),
])

add(HAND,'怪兽',[
 ('🦖 小恐龙',[
  ".kkkkkkkkk.",
  "kGGGGGGGGGk",
  "kGGkkGGkkGk",
  "kGGWWGGWWGk",
  "kGGkkGGkkGk",
  "kGGGGGGGGGk",
  "kGGGGkkGGGGk" if False else "kGGGGkkkkGGK" ,
  "kGGGGGGGGGk",
  ".kkkkkkkkk.",
  "..GGGGGGG..",
  "..kkkkkkk..",
 ]),
 ('🟢 史莱姆',[
  ".kkkkkkkk.",
  "kLLLLLLLLk",
  "kLkkkLLkkkLk" if False else "kLLLLLLLLk",
  "kLkkkLLkkkLk" if False else "kLLWkLLWkLLk",
  "kLLLLLLLLk",
  ".kkkkkkkk.",
 ]),
])

add(HAND,'萌物',[
 ('🎮 精灵球',[
  "...kkk...",
  ".kkkkkkk.",
  "kRRRRRRRk",
  "kRRRRRRRk",
  "kRRRRRRRk",
  "kkkkkkkkk",
  "kkkWWkkkk",
  "kkkkkkkkk",
  "kWWWWWWWk",
  ".kkkkkkk.",
 ]),
 ('🎁 礼物盒',[
  "..kRRk.kRRk..",
  ".kkRRkkkRRkk.",
  "kRRRRRRRRRRRk",
  "kkRRRRRRRRRkk",
  ".kRRRRRRRRRk.",
  ".kRRkkkkkRRk.",
  ".kHzkZZZZkHk.." if False else ".kyZYkYYYYkY..",
  ".kZZkkkkkZZk.",
  ".kkkkkkkkkkk.",
 ]),
 ('💡 小灯泡',[
  "..kkkkkkk..",
  ".kYYYYYYYk.",
  "kYWYYYYYWYk" if False else "kYYYYYYYYYk",
  "kYYYkYkYYYk",
  "kYYYYYYYYYk",
  ".kYYYYYYYk.",
  "..kYKKYk.." ,
  "..kKKKKk..",
  "...kkkk...",
  "..kk..kk..",
 ]),
])

add(HAND,'甜品',[
 ('🍦 冰淇淋',[
  "...PPPPP...",
  "..PPPPPPP..",
  ".PPPPPPPPP.",
  ".PPPPPPPPP.",
  ".PPPPPPPPP.",
  "YYYYYYYYYYY",
  "YYYYYYYYYYY",
  "..NNNNNNN..",
  "..kHHHHHk..",
  "...kHHHk...",
  "....kHk....",
  ".....kk....",
 ]),
 ('🧁 纸杯蛋糕',[
  "...kkkkkk...",
  "..kYYYPPPk..",
  ".kYYYYPPPPk.",
  "kYYYkKKPPYYk" if False else "kYYYPPPPPYYk",
  "kkYYYYYYYYkk",
  ".kkkkkkkkkk.",
  "..kHHHHHHk..",
  "..kHHHHHHk..",
  "...kkkkkk...",
 ]),
 ('🍬 波板糖',[
  "..k.k..k.k..",
  ".kkkkkkkkkk.",
  "kYYkkkkkkYYk",
  "kYYkPPkYYk.." if False else "kYYkPPPPPYYk",
  "kYkPPPPPPkYk" if False else "kYPPPPPPPPYk",
  "kYYkPPPPPYYk",
  "kYYkkkkkkYYk",
  ".kkkkkkkkkk.",
  "..k.k..k.k..",
 ]),
])

add(HAND,'交通',[
 ('🚗 小汽车',[
  "..kkkkkkkkkk..",
  "..kHHHHHHHHk..",
  ".kkHHHHHHHHkk.",
  "kkHHHkTTkHHHkk",
  "kHHHHkTTkHHHHk",
  "kHHHHHHHHHHHHk",
  "kkkkkkkkkkkkkk",
 ]),
 ('🚌 小巴士',[
  "..kkkkkkkkkk..",
  ".kkYYYYYYYYkk.",
  "kYYYYYYYYYYYYk",
  "kYYkkkkkYYkk.k" if False else "kYYkWWkYYWWYk",
  "kYYkWWkYYWWYk",
  "kYYkkkkkYYkk.k" if False else "kYYkkkkYYkkYk",
  "kYYYYYYYYYYYYk",
  "kkkkkkkkkkkkkk",
 ]),
])

add(HAND,'运动',[
 ('⚽ 足球',[
  "...kkkkkkk...",
  "..kWWWWWWWk..",
  ".kWWWWWWWWWk.",
  "kWWkWWWWkWWk.",
  "kWWkKWWKkWWk.",
  "kWWkWWWWkWWk.",
  ".kWWWWWWWWWk.",
  "..kWWWWWWWk..",
  "...kkkkkkk...",
 ]),
 ('🏀 篮球',[
  "...kkkkkkk...",
  "..kOOOOOOOk..",
  ".kOOOOOOOOOk.",
  "kOOkkkkkkOOk.",
  "kOkOOOOOOOkO.",
  "kOOkkkkkkOOk.",
  ".kOOOOOOOOOk.",
  "..kOOOOOOOk..",
  "...kkkkkkk...",
 ]),
])

add(HAND,'机器人',[
 ('🤖 机器人',[
  "......Y......",
  "......k......",
  "......k......",
  ".kkkkkkkkkkk.",
  "kAAAAAAAAAAk",
  "kABBBAAAABBBk",
  "kAAAAAAAAAAk",
  "kAAAAAAAAAAk",
  "kAAAkkkkkAAAk",
  "kAAAAAAAAAAk",
  ".kkkkkkkkkkk.",
  "..AAAAAAAAAA..",
  "..kkkkkkkkkk..",
 ]),
 ('🎩 魔法帽',[
  "........kkk........",
  ".......kkkkkk......",
  "......kkkkkkkk.....",
  ".....kkkkkkkkkkk...",
  "....kkkkkkkkkkkkk..",
  "kkkkkkkkkkkkkkkkkkk",
  "kAAAAAAAAAAAAAAAAAk",
  "kkkkkkkkkkkkkkkkkkk",
  "..kRRkkkkkkkkRRk...",
  "..kkkkkkkkkkkkkk...",
 ]),
])

# 输出 JS
lines=['// ===== 手绘萌系角色模板（行宽已统一）=====','const HAND_TEMPLATES = {']
first=True
for cat,items in HAND.items():
    if not first: lines[-1]=lines[-1]+','
    first=False
    lines.append("  '%s': ["%cat)
    for name,rows in items:
        w,g=jsgrid(rows)
        lines.append("    { name:'%s', grid:`%s` },"%(name,g))
    lines.append('  ]')
lines.append('};')
out='\n'.join(lines)
open('hand_templates.js','w',encoding='utf-8').write(out)
print("已写入 hand_templates.js")
for c,it in HAND.items():
    print(" [%s] %d: %s"%(c,len(it),", ".join(n for n,_ in it)))