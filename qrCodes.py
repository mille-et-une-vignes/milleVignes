import qrcode
from PIL import Image
for i in range(40):
    qr = qrcode.make("https://mille-et-une-vignes.github.io/milleVignes/QR/" + str(i + 1) + ".html")
    qr.save("C:/Users/elias.gajo/Documents/milleVignes/QRCodes/QR" + str(i + 1) + ".png");