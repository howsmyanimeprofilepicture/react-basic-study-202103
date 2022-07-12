import glob as g


mds = g.glob("*.md")
i = 2
for md in mds:
    with open(md, "r", encoding="utf-8") as f:
        new_text = f"---\nsidebar_position: {i}\n---\n" + f.read()
    with open(md, "w", encoding="utf-8") as f:
        f.write(new_text)
    i += 1
