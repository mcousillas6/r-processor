fileConn<-file("output.txt")
writeLines(c("Hello","World", Sys.getenv("FILE_PATH")), fileConn)
close(fileConn)
