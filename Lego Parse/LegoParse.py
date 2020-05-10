import xml.dom.minidom

def main():
      doc = xml.dom.minidom.parse('Lego.lxfml')
      print(doc.nodeName)
      print(doc.firstChild.tagName)

      part = doc.getElementsByTagName("Part")
      i = 1;
      F = open("LegoData","w")
      for ref in part:
            #print(i)
            Material = ref.getAttribute("materialID")
            angle = ref.getAttribute("angle")
            ax = ref.getAttribute("ax")
            ay = ref.getAttribute("ay")
            az = ref.getAttribute("az")
            tx = ref.getAttribute("tx")
            ty = ref.getAttribute("ty")
            tz = ref.getAttribute("tz")
            #Prints
            Data = (f'{i} Material ID: {Material} Angle: {angle} ax: {ax} ay: {ay} az: {az} tx: {tx} ty: {ty} tz: {tz}')
            print(Data)
            F.write(Data + "\n")
            i = i+1;
      F.close()

if __name__ == "__main__":
      main();
