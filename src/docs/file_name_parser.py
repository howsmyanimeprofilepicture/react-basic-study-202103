import os
import shutil
import glob as g

mds = g.glob("*.md")

for md in mds:
    shutil.move(
        md, md.replace(" ", "-").replace("&", "-").replace("(", "-").replace(")", "-")
    )

