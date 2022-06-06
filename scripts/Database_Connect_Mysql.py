import mysql.connector

mydb = mysql.connector.connect(host="127.0.0.1", user="root", passwd="hoangle@2003")

#create & drop
code_1 = 'CREATE DATABASE `LCS_Database_Connection`'
mycursor = mydb.cursor()
mycursor.execute(code_1)
