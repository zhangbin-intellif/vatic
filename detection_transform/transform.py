import os
import sys
import json

inp = open(sys.argv[1])
outp = open(sys.argv[2],"w")
d = {}
while 1:
    line = inp.readline()
    if not line:
        break
    frame = int(line.strip("\n").split("/")[-1].split(".")[0])
    num = int(inp.readline().strip("\n"))
    if num != 0:
        arr = []
        for i in range(0,num):
            a = []
            line = inp.readline().strip("\n").split(" ")
            a.append(int(line[0]))
            a.append(int(line[1]))
            a.append(int(line[2]))
            a.append(int(line[3]))
            arr.append(a)
        d[frame] = arr
json_str = json.dumps(d)
outp.write("window.json=" + json_str + "\n")
inp.close()
outp.close()     
