from time import sleep
from unittest import result
import mysql.connector
import csv
import sys

mydb = mysql.connector.connect(host="127.0.0.1", user="root", 
                               passwd="hoangle@2003", database="lcs_database_connection")

csv_data = csv.reader(open('users.csv'))
header = next(csv_data)


code_1 = "CREATE TABLE `lcs_database_connection`.`user` (" \
    "`Email` nvarchar(50) not null," \
    "`Name` nvarchar(50) NULL, " \
    "`Password` nvarchar(50) NULL, " \
    "`CreatedAt` varchar(255) NULL, " \
    "`UpdatedAt` varchar(255) NULL, " \
    "`Enable` varchar(5), PRIMARY KEY (`Email`));"


code_2 = 'SELECT * FROM user'


#create database in MySql
mycursor = mydb.cursor()
mycursor.execute(code_1)
print("Done Create Table")
#Importing csv files to database
print("Importing the file...")
for row in csv_data:
    print(row)
    mycursor.execute("INSERT INTO `lcs_database_connection`.`user` (`Email`, `Name`, `Password`, `CreatedAt`, `UpdatedAt`, `Enable`) VALUES (%s, %s, %s, %s, %s, %s)", row)
    

#end
mydb.commit()
print("Done Importing")
mycursor.execute(code_2)
result = mycursor.fetchall()
for x in result:
    print(x)
print("Done Show")
sleep(500)
mycursor.close()

