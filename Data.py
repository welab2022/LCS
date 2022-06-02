import pandas as pd
import pyodbc

# Import CSV
data = pd.read_csv (r'C:\Users\hoang\Desktop\Test\products.csv')   
df = pd.DataFrame(data)

# Connect to SQL Server
conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=DESKTOP-KDKLU93\SQLEXPRESS;'
                      'Database=database;'
                      'Trusted_Connection=yes;')
cursor = conn.cursor()

# Create Table
cursor.execute('''
		CREATE TABLE data (
			id int primary key,
			name nvarchar(50),
            dateofbirth date,
			phone int
			)
               ''')

# Insert DataFrame to Table
for row in df.itertuples():
    cursor.execute('''
                INSERT INTO products (id, name, dateofbirth, phone)
                VALUES (?,?,?)
                ''',
                row.id, 
                row.name,
                row.dateofbirth,
                row.phone
                )
conn.commit()