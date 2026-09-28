#!/usr/bin/env python3
# 合并 原有模板 + 手绘 + 几何 到 templates.js
import re

def load_obj(name, src):
    m = re.search(name + r'\s*=\s*\{', src)
    start = src.index('{', m.start())
    depth = 0
    for i in range(start, len(src)):
        if src[i] == '{': depth += 1
        elif src[i] == '}':
            depth -= 1
            if depth == 0:
                return src[start:i+1]
    raise Exception('unbalanced')

def inner(obj):
    """去掉对象外层大括号，去掉末尾（若有）逗号，保留前导缩进"""
    s = obj[1:-1].rstrip()
    if s.endswith(','):
        s = s[:-1]
    return s.rstrip()

orig = open('base_templates.js').read()
hand = open('hand_templates.js').read()
geom = open('geom_templates.js').read()

tpl = inner(load_obj('TEMPLATES', orig)).strip('\n')
hold = inner(load_obj('HAND_TEMPLATES', hand)).strip('\n')
gobj = inner(load_obj('GEOM_TEMPLATES', geom)).strip('\n')

merged = '{\n' + tpl + ',\n' + hold + ',\n' + gobj + '\n}'

U = '// ===== 拼豆工坊 · 精品模板库 =====\n'
U+= '// 色板令牌 -> hex（与调色板一致）。空格或 . 为空豆。\n'
U+= "const TPL_TOKENS = {\n"
U+= "  ' ':null, '.':null,\n"
U+= "  'k':'#2B2B33','W':'#FFFFFF','E':'#E6E8EF','A':'#9BA3B0','a':'#4C525E',\n"
U+= "  'N':'#7A4E2E','n':'#4A2E1A','H':'#C98B4B','M':'#F5ECD9','S':'#F2C9A8',\n"
U+= "  'Z':'#FFB3A0','R':'#E6384B','O':'#F5821F','Y':'#FFCF40','G':'#3FA34D',\n"
U+= "  'g':'#1F7A4F','L':'#8FE3A8','T':'#2AA8A0','B':'#3D7BE0','b':'#2950B0',\n"
U+= "  'C':'#6FD3F5','P':'#FF8FC6','p':'#E6397A','V':'#9B5DE5','v':'#6A2C8F',\n"
U+= "  'J':'#F2B441','U':'#B4E8D5','Q':'#FF9E8A',\n"
U+= "  'K':'#12161C','y':'#FCE9A0','l':'#8FE3A8','r':'#C9184A','u':'#FFB703'\n"
U+= "};\n\n"
U+= "const TEMPLATES = " + merged + ";\n"

open('templates.js','w').write(U)
print('已合并写入 templates.js')