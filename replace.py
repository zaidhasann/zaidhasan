import os
import re

replacements = {
    'src/components/command-palette.tsx': [('medium.com/@anuragdotdev', 'medium.com/@zaidhasan')],
    'src/components/socials.tsx': [
        ('@nodeanurag', '@ZaidHasan'),
        ('@anuragdotdev', '@zaidhasan'),
        ('in/nodeanurag', 'in/zaidhasan'),
        ('conveytoanurag@gmail.com', 'zeesoffice12@gmail.com'),
        ('anurag.dev', 'zaid.dev')
    ],
    'src/context/VisitorContext.tsx': [('nodeanurag_portfolio_views', 'zaidhasan_portfolio_views')],
    'src/pages/ContactPage.tsx': [('placeholder="Anurag Jha"', 'placeholder="Zaid Hasan"')],
    'src/sections/Writing.tsx': [('medium.com/@anuragdotdev', 'medium.com/@zaidhasan')],
    'README.md': [('"anurag", "jha"', '"zaid", "hasan"')]
}

for filepath, reps in replacements.items():
    if not os.path.exists(filepath):
        print(f"Not found: {filepath}")
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    for old, new in reps:
        content = content.replace(old, new)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
print('Done replacing.')
