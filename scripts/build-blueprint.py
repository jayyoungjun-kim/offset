"""Regenerate the service blueprint from the editable Markdown source."""
from pathlib import Path
import re
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.enums import TA_LEFT

ROOT=Path(__file__).resolve().parent.parent
FONT=Path('/Library/Fonts/Arial Unicode.ttf')
if not FONT.exists():
    raise SystemExit('Set FONT in scripts/build-blueprint.py to an installed Korean Unicode TrueType font.')
pdfmetrics.registerFont(TTFont('OffsetText',str(FONT)))
OUT=ROOT/'output/pdf/offset-service-blueprint.pdf'
OUT.parent.mkdir(parents=True,exist_ok=True)
PAGE=(595.28,841.89)
ink=HexColor('#1b1c1e');muted=HexColor('#696c73');blue=HexColor('#2449eb')
styles={
 'title':ParagraphStyle('title',fontName='OffsetText',fontSize=28,leading=40,textColor=ink,spaceAfter=24,wordWrap='CJK'),
 'h2':ParagraphStyle('h2',fontName='OffsetText',fontSize=13,leading=21,textColor=blue,spaceBefore=19,spaceAfter=9,wordWrap='CJK',keepWithNext=True),
 'body':ParagraphStyle('body',fontName='OffsetText',fontSize=10.5,leading=19,textColor=ink,spaceAfter=12,wordWrap='CJK'),
 'url':ParagraphStyle('url',fontName='OffsetText',fontSize=9,leading=17,textColor=muted,spaceAfter=12,wordWrap='CJK'),
}
class NumberedCanvas(canvas.Canvas):
 def __init__(self,*a,**kw):super().__init__(*a,**kw);self.pages=[]
 def showPage(self):self.pages.append(dict(self.__dict__));self._startPage()
 def save(self):
  total=len(self.pages)
  for state in self.pages:
   self.__dict__.update(state);self.footer(total);super().showPage()
  super().save()
 def footer(self,total):
  w,h=PAGE
  self.setStrokeColor(HexColor('#e5e6e9'));self.line(48,52,w-48,52)
  self.setFont('OffsetText',8);self.setFillColor(muted)
  self.drawString(48,35,'OFFSET / SERVICE BLUEPRINT · 2026.09.07 · V0.2')
  self.drawRightString(w-48,35,f'{self._pageNumber:02d} / {total:02d}')
def header(c,doc):
 c.saveState();c.setFont('Helvetica-Bold',11);c.setFillColor(ink);c.drawString(48,799,'O F F S E T')
 c.setFont('Helvetica',8);c.setFillColor(muted);c.drawRightString(547,799,'LEARN. REFINE. REPEAT.')
 c.setStrokeColor(HexColor('#e5e6e9'));c.line(48,783,547,783);c.restoreState()
source=(ROOT/'documentation/service-strategy.md').read_text()
blocks=[]
paragraph=[]
for line in source.splitlines():
 if line.startswith('#') or not line.strip():
  if paragraph: blocks.append('\n'.join(paragraph)); paragraph=[]
  if line.startswith('#'): blocks.append(line)
 else: paragraph.append(line)
if paragraph: blocks.append('\n'.join(paragraph))
story=[]
for part in blocks:
 part=part.strip()
 if part.startswith('# '):
  if story:story.append(PageBreak())
  story.append(Spacer(1,18));story.append(Paragraph(escape(part[2:]),styles['title']))
 elif part.startswith('## '):story.append(Paragraph(escape(part[3:]),styles['h2']))
 else:
  txt=escape(part).replace('\n','<br/>')
  txt=re.sub(r'(https://[^\s<]+)',r'<link href="\1" color="#2449eb">\1</link>',txt)
  story.append(Paragraph(txt,styles['url' if part.startswith('https://') else 'body']))
doc=SimpleDocTemplate(str(OUT),pagesize=PAGE,rightMargin=48,leftMargin=48,topMargin=77,bottomMargin=72,title='OFFSET Service Blueprint',author='OFFSET',subject='서비스 전략, 제품 구조, 디자인과 운영 기반')
doc.build(story,onFirstPage=header,onLaterPages=header,canvasmaker=NumberedCanvas)
print(OUT)
