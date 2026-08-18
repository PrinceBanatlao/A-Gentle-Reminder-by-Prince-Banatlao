import os
import json

CONTENT_DIR = "content_data"
OUTPUT_FILE = "content.js"

base_files = ["ch0_4.json", "ch5_8.json", "ch9_12.json", "ch13_16.json"]
extra_files = ["extra.json", "extra2.json"]

base_pages = []

for fname in base_files:
    path = os.path.join(CONTENT_DIR, fname)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            base_pages.extend(json.load(f))

# Load extra pages
extra_pages = []
for fname in extra_files:
    path = os.path.join(CONTENT_DIR, fname)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            extra_pages.extend(json.load(f))

# Weave extra pages into base_pages based on 'chapter_target'
# chapter_target is the chapter number (e.g. "Chapter I", "Chapter II")
# We insert the extra page right before the next chapter divider or at the end of the chapter.
pages = []
current_chapter = None

for page in base_pages:
    if page.get("type") == "chapter_divider":
        # Before switching to a new chapter, flush all extra pages meant for the current_chapter
        if current_chapter:
            to_insert = [p for p in extra_pages if p.get("chapter_target") == current_chapter]
            pages.extend(to_insert)
            extra_pages = [p for p in extra_pages if p.get("chapter_target") != current_chapter]
        
        current_chapter = page.get("chapterNumber")
    
    pages.append(page)

# Flush any remaining for the last chapter
if current_chapter:
    to_insert = [p for p in extra_pages if p.get("chapter_target") == current_chapter]
    pages.extend(to_insert)
    extra_pages = [p for p in extra_pages if p.get("chapter_target") != current_chapter]

# If any extra pages have no chapter_target or didn't match, just append them before the cover at the end
# Wait, the last page is a cover. Let's insert them right before the last page.
if extra_pages:
    last_page = pages.pop() if pages and pages[-1].get("type") == "cover" else None
    pages.extend(extra_pages)
    if last_page:
        pages.append(last_page)


# Assign page numbers and fix TOC
toc_entries = []
current_page_number = 1

for page in pages:
    page['pageNum'] = current_page_number
    if page.get('type') == 'chapter_divider':
        toc_entries.append({
            'chapter': page.get('chapterNumber', ''),
            'title': page.get('chapterTitle', ''),
            'page': current_page_number
        })
    current_page_number += 1

# Inject TOC into the TOC page
for page in pages:
    if page.get('type') == 'toc':
        page['toc_entries'] = toc_entries

# Write to content.js
js_content = "const bookPages = " + json.dumps(pages, indent=2) + ";\n"
js_content += "if (typeof module !== 'undefined' && module.exports) { module.exports = { bookPages }; }"

with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully compiled {len(pages)} pages into {OUTPUT_FILE}.")
