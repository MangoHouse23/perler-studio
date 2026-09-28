#!/usr/bin/env python3
# 生成"几何美学"拼豆模板，输出为 JS（token 字符 + grid 多行字符串）
import math, json

SZ = 20           # 正方形边长
H = (SZ-1)/2      # 像素中心映射用

def P(i,j):
    # 像素 (i,j) -> 归一化坐标 (x,y)，y 向上
    x=(j-H)/H; y=(H-i)/H; return x,y

def grid(rows):   # rows: list of str (len==SZ)
    # 转成 JS 模板字符串文本
    return "\n".join(rows)

EMPTY='.'

# ---- 各图案生成 ----
def heart():
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j)
            v=(x*x+y*y-1)**3 - x*x*y**3
            if v<=0:
                # 高光渐变：越偏左上偏白
                d = -v
                l.append('R' if d<0.55 else 'p')
            else:
                # 外圈描边感：接近边缘的地方做一点淡描边
                l.append('k' if v < 0.035 else EMPTY)
        r.append(''.join(l))
    return r

def rainbow_rings():
    col=['R','O','Y','G','B','V','P']
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y)
            if rho<=0.95:
                idx=min(int(rho*7.0),6)
                l.append(col[idx])
            else:
                l.append(EMPTY)
        r.append(''.join(l))
    return r

def gradient():
    col=['R','O','Y','G','B','V']
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j)
            t=min(max((x+1)/2,0),1)
            l.append(col[min(int(t*6),5)])
        r.append(''.join(l))
    return r

def vertical_gradient():  # 由上到下彩虹
    col=['Y','O','R','P','V','B','C']
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j)
            t=min(max((y+1)/2,0),1)  # y=-1 下, y=1 上 -> 顶部用 index 0
            l.append(col[min(int(t*7),6)])
        r.append(''.join(l))
    return r

def flower():
    r=[]
    col=['P','V','T','O']
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y)
            if rho<=0.16:
                l.append('Y')
            elif rho<=0.70:
                idx = 0 if (y>=0 and x>=0) else (1 if (y>=0 and x<0) else (2 if (y<0 and x<0) else 3))
                l.append(col[idx])
            else:
                l.append(EMPTY)
        r.append(''.join(l))
    return r

def snowflake():
    r=[]
    def rax(th):
        # 最近一条 60° 轴的角距离（0..pi/6）
        a=abs(((th%(math.pi/3)+math.pi/3)%(math.pi/3))-math.pi/6)
        return a
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y); th=math.atan2(y,x)
            if rho>0.94: l.append(EMPTY); continue
            if rho<0.05: l.append('C'); continue
            a=rax(th)
            # 主臂
            w=max(0.045,0.09-0.10*rho)
            if a<w:
                l.append('C' if rho<0.82 else EMPTY); continue
            # 分支：两圈小横枝(菱形钉)
            branch_band=0.045
            if abs(rho-0.36)<branch_band or abs(rho-0.56)<branch_band:
                if a<0.16 and a>0.05:
                    l.append('B'); continue
            l.append(EMPTY)
        r.append(''.join(l))
    return r

def diamond():
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j)
            m=abs(x)+abs(y)
            if m<=0.86:
                d=1-m/0.86
                if d>0.62: l.append('V')
                elif d>0.36: l.append('p')
                else: l.append('Y')
                # 顶部高光
                if y>0.55 and abs(x)<0.2: l[-1]='W'
            else:
                l.append('k' if m<0.95 else EMPTY)
        r.append(''.join(l))
    return r

def star():
    r=[]
    nd=8
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y)
            if rho>0.98: l.append(EMPTY); continue
            th=math.atan2(y,x)
            a=abs(((th%(2*math.pi/nd)+2*math.pi/nd)%(2*math.pi/nd))-math.pi/nd)
            # 中心亮兵 + 8射线
            if rho<0.16: l.append('J'); continue
            halfw=0.12*(1-rho/1.0)+0.02
            if a<halfw:
                l.append('Y')
            else:
                l.append(EMPTY)
        r.append(''.join(l))
    return r

def yinyang():
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y)
            if rho>0.9: l.append(EMPTY); continue
            # 界曲线：右上半白
            white=(y > 0.34*math.sin(math.pi*x*0.9))
            # 鱼眼
            if math.hypot(x,y-0.32)<0.11: l.append('W')
            elif math.hypot(x,y+0.32)<0.11: l.append('k')
            else: l.append('W' if white else 'k')
        r.append(''.join(l))
    return r

def spiral():
    col=['R','O','Y','G','B','V']
    K=3.2
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y)
            if rho>0.97: l.append(EMPTY); continue
            th=math.atan2(y,x)
            eff=th + rho*K
            idx=int(((eff%(2*math.pi))/(2*math.pi))*6) % 6
            l.append(col[idx])
        r.append(''.join(l))
    return r

def mandala():
    col=['P','C','Y','V','B','U','O','M']
    n=8
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y)
            if rho>0.97: l.append(EMPTY); continue
            th=math.atan2(y,x)
            seg=int((th%(2*math.pi/n))/(2*math.pi/n)*8) if rho>0.05 else 0
            ring=int(rho*7)
            idx=(seg+ring)%8
            l.append(col[idx])
        r.append(''.join(l))
    return r

def waves():
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j)
            band=int(( y + 0.22*math.sin((x+1)*math.pi*2.2) )*2.6)
            toks=['B','C','U','A']
            t=toks[(band%4+4)%4]
            l.append(t)
        r.append(''.join(l))
    return r

