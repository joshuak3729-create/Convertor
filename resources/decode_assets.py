import base64
import subprocess

for name in ["icon-background", "icon-foreground", "icon-only", "splash"]:
    with open(f"resources/{name}.b64.txt") as f:
        data = f.read().strip()
    with open(f"resources/{name}.png", "wb") as f:
        f.write(base64.b64decode(data))
    print(f"resources/{name}.png recree")

subprocess.run(["npx", "@capacitor/assets", "generate", "--android"], check=True)
  
