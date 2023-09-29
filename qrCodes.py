import qrcode
from PIL import Image
for i in range(30):
    qr = qrcode.make("https://mille-et-une-vignes.github.io/milleVignes/QR/" + str(i + 1) + ".html")
    qr.save("C:/Users/friso/Documents/milleVignes/QRCodes/QR" + str(i + 1) + ".png");