def mountain():
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j)  # y up, -1..1
            # 天空渐变
            sky_col = 'B' if y>0.15 else ('C' if y>-0.05 else 'U')
            # 太阳
            if math.hypot(x+0.45,y-0.35)<0.16: sky_col='J'
            # 后山
            r1=0.06-abs(x+0.42)*1.25
            # 前山
            r2=0.22-abs(x-0.05)*1.05
            col=sky_col
            if y<r1: col='g'
            if y<r2:
                col='G'
                # 雪顶
                if r2-y<0.14 and abs(x-0.05)<0.16: col='W'
            l.append(col)
        r.append(''.join(l))
    return r

def flower6():  # 六瓣花
    col=['P','V','p','T']
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y); th=math.atan2(y,x)
            if rho>0.92: l.append(EMPTY); continue
            if rho<0.13: l.append('Y'); continue
            # 花瓣方向角，6 对称
            a=(th%(2*math.pi/6)+2*math.pi/6)%(2*math.pi/6)
            halfw=0.30*math.sin(rho*math.pi)
            # 花瓣径向范围：rho 在瓣区间，宽随 rho 变化
            if a<halfw:
                petal=col[min(int((1-rho)*4),3)]
                l.append('W' if rho>0.82 else petal)
            else:
                l.append(EMPTY)
        r.append(''.join(l))
    return r

def nebula():  # 星云 / 七彩漩涡光环
    col=['R','p','V','B','C','L','Y','J']
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x,y)
            if rho>0.97: l.append(EMPTY); continue
            th=math.atan2(y,x)
            # 多层亮环 + 渐变
            band=rho*5 + 0.35*math.sin(th*3)
            idx=int(abs(band)%8)
            v=idx if rho<0.5 else (idx*3)%8
            l.append(col[v])
        r.append(''.join(l))
    return r

def mosaic():  # 菱齿棋盘（莫迪里阿尼纹理）
    col=['T','V','B','P','G','O','C','R']
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j)
            # 菱形网格
            diamond=abs(x)+abs(y)
            t=(x*2 + y*3)*math.pi
            shade = 1 if math.sin(t)>0 else 0
            g = int(abs(x*1.7+y*2.1)) % 8
            l.append(col[(g+shade)%8] if abs(diamond-int(diamond))>0.15 else 'k')
        r.append(''.join(l))
    return r

def planet():  # 星球 + 光环
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j); rho=math.hypot(x-0.,y)
            # 光环（倾斜椭圆）
            ring_e=math.hypot(x, y*0.32)
            rho_c=math.hypot(x,y)
            if rho_c>0.97: l.append(EMPTY); continue
            col=EMPTY
            # 星球本体
            if rho_c<=0.66:
                col='B' if y<-0.1 else ('C' if y<0.15 else 'b')
                if rho_c<0.28: col='W'   # 极地高光
            # 光环：在星球前/后
            ring_band=abs(ring_e-0.9)
            if ring_band<0.045:
                col='J'
            l.append(col)
        r.append(''.join(l))
    return r

def aurora():  # 极光横带
    col=['G','g','B','C','V','p']
    r=[]
    for i in range(SZ):
        l=[]
        for j in range(SZ):
            x,y=P(i,j)
            v=y + 0.18*math.sin((x+1)*math.pi*1.8)
            # 夜空
            if v<-0.35: l.append('K'); continue
            # 极光带
            band=int((v+0.4)*4.5)
            if 0<=band<6 and v>0.2:
                g=col[band%6]
                l.append(g)
            else:
                l.append('K')
        r.append(''.join(l))
    return r

GEOMS = {
  '几何美学': [
    ('🎯 同心圆环', rainbow_rings()),
    ('🌈 彩虹渐变', gradient()),
    ('🌈 竖彩虹', vertical_gradient()),
    ('🌸 六瓣花', flower6()),
    ('☯️ 太极', yinyang()),
  ],
  '炫彩图案': [
    ('💎 宝石', diamond()),
    ('✨ 八芒星', star()),
    ('🌀 螺旋', spiral()),
    ('🕉️ 万花筒', mandala()),
    ('❄️ 雪花', snowflake()),
    ('🌌 星云', nebula()),
    ('🪐 星球', planet()),
    ('🌄 极光', aurora()),
    ('🌊 海浪', waves()),
    ('🏔️ 山与太阳', mountain()),
  ],
}

# 校验
def validate(rows):
    assert all(len(row)==SZ for row in rows), "width mismatch"
    return len(rows)

# 输出 JS
out=[]
out.append('// ===== 几何美学拼豆模板（程序化生成，行宽恒定）=====')
out.append('const GEOM_TEMPLATES = {')
first=True
for cat, items in GEOMS.items():
    if not first: out.append(',')
    first=False
    out.append("  %r: [" % cat)
    for nm, rows in items:
        validate(rows)
        jsgrid = "\\n".join(rows)
        out.append("    { name:%r, grid: `%s` }," % (nm, jsgrid))
        # 用 %r 处理中文名；grid 里避免反引号（我们的token无反引号）
    out.append('  ]')
out.append('};')
open('geom_templates.js','w').write("\n".join(out))

# 统计
total=sum(len(v) for v in GEOMS.values())
print("已生成 %d 个几何模板，写入 geom_templates.js" % total)
for cat,items in GEOMS.items():
    print("  [%s] %d 个: %s" % (cat,len(items), ", ".join(n for n,_ in items)))