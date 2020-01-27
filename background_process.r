nterms = 20
# first two terms
n1 = 0
n2 = 1
count = 2
fileConn<-file("output.txt")
while(count < nterms) {
  nth = n1 + n2
  print(nth)
  Sys.sleep(1)
  writeLines(c(toString(nth)), fileConn)
  n1 = n2
  n2 = nth
  count = count + 1
}
close(fileConn)
