import re

path = "android/app/src/main/AndroidManifest.xml"
content = open(path).read()
meta = '<meta-data android:name="com.google.android.gms.ads.APPLICATION_ID" android:value="ca-app-pub-3940256099942544~3347511713"/>'
content = re.sub(r"(<application[^>]*>)", r"\1\n        " + meta, content, count=1)
open(path, "w").write(content)
print("AndroidManifest.xml patché avec succès")
