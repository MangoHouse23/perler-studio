#!/usr/bin/env python3
import re
src = open('templates.js').read()
known = set(' . k W E A a N n H M S Z R O Y G g L T B b C P p V v J U Q K y l r u'.split())

# 顶层的 TEMPLATES 大对象：从 const TEMPLATES 之后到最后一个 }
tpl = src[src.index('const TEMPLATES') + len('const TEMPLATES') : src.rfind('}')]
cats = re.findall(r"^  '([^']+)': \[", tpl, re.M)
# 模板条目 grid（几何模板里行间是字面 \n，需先展开为真实换行）
grids = re.findall(r"grid:\s*`([^`]*)`", src)
ngrids = [g.replace('\\n', '\n') for g in grids]
print('类别数=%d 模板数=%d' % (len(cats), len(grids)))

bad_tok = {}
bad_w = []
for g in ngrids:
    rows = g.split('\n')
    w = len(rows[0])
    for r in rows:
        if len(r) != w:
            bad_w.append((len(r), w, repr(r)))
        for c in r:
            if c not in known:
                bad_tok.setdefault(c, 0); bad_tok[c] += 1
print('非法令牌:', bad_tok or '无')
print('宽度不一致:', '无' if not bad_w else bad_w[:5])
print('\n类别分布:')
for c in cats:
    print(' -', c)